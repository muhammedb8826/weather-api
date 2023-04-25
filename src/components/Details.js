import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Details({
  cloud,
  country,
  conditionText,
  conditionIcon,
  humidity,
  lastUpdated,
  windDegree,
  tempreture,
}) {
  const url = `https:${conditionIcon}`;
  return (
    <Container className="detail-container">
      <nav className="details-nav">
        <Link to="/">
          {'<'}
          <span>go back</span>
        </Link>
      </nav>
      <ul>
        <li>{`Cluod: ${cloud}`}</li>
        <li>{`Last updated: ${lastUpdated}`}</li>
        <li>{`Humidity: ${humidity}`}</li>
      </ul>
      <div className="country-name">
        <img src={url} alt="weather icon" />
        <p>{country}</p>
      </div>
      <ul>
        <li>{`Condition: ${conditionText}`}</li>
        <li>{`Wind Degree: ${windDegree}`}</li>
        <li>{`Temperature: ${tempreture}`}</li>
      </ul>
    </Container>
  );
}

Details.propTypes = { cloud: PropTypes.number.isRequired };
Details.propTypes = { country: PropTypes.string.isRequired };
Details.propTypes = { conditionText: PropTypes.string.isRequired };
Details.propTypes = { conditionIcon: PropTypes.string.isRequired };
Details.propTypes = { humidity: PropTypes.number.isRequired };
Details.propTypes = { lastUpdated: PropTypes.string.isRequired };
Details.propTypes = { windDegree: PropTypes.number.isRequired };
Details.propTypes = { tempreture: PropTypes.number.isRequired };
