'use client'

import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { dateFormatter } from '@/app/utils/dateFormatter';

dayjs.extend(duration);

export default function TimeElapsed({startDate}) {
  const [timePassed, setTimePassed] = useState({
    years: 0,
    months: 0,
    weeks: 0,
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
        years: diff.years(),
        months: diff.months(),
        weeks: diff.weeks(),
        days: diff.days(),
        hours: diff.hours(),
        minutes: diff.minutes(),
        seconds: diff.seconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Tempo desde 01/01/2025:</h1>
      <p>{dateFormatter(timePassed.years)} anos</p>
      <p>{dateFormatter(timePassed.months)} meses</p>
      <p>{dateFormatter(timePassed.weeks)} semanas</p>
      <p>{dateFormatter(timePassed.days)} dias</p>
      <p>{dateFormatter(timePassed.hours)} horas</p>
      <p>{dateFormatter(timePassed.minutes)} minutos</p>
      <p>{dateFormatter(timePassed.seconds)} segundos</p>
    </div>
  );
}