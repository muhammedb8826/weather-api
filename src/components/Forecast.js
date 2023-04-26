import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Forecast() {
  const { Forecast } = useSelector((state) => state.weather);
  const url = `http:${Forecast.forecastday[0].day.condition.icon}`;
  return (
    <section className="current-container">
      <div className="current-city">
        <img src={url} alt="cloud" />
        <p>{Forecast.forecastday[0].day.condition.text}</p>
      </div>
      <p className="separator">Forecast Details</p>
      <ul className="current-details">
        <li className="current-list">
          <Link to="/country/current">
            <p>Average Humidity</p>
            <div>
              <span>{Forecast.forecastday[0].day.avghumidity}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/forecast">
            <p>Average Tempreture</p>
            <div>
              <span>{Forecast.forecastday[0].day.avgtemp_c}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/search">
            <p>Average Miles</p>
            <div>
              <span>{Forecast.forecastday[0].day.avgvis_miles}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/history">
            <p>UV</p>
            <div>
              <span>{Forecast.forecastday[0].day.uv}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/future">
            <p>Chance of Rain</p>
            <div>
              <span>{Forecast.forecastday[0].day.daily_chance_of_rain}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/astronomy">
            <p>Chance of Snow</p>
            <div>
              <span>{Forecast.forecastday[0].day.daily_chance_of_snow}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
      </ul>
    </section>

  );
}
