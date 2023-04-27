import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';

export default function Sports() {
  const { Sports } = useSelector((state) => state.weather);

  return (
    <section className="current-container">
      <div className="current-city">
        <p>Sports</p>
        <p>Football</p>
      </div>
      <p className="separator">Football Details</p>
      <ul className="current-details">
        <li className="current-list">
          <div>
            <p>Stadium</p>
            <div className="value-container">
              <span>{Sports.football[0].stadium}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Country</p>
            <div className="value-container">
              <span>{Sports.football[0].country}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Tournament</p>
            <div className="value-container">
              <span>{Sports.football[0].tournament}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Start</p>
            <div className="value-container">
              <span>{Sports.football[0].start}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Match</p>
            <div className="value-container">
              <span>{Sports.football[0].match}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
