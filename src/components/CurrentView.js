import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import '../styles/Current.css';

export default function CurrentView({
  cloud,
  name,
  conditionText,
  conditionIcon,
  humidity,
  lastUpdated,
  windDegree,
  tempreture,
}) {
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
            <p>Tempreture</p>
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

CurrentView.propTypes = { cloud: PropTypes.number.isRequired };
CurrentView.propTypes = { name: PropTypes.string.isRequired };
CurrentView.propTypes = { conditionText: PropTypes.string.isRequired };
CurrentView.propTypes = { conditionIcon: PropTypes.string.isRequired };
CurrentView.propTypes = { humidity: PropTypes.number.isRequired };
CurrentView.propTypes = { lastUpdated: PropTypes.string.isRequired };
CurrentView.propTypes = { windDegree: PropTypes.number.isRequired };
CurrentView.propTypes = { tempreture: PropTypes.number.isRequired };
