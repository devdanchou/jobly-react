import { NavLink } from "react-router-dom";
import "./NavBar.css";

/** Shows links to:
 * - homepage
 * - companies
 * - jobs
 *
 * Props:
 * links = ['companies', 'jobs']
 *
 * State: none
 *
 * App -> NavBar
 */
//TODO: not dynamic
function NavBar({ links }) {
  const navLinks = links.map(link => (
    <NavLink className='NavBar-link'
      key={link}
      to={`/${link.toLowerCase()}`}
    >
      {link}
    </NavLink>
  ));

  return (

    <nav className="NavBar">
      <NavLink className='NavBar-link' to="/" end>
        Jobly
      </NavLink>
      {navLinks}
    </nav>

  );
}

export default NavBar;