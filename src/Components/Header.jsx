import { Link, NavLink } from "react-router-dom";
import "../Styles/Header.scss";
const Header = () => {
  return (
    <header className="header flex justify-center align-center background-white">
      <div className="container-quarter-3 flex justify-between align-center">
        <Link to="/" className="font-size-32 logo">
          Gallery
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="nav_link">
                Albums
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
