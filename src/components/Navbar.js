import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <Link to="/" className="site-title">weather</Link>
      <nav>
        <ul>
            <li>
                <Link></Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}
