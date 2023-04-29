import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';

export default function TimeZone() {
  const { TimeZone } = useSelector((state) => state.weather);
  return (
    <section className="current-container">
      <div className="current-city">
        <p>{TimeZone.location.localtime}</p>
        <p>{TimeZone.location.tz_id}</p>
      </div>
      <p className="separator">Timezone Details</p>
      <ul className="current-details">
        <li className="current-list">
          <div>
            <p>Country</p>
            <div className="value-container">
              <span>{TimeZone.location.country}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>City</p>
            <div className="value-container">
              <span>{TimeZone.location.name}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
        <li className="current-list">
          <div>
            <p>Local Time</p>
            <div className="value-container">
              <span>{TimeZone.location.localtime}</span>
              <BsArrowRightCircle />
            </div>
          </div>
        </li>
      </ul>
    </section>

  );
}
