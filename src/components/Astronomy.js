import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';

export default function Astronomy() {
  const { Forecast, Astronomy } = useSelector((state) => state.weather);
  const url = `http:${Forecast.forecastday[0].day.condition.icon}`;
  return (
    <section className="current-container">
      <div className="current-city">
        <img src={url} alt="cloud" />
        <p>{Forecast.forecastday[0].day.condition.text}</p>
      </div>
      <p className="separator">Astronomy Details</p>
      <ul className="current-details">
        <li className="current-list">
          <div>
            <p>Sunrise</p>
            <div className="value-container">
              <span>{Astronomy.astro.sunrise}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Sunset</p>
            <div className="value-container">
              <span>{Astronomy.astro.sunset}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Moonrise</p>
            <div className="value-container">
              <span>{Astronomy.astro.moonrise}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Moonset</p>
            <div className="value-container">
              <span>{Astronomy.astro.moonset}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Moon Phase</p>
            <div className="value-container">
              <span>{Astronomy.astro.moon_phase}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Moon Illumination</p>
            <div className="value-container">
              <span>{Astronomy.astro.moon_illumination}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
      </ul>
    </section>

  );
}
