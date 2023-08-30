import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ links }) {
  const navLinks = links.map(link => (
    <NavLink className='NavBar-link'
      key={link}
      to={`/${link}`}
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