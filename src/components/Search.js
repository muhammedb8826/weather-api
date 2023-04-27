import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';

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
          <div>
            <p>ID</p>
            <div className="value-container">
              <span>{Search[0].id}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Latitude</p>
            <div className="value-container">
              <span>{Search[0].lat}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Longitude</p>
            <div className="value-container">
              <span>{Search[0].lon}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>URL</p>
            <div className="value-container">
              <span>{Search[0].url}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
