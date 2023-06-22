import React, { useState, useEffect } from "react";
import { fetchData } from "./api";

const DateDifferenceCalculator: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const data = await fetchData();
        setStartDate(data.startDate);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  const handleCalculate = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = Math.abs(end.getTime() - start.getTime());
    const differenceInDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    setDifference(differenceInDays);
  };

  return (
    <div>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {difference > 0 && <p>The difference is {difference} days.</p>}
    </div>
  );
};

export default DateDifferenceCalculator;
