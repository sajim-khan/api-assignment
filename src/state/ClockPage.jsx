import React, { useEffect, useState } from "react";
import * as DateFns from "date-fns";

function getTimes(date) {
  return {
    hours: DateFns.getHours(date),
    minutes: DateFns.getMinutes(date),
    seconds: DateFns.getSeconds(date),
  };
}

function formatTime(time){
    return time < 10 ? `0${time}`: time;
}

const ClockPage = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);

  const time = getTimes(date);

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-5">Clock Page</h1>
      <h1 className="text-4xl font-bold mb-5">
        {formatTime(time.hours)} : {formatTime(time.minutes)} : {formatTime(time.seconds)}
      </h1>
    </div>
  );
};

export default ClockPage;

