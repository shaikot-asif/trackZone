import { useState } from "react";
import { generate } from "shortid";
const useClockList = () => {
  const [clocks, setClocks] = useState([]);
  const createClock = (clock) => {
    clock.id = generate();
    setClocks([...clocks, clock]);
  };
  const updateClock = (updatedClock) => {
    const updatedClocks = clocks.map((clock) => {
      if (clock.id === updatedClock.id) {
        return updatedClock;
      }
      return clock;
    });

    setClocks(updatedClocks);
  };

  const deleteClock = (id) => {
    const deletedClock = clocks.filter((clock) => clock.id !== id);
    setClocks(deletedClock);
  };

  return {
    createClock,
    clocks,
    updateClock,
    deleteClock,
  };
};

export default useClockList;
