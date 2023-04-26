import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Astronomy() {
  const { Forecast, Astronomy } = useSelector((state) => state.weather);
  const url = `http:${Forecast.forecastday[0].day.condition.icon}`;
  return (
    <section className="current-container">
      <div className="current-city">
        <img src={url} alt="cloud" />
        <p>{Forecast.forecastday[0].day.condition.text}</p>
      </div>
      <p className="separator">Astronomy Details</p>
      <ul className="current-details">
        <li className="current-list">
          <Link to="/country/current">
            <p>Sunrise</p>
            <div>
              <span>{Astronomy.astro.sunrise}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/forecast">
            <p>Sunset</p>
            <div>
              <span>{Astronomy.astro.sunset}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/search">
            <p>Moonrise</p>
            <div>
              <span>{Astronomy.astro.moonrise}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/history">
            <p>Moonset</p>
            <div>
              <span>{Astronomy.astro.moonset}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/future">
            <p>Moon Phase</p>
            <div>
              <span>{Astronomy.astro.moon_phase}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/astronomy">
            <p>Moon Illumination</p>
            <div>
              <span>{Astronomy.astro.moon_illumination}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
      </ul>
    </section>

  );
}
