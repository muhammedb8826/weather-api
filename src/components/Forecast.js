import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Forecast() {
  const { Forecast } = useSelector((state) => state.weather);
  console.log(Forecast);
  return (
    <div>
      forecast
      <Link to="/">Go back</Link>
    </div>
  );
}
