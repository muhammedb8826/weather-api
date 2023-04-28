import { BsArrowRightCircle } from 'react-icons/bs';
import '../styles/Current.css';

export default function CurrentView({ country }) {
  const {
    cloud,
    name,
    conditionText,
    conditionIcon,
    humidity,
    lastUpdated,
    windDegree,
    tempreture,
  } = country;

  const url = `http:${conditionIcon}`;
  return (
    <>
      <div className="current-city">
        <img src={url} alt="cloud" />
        <p>{name}</p>
      </div>
      <p className="separator">Current Details</p>
      <ul className="current-details">
        <li className="current-list">
          <div>
            <p>Cloud</p>
            <div className="value-container">
              <span>{cloud}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Condition</p>
            <div className="value-container">
              <span>{conditionText}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Humidity</p>
            <div className="value-container">
              <span>{humidity}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Last Updatet Time</p>
            <div className="value-container">
              <span>{lastUpdated}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Wind Degree</p>
            <div className="value-container">
              <span>{windDegree}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Tempereture</p>
            <div className="value-container">
              <span>{tempreture}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
