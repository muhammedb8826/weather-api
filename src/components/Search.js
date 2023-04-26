import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Search() {
  const { Search } = useSelector((state) => state.weather);

  return (
    <section className="current-container">
      <div className="current-city">
        <p>{Search[0].country}</p>
        <p>{Search[0].name}</p>
      </div>
      <p className="separator">Search/Autocomplete Details</p>
      <ul className="current-details">
        <li className="current-list">
          <Link to="/country/current">
            <p>ID</p>
            <div>
              <span>{Search[0].id}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/forecast">
            <p>Latitude</p>
            <div>
              <span>{Search[0].lat}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/search">
            <p>Longitude</p>
            <div>
              <span>{Search[0].lon}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/history">
            <p>URL</p>
            <div>
              <span>{Search[0].url}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
