import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
          <Link to="/country/current">
            <p>Stadium</p>
            <div>
              <span>{Sports.football[0].stadium}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/current">
            <p>Country</p>
            <div>
              <span>{Sports.football[0].country}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/current">
            <p>Tournament</p>
            <div>
              <span>{Sports.football[0].tournament}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/current">
            <p>Start</p>
            <div>
              <span>{Sports.football[0].start}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/current">
            <p>Match</p>
            <div>
              <span>{Sports.football[0].match}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
