import ClockListItem from "./clockItemList";
import classes from "../shared/index.module.css";
const ClockList = ({
  localClock,
  deleteClock,
  updateClock,
  clocks,
  getEventFormValue,
  whichCLock,
  toggleEvent,
}) => {
  return (
    <div>
      <h3>Other Clock</h3>

      <div>
        {clocks.length === 0 ? (
          <p>There is no clock, Please Create one</p>
        ) : (
          <div className={classes.clockListGrp}>
            {clocks.map((clock) => (
              <div className={classes.clockListItem} key={clock.id}>
                <ClockListItem
                  key={clock.id}
                  clock={clock}
                  deleteClock={deleteClock}
                  updateClock={updateClock}
                  localClock={localClock}
                  getEventFormValue={getEventFormValue}
                  whichCLock={whichCLock}
                  toggleEvent={toggleEvent}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClockList;
