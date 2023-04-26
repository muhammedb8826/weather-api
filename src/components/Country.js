import {
  Badge, Button, Spinner,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Country.css';

export default function Country() {
  const { Location, isLoading, error } = useSelector((state) => state.weather);
  if (isLoading) {
    return (
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }
  if (error) {
    return (
      <>
        <Badge bg="danger">{error}</Badge>
      </>
    );
  }

  return (
    <section className="countries">
      <div className="weather-display">
        <p>{Location.location.country}</p>
        <p className="description">
          {Location.location.name}
          {' '}
          Weather Forecast
        </p>
      </div>
      <p className="separator">Weather Details</p>
      <ul className="details">
        <li>
          <Link to="/country/details">
            Current
          </Link>
        </li>
        <li>
          <Link to="/country/details">
            Forecast
          </Link>
        </li>
        <li>
          <Link to="/country/details">
            Search/Autocomplete
          </Link>
        </li>
        <li>
          <Link to="/country/details">
            History
          </Link>
        </li>
        <li>
          <Link to="/country/details">
            Future
          </Link>
        </li>
        <li>
          <Link to="/country/details">
            Astronomy
          </Link>
        </li>
        <li>
          <Link to="/country/details">
            Time Zone
          </Link>
        </li>
        <li>
          <Link to="/country/details">
            Sports
          </Link>
        </li>
      </ul>
    </section>
  );
}
