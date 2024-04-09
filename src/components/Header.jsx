import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-light py-2">
      <div className="container">
        <h1 className="display-1">Taj Mahal</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/history" className="nav-link">
              History
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/architecture" className="nav-link">
              Architecture
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
