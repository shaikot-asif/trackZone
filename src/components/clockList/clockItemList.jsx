import useClock from "../../hook/useClock";
import ClockAction from "../shared/clockAction/ClockAction";
import ClockDisplay from "../shared/ClockDisplay";
import { formatDistance } from "date-fns";
import classes from "../shared/index.module.css";
import useTimer from "../../hook/useTimer";
const ClockListItem = ({
  clock,
  updateClock,
  deleteClock,
  localClock,
  getEventFormValue,
  whichCLock,
  toggleEvent,
  tEventShow,
}) => {
  const { date } = useClock(clock.timeZone, clock.offset);
  const timer = useTimer(date);
  if (!timer) {
    return null;
  }

  return (
    <div>
      <ClockDisplay
        date={timer}
        offset={clock.offset}
        timeZone={clock.timeZone}
        title={clock.title}
        lctitle={true}
      />

      <p>TIME DIFFERENCE: {formatDistance(localClock, date)}</p>
      <ClockAction
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
        getEventFormValue={getEventFormValue}
        whichCLock={whichCLock}
        toggleEvent={toggleEvent}
      />
    </div>
  );
};

export default ClockListItem;
