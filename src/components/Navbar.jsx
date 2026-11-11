import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        CORAL COVE
      </div>

      <div className="nav-links">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/rooms">ROOMS & SUITES</NavLink>
        <NavLink to="/dining">DINING</NavLink>
        <NavLink to="/amenities">AMENITIES</NavLink>
        <NavLink to="/experiences">EXPERIENCES</NavLink>
        <NavLink to="/gallery">GALLERY</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>

      <NavLink to="/booking" className="book-button">
        BOOK STAY
      </NavLink>
    </nav>
  );
}

export default Navbar;