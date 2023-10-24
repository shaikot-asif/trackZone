import { useState } from "react";
import { generate } from "shortid";
const useEvent = () => {
  const [events, setEvents] = useState({});

  const getEventsByClockId = (clockId) => {
    return Object.keys(events).filter((item) => item.startsWith(clockId));
  };

  const getEvent = (isArray = false) => {
    if (!isArray) {
      return events;
    }
    return Object.values(events);
  };

  const addEvents = (event) => {
    event.id = generate();
    const { clockId, id } = event;
    setEvents((prev) => ({
      ...prev,
      [`${clockId}|${id}`]: event,
    }));
  };

  const deleteEvent = (id) => {
    const allEvents = { ...events };

    delete allEvents[id];
    setEvents(allEvents);
  };

  const deleteEventsByClockId = (clockId) => {
    const events = Object.keys(events).filter(
      (item) => !item.startsWith(clockId)
    );
    setEvents(events);
  };
  return {
    events,
    getEvent,
    getEventsByClockId,
    addEvents,
    deleteEvent,
    deleteEventsByClockId,
  };
};

export default useEvent;
