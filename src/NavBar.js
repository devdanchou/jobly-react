import { NavLink } from "react-router-dom";
import "./NavBar.css";

/** Shows links to:
 * - homepage
 * - companies
 * - jobs
 * - login
 * - signup
 * - profile
 *
 * Props: none
 *
 * State: none
 *
 * App -> NavBar
 */

function NavBar() {
  return (

    <nav className="NavBar">
      <NavLink className='NavBar-link' to="/" end>
        Jobly
      </NavLink>
      <NavLink className='NavBar-link' to="/companies" end>
        Companies
      </NavLink>
      <NavLink className='NavBar-link' to="/jobs" end>
        Jobs
      </NavLink>
      <NavLink className='NavBar-link' to="/login" end>
        Login
      </NavLink>
      <NavLink className='NavBar-link' to="/signup" end>
        Sign Up
      </NavLink>
      <NavLink className='NavBar-link' to="/profile" end>
        Profile
      </NavLink>
    </nav>

  );
}

export default NavBar;