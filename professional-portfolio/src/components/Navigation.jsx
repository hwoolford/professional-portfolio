import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

export default function Navigation() {
  return (
    <ul className="nav nav-pills navbar">
      <li className="nav-item">
        <NavLink
          exact
          to="/"
          className="nav-link"
          activeClassName="active"
        >
          ABOUT ME
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/portfolio"
          className="nav-link"
          activeClassName="active"
        >
          PORTFOLIO
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
          className="nav-link"
          activeClassName="active"
        >
          CONTACT
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/resume"
          className="nav-link"
          activeClassName="active"
        >
          RESUME
        </NavLink>
      </li>
    </ul>
  );
}