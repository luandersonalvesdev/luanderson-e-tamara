"use client";

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { dateFormatter } from "@/app/utils/dateFormatter";
import Image from "next/image";
import TimeCountCard from "./TimeCountCard";
import Title from "@/app/customComponents/CustomCarousel/Title";

dayjs.extend(duration);

const TIME_LABELS = ['Anos', 'Meses', 'Dias', 'Horas', 'Minutos', 'Segundos']
const START_DATE = "2024-12-14T22:00:00"

export default function TimeElapsed() {
  const [timePassed, setTimePassed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const diff = dayjs.duration(now.diff(START_DATE));

      setTimePassed({
        years: diff.years(),
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
    <div className="flex flex-col justify-center items-center gap-2 text-white text-xs sm:text-base">
      <Title text="Juntos há" />
      <div class="w-full">
        <img src="/imgs/us.png" alt="us" className="rounded-md"/>
      </div>
      <div className="flex gap-4 sm:gap-8 ">
        {Object.values(timePassed).map((time, index) => {
          return <TimeCountCard key={index} value={dateFormatter(time)} label={TIME_LABELS[index]}/>
        })}
      </div>
    </div>
  );
}
