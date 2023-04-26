import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import '../styles/Current.css';

export default function Current({
  cloud,
  name,
  conditionText,
  conditionIcon,
  humidity,
  lastUpdated,
  windDegree,
  tempreture,
}) {
  const url = `https:${conditionIcon}`;
  return (
    <section className="current-container">
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
            <BsArrowRightCircle />
            <span>{conditionText}</span>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/search">
            <BsArrowRightCircle />
            <span>{humidity}</span>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/history">
            <BsArrowRightCircle />
            <span>{lastUpdated}</span>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/future">
            <BsArrowRightCircle />
            <span>{windDegree}</span>
          </Link>
        </li>
        <li className="current-list">
          <Link to="/country/astronomy">
            <BsArrowRightCircle />
            <span>{tempreture}</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

Current.propTypes = { cloud: PropTypes.number.isRequired };
Current.propTypes = { name: PropTypes.string.isRequired };
Current.propTypes = { conditionText: PropTypes.string.isRequired };
Current.propTypes = { conditionIcon: PropTypes.string.isRequired };
Current.propTypes = { humidity: PropTypes.number.isRequired };
Current.propTypes = { lastUpdated: PropTypes.string.isRequired };
Current.propTypes = { windDegree: PropTypes.number.isRequired };
Current.propTypes = { tempreture: PropTypes.number.isRequired };
