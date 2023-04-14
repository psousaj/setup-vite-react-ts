import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/somepage">Some Page</Link>
        </li>
        <li>
          <Link to="/otherpage">Other Page</Link>
        </li>
      </ul>
    </nav>
  );
}
