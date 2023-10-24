import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";
import { getTimeZone } from "../utils/timeZone";

const TIMEZONE_OFFSET = getTimeZone();
const useClock = (timeZone, offset = 0) => {
  const [localDate, setLocalDate] = useState(null);

  const [localTimeZone, setLocalTimeZone] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);
  const [utc, setUtc] = useState(null);

  useEffect(() => {
    const localDate = new Date();
    const localOffset = localDate.getTimezoneOffset();
    const utc = addMinutes(localDate, localOffset);
    setUtc(utc);
    setLocalOffset(localOffset);
  }, []);

  useEffect(() => {
    if (utc !== null) {
      if (timeZone) {
        offset = TIMEZONE_OFFSET[timeZone] ?? offset;

        const newUtc = addMinutes(utc, offset);
        setLocalDate(newUtc);
      } else {
        const newUtc = addMinutes(utc, -localOffset);
        setLocalDate(newUtc);
        const newUtcArr = newUtc.toUTCString().split(" ");
        setLocalTimeZone(newUtcArr.pop());
      }
    }
  }, [utc, timeZone, offset]);

  return {
    date: localDate,
    dateUtc: utc,
    offset: offset || -localOffset,
    timeZone: timeZone || localTimeZone,
  };
};

export default useClock;
