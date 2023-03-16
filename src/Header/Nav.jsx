import { Link } from "react-router-dom";

export const Nav = ({ setSelectedTopic }) => {
  return (
    <nav>
      <ul className="nav__list">
        <Link
          to="/"
          className="links"
          onClick={() => setSelectedTopic(undefined)}
        >
          Home
        </Link>
        <Link to="/topics" className="links">
          Topics
        </Link>
      </ul>
    </nav>
  );
};
