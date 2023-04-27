import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <div>
      <h1>404 Page not found</h1>
      <Link to="/">Go back</Link>
    </div>
  );
}
