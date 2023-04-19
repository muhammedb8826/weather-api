import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="site-title">weather</Link>
          </li>
          <li>
            <input type="search" placeholder="search countries" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
