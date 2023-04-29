import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';

export default function Future() {
  const { Future } = useSelector((state) => state.weather);
  const url = `http:${Future.forecastday[0].day.condition.icon}`;
  return (
    <section className="current-container">
      <div className="current-city">
        <img src={url} alt="cloud" />
        <p>{Future.forecastday[0].day.condition.text}</p>
      </div>
      <p className="separator">Future Details</p>
      <ul className="current-details">
        <li className="current-list">
          <div>
            <p>Maximum Temperature</p>
            <div className="value-container">
              <span>{Future.forecastday[0].day.maxtemp_c}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Minimum Tempreture</p>
            <div className="value-container">
              <span>{Future.forecastday[0].day.mintemp_c}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Date</p>
            <div className="value-container">
              <span>{Future.forecastday[0].date}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
      </ul>
    </section>

  );
}
