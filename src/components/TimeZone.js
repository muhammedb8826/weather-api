import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function TimeZone() {
  const { TimeZone } = useSelector((state) => state.weather);
  return (
    <section className="current-container">
      <div className="current-city">
        <p>{TimeZone.location.localtime}</p>
        <p>{TimeZone.location.tz_id}</p>
      </div>
      <p className="separator">Timezone Details</p>
      <ul className="current-details">
        <li className="current-list">
          <Link to="/country/current">
            <p>Country</p>
            <div>
              <span>{TimeZone.location.country}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/forecast">
            <p>City</p>
            <div>
              <span>{TimeZone.location.name}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/search">
            <p>Local Time</p>
            <div>
              <span>{TimeZone.location.localtime}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
      </ul>
    </section>

  );
}
