import React, { useState, useEffect } from "react";

export const CountDownTimer = () => {
  // This function will calculate difference between current and target times
  // const calculateTimeRemaining = () => {
  //   let currTime = new Intl.DateTimeFormat("en-US", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit"
  //   }).format(Date.now());
  //   console.log("current time is ", time);
  // };
  const convertTimeFormat = (time) => {
    let timeVar = parseInt(time, 10);

    let hours = Math.floor(timeVar / 60 / 60);
    let minutes = Math.floor(timeVar / 60) - hours * 60;
    let seconds = timeVar % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };

  // let formatTime = hours + ":" + minutes + ":" + seconds;

  let time = 60;

  // console.log(formatTime);
  // console.log("hours: ", hours, "Minutes: ", minutes, "Seconds: ", seconds);

  const [timeRemaining, setTimeRemaining] = useState(time);

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const timer = () => {
    timeRemaining > 0 &&
      setTimeout(() => setTimeRemaining(timeRemaining - 1), 500);
    return () => timer;
  };

  useEffect(() => {
    timer();
  }, [timer]);

  return (
    <div className="countdown-timer">
      <div>Countdown: {convertTimeFormat(timeRemaining)}</div>
    </div>
  );
};
