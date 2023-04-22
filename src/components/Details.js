import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Details({
  cloud,
  conditionText,
  conditionIcon,
  humidity,
  lastUpdated,
  windDegree,
  tempreture,
}) {
  const url = `https:${conditionIcon}`;
  return (
    <Container>
      <nav>
        <Link to="/">{'<'}</Link>
      </nav>
      <ul>
        <li>{cloud}</li>
        <li><img src={url} alt="weather icon" /></li>
        <li>{conditionText}</li>
        <li>{humidity}</li>
        <li>{lastUpdated}</li>
        <li>{windDegree}</li>
        <li>{tempreture}</li>
      </ul>
    </Container>
  );
}

Details.propTypes = { cloud: PropTypes.number.isRequired };
Details.propTypes = { conditionText: PropTypes.string.isRequired };
Details.propTypes = { conditionIcon: PropTypes.string.isRequired };
Details.propTypes = { humidity: PropTypes.number.isRequired };
Details.propTypes = { lastUpdated: PropTypes.string.isRequired };
Details.propTypes = { windDegree: PropTypes.number.isRequired };
Details.propTypes = { tempreture: PropTypes.number.isRequired };
