import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';

export default function Forecast() {
  const { Forecast } = useSelector((state) => state.weather);
  console.log(Forecast);
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
          <div>
            <p>Average Humidity</p>
            <div className="value-container">
              <span>{Forecast.forecastday[0].day.avghumidity}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Average Tempreture</p>
            <div className="value-container">
              <span>{Forecast.forecastday[0].day.avgtemp_c}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Average Miles</p>
            <div className="value-container">
              <span>{Forecast.forecastday[0].day.avgvis_miles}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>UV</p>
            <div className="value-container">
              <span>{Forecast.forecastday[0].day.uv}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Chance of Rain</p>
            <div className="value-container">
              <span>{Forecast.forecastday[0].day.daily_chance_of_rain}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Chance of Snow</p>
            <div className="value-container">
              <span>{Forecast.forecastday[0].day.daily_chance_of_snow}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
      </ul>
    </section>

  );
}
