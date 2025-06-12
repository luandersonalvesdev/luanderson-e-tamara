"use client";

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { dateFormatter } from "@/app/utils/dateFormatter";
import Image from "next/image";
import TimeCountCard from "../../../TimeCountCard";

dayjs.extend(duration);

const TIME_LABELS = ['Meses', 'Dias', 'Horas', 'Minutos', 'Segundos']

export default function TimeElapsed({ startDate }) {
  const [timePassed, setTimePassed] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const diff = dayjs.duration(now.diff(startDate));

      setTimePassed({
        months: diff.months(),
        days: diff.days(),
        hours: diff.hours(),
        minutes: diff.minutes(),
        seconds: diff.seconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-3 text-white text-xs sm:text-base">
      <div class="w-full md:max-w-lg">
        <img src="/imgs/us.png" alt="us" className="rounded-md"/>
      </div>
      <div className="flex gap-4 sm:gap-8 ">
        {Object.values(timePassed).map((time, index) => {
          return <TimeCountCard value={dateFormatter(time)} label={TIME_LABELS[index]}/>
        })}
      </div>
    </div>
  );
}
