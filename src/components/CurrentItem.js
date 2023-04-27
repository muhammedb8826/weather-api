import { useSelector } from 'react-redux';
import CurrentView from './CurrentView';

export default function DetailsItem() {
  const { Current } = useSelector((state) => state.weather);

  return (
    <section className="current-container">
      <CurrentView
        key={Current.location.name}
        cloud={Current.current.cloud}
        name={Current.location.name}
        conditionText={Current.current.condition.text}
        conditionIcon={Current.current.condition.icon}
        humidity={Current.current.humidity}
        lastUpdated={Current.current.last_updated}
        windDegree={Current.current.wind_degree}
        tempreture={Current.current.temp_c}
      />
    </section>
  );
}
