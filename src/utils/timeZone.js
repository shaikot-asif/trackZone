import { TIMEZONE_OFFSET } from "../components/constants/timeZone";

export const getOffset = (start = -11.5, end = 12) => {
  const offsets = [];

  for (let i = start; i <= end; i += 0.5) {
    offsets.push(i);
  }
  return offsets;
};

export const getTimeZone = () => {
  return ["UTC", "GMT", ...Object.keys(TIMEZONE_OFFSET)];
};

export const hours = (start = 1, end = 12) => {
  const hours = [];
  for (let i = start; i <= end; i++) {
    hours.push(i);
  }
  return hours;
};

export const minutes = (start = 1, end = 60) => {
  const minutes = [];
  for (let i = start; i <= end; i++) {
    minutes.push(i);
  }
  return minutes;
};
