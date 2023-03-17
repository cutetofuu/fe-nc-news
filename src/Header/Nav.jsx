import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul className="nav__list">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/topics" className="links">
          Topics
        </Link>
      </ul>
    </nav>
  );
};
