import { Link } from 'react-router-dom';

export default function Country() {
  return (
    <div>
      country
      <nav>
        <Link to="/country/details">Details</Link>
      </nav>
    </div>
  );
}
