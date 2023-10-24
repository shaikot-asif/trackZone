import { useState } from "react";

const EventForm = ({
  value = { title: "", time: "06:30", date: "" },
  getEventClock,
}) => {
  const [event, setEvent] = useState({ ...value });

  const handelChange = (e) => {
    let { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    getEventClock(event);
    setEvent({ ...value });
  };
  return (
    <div>
      <h1>Event Form</h1>
      <form onSubmit={handelSubmit}>
        <label htmlFor="title">Enter your title</label>
        <input
          id="title"
          type="text"
          value={event.title}
          name={"title"}
          onChange={handelChange}
        />
        <label htmlFor="start">Start Date</label>
        <input
          id="start"
          type="datetime-local"
          name="date"
          value={event.date}
          onChange={handelChange}
        />

        <label htmlFor="end">End Date</label>
        <input
          id="end"
          type="time"
          name="time"
          value={event.time}
          onChange={handelChange}
        />
        {/* <label htmlFor="time">Hour and Minute</label>
        <input
          id="time"
          type="time"
          name="time"
          onChange={handelChange}
          value={event.time}
          placeholder={"10:00"}
        /> */}

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default EventForm;
