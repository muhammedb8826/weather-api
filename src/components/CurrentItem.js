import { useSelector } from 'react-redux';
import Current from './Current';

export default function DetailsItem() {
  const { Location } = useSelector((state) => state.weather);

  return (
    <>
      <Current
        key={Location.location.name}
        cloud={Location.current.cloud}
        name={Location.location.name}
        conditionText={Location.current.condition.text}
        conditionIcon={Location.current.condition.icon}
        humidity={Location.current.humidity}
        lastUpdated={Location.current.last_updated}
        windDegree={Location.current.wind_degree}
        tempreture={Location.current.temp_c}
      />
    </>
  );
}
