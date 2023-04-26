import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
          <Link to="/country/current">
            <p>Maximum Temperature</p>
            <div>
              <span>{Future.forecastday[0].day.maxtemp_c}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/forecast">
            <p>Minimum Tempreture</p>
            <div>
              <span>{Future.forecastday[0].day.mintemp_c}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/search">
            <p>Date</p>
            <div>
              <span>{Future.forecastday[0].date}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
      </ul>
    </section>

  );
}
