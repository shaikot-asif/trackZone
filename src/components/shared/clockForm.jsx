import { useEffect, useState } from "react";
import { getOffset } from "../../utils/timeZone";
import { TIMEZONE_OFFSET } from "../constants/timeZone";
import classes from "../shared/index.module.css";
const ClockForm = ({
  values = { title: "", timeZone: "UTC", offset: 0 },
  handelClock,
  title = true,
  edit = false,
}) => {
  const [formValues, setFormValues] = useState({ ...values });

  useEffect(() => {
    if (TIMEZONE_OFFSET[formValues.timeZone]) {
      setFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValues.timeZone],
      }));
    }
  }, [formValues.timeZone]);

  const handelChange = (event) => {
    let { name, value } = event.target;

    if (name === "offset") {
      value = Number(value) * 60;
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handelClock(formValues);
  };
  return (
    <div className={classes.formDesign}>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="title">Enter Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formValues.title}
              onChange={handelChange}
              disabled={!title}
            />
          </div>

          <div className={classes.timeZoneOffset}>
            <div>
              <label htmlFor="timeZone">Enter Timezone</label>
              <select
                name="timeZone"
                value={formValues.timeZone}
                onChange={handelChange}
              >
                <option value="GMT">GMT</option>
                <option value="UTC">UTC</option>
                <option value="PST">PST</option>
                <option value="EST">EST</option>
                <option value="EDT">EDT</option>
                <option value="BST">BST</option>
                <option value="MST">MST</option>
              </select>
            </div>

            <div>
              {(formValues.timeZone === "GMT" ||
                formValues.timeZone === "UTC") && (
                <div>
                  <label htmlFor="offset">Enter Offset</label>
                  <select
                    id="offset"
                    name="offset"
                    value={formValues.offset / 60}
                    onChange={handelChange}
                  >
                    {getOffset().map((offset) => (
                      <option key={offset} value={offset}>
                        {offset}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
          <button type="submit">{edit ? "Update" : "Create"}</button>
        </div>
      </form>
    </div>
  );
};

export default ClockForm;
