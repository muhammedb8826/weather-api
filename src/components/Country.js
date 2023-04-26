import { BsArrowRightCircle } from 'react-icons/bs';
import {
  Badge, Button, Spinner,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Country.css';

export default function Country() {
  const { Current, isLoading, error } = useSelector((state) => state.weather);
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
        <p>{Current.location.country}</p>
        <p className="description">
          {Current.location.name}
          {' '}
          Weather Forecast
        </p>
      </div>
      <p className="separator">Weather Details</p>
      <ul className="details">
        <li className="detail-list">
          <Link to="/country/current">
            <BsArrowRightCircle />
            <span>Current</span>
          </Link>
        </li>
        <li className="detail-list">
          <Link to="/country/forecast">
            <BsArrowRightCircle />
            <span>Forecast</span>
          </Link>
        </li>
        <li className="detail-list">
          <Link to="/country/search">
            <BsArrowRightCircle />
            <span>Search/Autocomplete</span>
          </Link>
        </li>
        <li className="detail-list">
          <Link to="/country/history">
            <BsArrowRightCircle />
            <span>History</span>
          </Link>
        </li>
        <li className="detail-list">
          <Link to="/country/future">
            <BsArrowRightCircle />
            <span>Future</span>
          </Link>
        </li>
        <li className="detail-list">
          <Link to="/country/astronomy">
            <BsArrowRightCircle />
            <span>Astronomy</span>
          </Link>
        </li>
        <li className="detail-list">
          <Link to="/country/timezone">
            <BsArrowRightCircle />
            <span>Time Zone</span>
          </Link>
        </li>
        <li className="detail-list">
          <Link to="/country/sports">
            <BsArrowRightCircle />
            <span>Sports</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
