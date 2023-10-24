import { useEffect } from "react";
import { useState } from "react";
import EventForm from "../../clockList/events/eventForm";
import EventList from "../../clockList/events/eventList";
import EventListItem from "../../clockList/events/eventListItem";
import ClockForm from "../clockForm";
import classes from "../index.module.css";
const ClockAction = ({
  local = false,

  editTr = true,
  eventsTr = true,
  createTr = true,
  closeTr = false,
  eventCrTr = false,
  clock,
  updateClock,
  createClock,
  deleteClock,
  getEventFormValue,
  whichCLock,
  toggleEvent,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [isEvent, setIsEvent] = useState(false);
  const [eventForm, setEventForm] = useState(false);

  const handelCreateClock = (values) => {
    createClock(values);
  };

  return (
    <div>
      <div className={classes.bntDiv}>
        {editTr && (
          <button
            onClick={() => {
              setIsEdit(!isEdit);
              setIsCreate(false);
            }}
          >
            Edit
          </button>
        )}
        {eventsTr && (
          <div>
            {!local && (
              <button
                onClick={() => {
                  setIsEvent(!isEvent);
                  toggleEvent(!isEvent);
                  whichCLock(clock.id);
                }}
              >
                Events
              </button>
            )}
          </div>
        )}
        {closeTr && (
          <div>
            <button
              onClick={() => {
                toggleEvent(false);
                setIsEvent(!isEvent);
              }}
            >
              X
            </button>
          </div>
        )}

        {/* {eventCrTr && (
          <div>
            {!local && (
              <button
                onClick={() => {
                  setEventForm(!eventForm);
                  whichCLock(clock.id);
                }}
              >
                Create Event
              </button>
            )}
          </div>
        )} */}
        {createTr && (
          <div>
            {local ? (
              <button
                onClick={() => {
                  setIsCreate(!isCreate);
                  setIsEdit(false);
                }}
              >
                Create
              </button>
            ) : (
              <button onClick={() => deleteClock(clock.id)}>Delete</button>
            )}
          </div>
        )}
      </div>

      {/* {eventForm && <EventForm getEventClock={getEventFormValue} />} */}

      <div className={classes.editCreateClock}>
        <div>
          {isEdit && (
            <>
              <h3>Edit Clock</h3>
              <ClockForm
                handelClock={updateClock}
                title={!local}
                values={clock}
                edit={true}
              />
              <button
                className={classes.closeBtn}
                id="btn"
                onClick={() => setIsEdit(!isEdit)}
              >
                X
              </button>
            </>
          )}
        </div>

        <div>
          {isCreate && (
            <>
              <h3>Create Clock</h3>
              <ClockForm handelClock={handelCreateClock} />
              <button
                className={classes.closeBtn}
                id="btn"
                onClick={() => setIsCreate(!isCreate)}
              >
                X
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClockAction;
