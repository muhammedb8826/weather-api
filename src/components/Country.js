import {
  Badge, Button, Container, Spinner,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
      <Badge bg="danger">Something went wrong</Badge>
    );
  }

  return (
    <Container>
      <h1>
        {Location.location.name}
        {' '}
        Weather Forecast
        {' '}
        <span className="country">{Location.location.country}</span>
      </h1>
      <div className="weather-display">

        <p>{Location.location.country}</p>

      </div>
      <div className="current">
        <Link to="/country/details">
          {Location.location.name}
        </Link>
        <span>
          {' '}
          {'>'}
          {' '}
        </span>
      </div>
    </Container>
  );
}
