import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Details from './Details';

export default function DetailsItem() {
  const { Location } = useSelector((state) => state.weather);

  return (
    <Container>
      <Details
        key={Location.location.name}
        cloud={Location.current.cloud}
        country={Location.location.country}
        conditionText={Location.current.condition.text}
        conditionIcon={Location.current.condition.icon}
        humidity={Location.current.humidity}
        lastUpdated={Location.current.last_updated}
        windDegree={Location.current.wind_degree}
        tempreture={Location.current.temp_c}
      />
    </Container>
  );
}
