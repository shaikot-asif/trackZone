import { useState } from "react";
import ClockList from "../components/clockList";
import EventList from "../components/clockList/events/eventList";
import LocalClock from "../components/localClock";
import useClockList from "../hook/useClockList";
import classes from "../components/shared/index.module.css";
import useEvent from "../hook/useEvent";
import { useEffect } from "react";

const LOCAL_CLOCK_INIT = {
  title: "Local Clock",
  timeZone: "",
  offset: 0,
  date: null,
};

const value = { title: "", time: null, date: null };

const App = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });

  const [event, setEvent] = useState({ ...value });
  const { clocks, createClock, deleteClock, updateClock } = useClockList();
  const [clockId, setClcokId] = useState();
  const [eventShow, setEventShow] = useState(false);

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };
  // console.log("date:", new Date());
  const toggleEvent = (data) => {
    setEventShow(data);
  };

  const whichCLock = (id) => {
    setClcokId(id);
  };

  const getEventFormValue = (data) => {
    setEvent(data);
  };

  return (
    <div className={classes.root}>
      <div className={classes.localClockDesignMain}>
        <div className={classes.localClockDesign}>
          <LocalClock
            clock={localClock}
            updateCLock={updateLocalClock}
            createClock={createClock}
          />
        </div>
      </div>
      <div className={classes.otherClock}>
        <ClockList
          localClock={localClock.date}
          clocks={clocks}
          deleteClock={deleteClock}
          updateClock={updateClock}
          getEventFormValue={getEventFormValue}
          whichCLock={whichCLock}
          toggleEvent={toggleEvent}
        />
        <EventList
          clockId={clockId}
          event={event}
          eventShow={eventShow}
          whichCLock={whichCLock}
          getEventFormValue={getEventFormValue}
          toggleEvent={toggleEvent}
        />
      </div>
    </div>
  );
};

export default App;
