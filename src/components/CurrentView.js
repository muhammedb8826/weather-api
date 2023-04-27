import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
          <Link to="/country/current">
            <p>Cloud</p>
            <div>
              <span>{cloud}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/forecast">
            <p>Condition</p>
            <div>
              <span>{conditionText}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/search">
            <p>Humidity</p>
            <div>
              <span>{humidity}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/history">
            <p>Last Updatet Time</p>
            <div>
              <span>{lastUpdated}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/future">
            <p>Wind Degree</p>
            <div>
              <span>{windDegree}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/astronomy">
            <p>Tempreture</p>
            <div>
              <span>{tempreture}</span>
              <BsArrowRightCircle />
            </div>
          </Link>
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
