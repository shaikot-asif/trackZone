import { format } from "date-fns";
import classes from "../shared/index.module.css";
const ClockDisplay = ({ date, timeZone, offset, title, lctitle = false }) => {
  const offsetHr = offset / 60;

  return (
    <div>
      <h3>{lctitle && title}</h3>
      {/* <h3>{format(date, "hh:mm:ss")}</h3> */}

      <div className={classes.mntHrSec}>
        <span>{format(date, "hh  :  mm : ")}</span>
        <div className={classes.amPmSec}>
          <span>{format(date, " ss")}</span>
          <span>{format(date, "aa")}</span>
        </div>
      </div>

      <p>
        {timeZone}
        {offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
      </p>
    </div>
  );
};

export default ClockDisplay;
