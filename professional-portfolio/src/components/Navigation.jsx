import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

export default function Navigation() {
  return (
    <ul className="nav nav-pills navbar">
      <li className="nav-item">
        <NavLink
          to="/"
          className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          ABOUT ME
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/portfolio"
          className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          PORTFOLIO
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
          className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          CONTACT
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/resume"
          className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          RESUME
        </NavLink>
      </li>
    </ul>
  );
}