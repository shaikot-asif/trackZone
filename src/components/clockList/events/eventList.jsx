import { useEffect, useState } from "react";
import useEvent from "../../../hook/useEvent";
import EventListItem from "./eventListItem";
import EventForm from "./eventForm";
import classes from "../../shared/index.module.css";
import { addMinutes } from "date-fns";

const EventList = ({
  event,
  clockId,
  eventShow,
  getEventFormValue,
  whichCLock,
  toggleEvent,
}) => {
  if (!event || !clockId) {
    return null;
  }

  const { getEventsByClockId, addEvents, events } = useEvent();

  const [prevEvent, setPrevEvent] = useState({});

  useEffect(() => {
    setPrevEvent(event);
  }, [prevEvent]);

  useEffect(() => {
    event.clockId = clockId;
    event.status = false;
    event.date = new Date(event.date);
    if (
      !(
        Object.values(event)[0] === Object.values(prevEvent)[0] &&
        Object.values(event)[1] === Object.values(prevEvent)[1] &&
        Object.values(event)[2] === Object.values(prevEvent)[2]
      )
    ) {
      addEvents(event);
      setPrevEvent(event);
    }
  }, [event]);

  return (
    <div>
      <EventListItem
        eventShow={eventShow}
        event={event}
        getEventFormValue={getEventFormValue}
        clockId={clockId}
        getEventsByClockId={getEventsByClockId(clockId)}
        events={events}
        toggleEvent={toggleEvent}
      />
    </div>
  );
};
export default EventList;
