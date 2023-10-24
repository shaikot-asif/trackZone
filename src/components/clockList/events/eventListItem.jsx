import { useEffect, useState } from "react";
import useEvent from "../../../hook/useEvent";
import ClockAction from "../../shared/clockAction/ClockAction";
import classes from "../../shared/index.module.css";
import EventForm from "../events/eventForm";

import { sub, differenceInMinutes, addMinutes } from "date-fns";

const EventListItem = ({
  event,
  eventShow,
  getEventFormValue,
  clockId,
  getEventsByClockId,
  events,
  tEvent,
  toggleEvent,
}) => {
  const [eventForm, setEventForm] = useState(false);

  return (
    <div>
      <div>
        <div>
          {eventShow && (
            <div className={classes.eventMainBody}>
              {getEventsByClockId.length === 0 || event.time === null ? (
                <p>No Events</p>
              ) : (
                <div className={classes.eventGrid}>
                  {getEventsByClockId.map((eventsByClockId, index) => (
                    <div key={index} className={classes.gridItem}>
                      <div>
                        {events[eventsByClockId].time !== null && (
                          <div>
                            <h3>{events[eventsByClockId].title}</h3>
                            <div>
                              <h4>Start Time</h4>
                              <div className={classes.eventDate}>
                                <p>
                                  {events[eventsByClockId].date
                                    .toUTCString()
                                    .split(" ")
                                    .slice(0, 1)}
                                </p>
                                <p>
                                  {events[eventsByClockId].date
                                    .toUTCString()
                                    .split(" ")
                                    .slice(1, 2)}
                                </p>
                                <p>
                                  {events[eventsByClockId].date
                                    .toUTCString()
                                    .split(" ")
                                    .slice(2, 3)}
                                </p>
                                <p>
                                  {events[eventsByClockId].date
                                    .toUTCString()
                                    .split(" ")
                                    .slice(3, 4)}
                                </p>
                              </div>

                              <div>
                                <p>
                                  {addMinutes(
                                    events[eventsByClockId].date,
                                    -360
                                  )
                                    .toUTCString()
                                    .split(" ")
                                    .slice(4, 5)}
                                </p>
                                <p>
                                  {events[eventsByClockId].date
                                    .toUTCString()
                                    .split(" ")
                                    .slice(5, 6)}
                                </p>
                              </div>

                              <div>
                                <h4>End Date</h4>
                                <span>{events[eventsByClockId].time}</span>
                              </div>
                            </div>

                            <h2>diff</h2>
                            <h4>
                              {differenceInMinutes(
                                events[eventsByClockId].date,
                                new Date()
                              ) >= 0
                                ? differenceInMinutes(
                                    events[eventsByClockId].date,
                                    new Date()
                                  )
                                : 0}
                            </h4>

                            {differenceInMinutes(
                              events[eventsByClockId].date,
                              new Date()
                            ) === 0 && (events[eventsByClockId].status = true)}

                            {events[eventsByClockId].status ? (
                              <span>done</span>
                            ) : (
                              <span>pending</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div>
                <button onClick={() => setEventForm(!eventForm)}>
                  Create Event
                </button>

                {eventForm && <EventForm getEventClock={getEventFormValue} />}
              </div>

              <div className={classes.closeBtn}>
                <ClockAction
                  eventsTr={false}
                  editTr={false}
                  createTr={false}
                  closeTr={true}
                  eventCrTr={true}
                  toggleEvent={toggleEvent}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventListItem;
