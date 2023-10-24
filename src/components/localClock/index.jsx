import { useEffect } from "react";
import useClock from "../../hook/useClock";
import useEvent from "../../hook/useEvent";
import useTimer from "../../hook/useTimer";
import ClockAction from "../shared/clockAction/ClockAction";
import ClockDisplay from "../shared/ClockDisplay";
import classes from "../shared/index.module.css";
const LocalClock = ({ clock, updateCLock, createClock }) => {
  const { date, offset, timeZone } = useClock(clock.timeZone, clock.offset);
  const timer = useTimer(date);
  useEffect(() => {
    updateCLock({
      timeZone,
      offset,
      date,
    });
  }, [date]);
  return (
    <div>
      <h3>{clock.title}</h3>
      {timer && (
        <div>
          <ClockDisplay
            date={timer}
            offset={offset}
            timeZone={timeZone}
            title={clock.title}
          />
        </div>
      )}

      <ClockAction
        clock={clock}
        updateClock={updateCLock}
        local={true}
        createClock={createClock}
      />
    </div>
  );
};

export default LocalClock;
