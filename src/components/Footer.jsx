import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-brand">
        <h2>CORAL COVE</h2>
        <p>
          A peaceful island retreat where the reef meets
          the shore.
        </p>
      </div>

      <div className="footer-column">
        <h4>EXPLORE</h4>

        <Link to="/rooms">Rooms & Suites</Link>
        <Link to="/dining">Dining</Link>
        <Link to="/amenities">Amenities</Link>
        <Link to="/experiences">Experiences</Link>
      </div>

      <div className="footer-column">
        <h4>DISCOVER</h4>

        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/booking">Book Your Stay</Link>
      </div>

      <div className="footer-column contact-column">
        <h4>CONTACT</h4>

        <p>Coral Cove Island</p>
        <p>Kerala, India</p>
        <p>+91 98765 43210</p>
        <p>stay@coralcove.com</p>
      </div>

    </footer>
  );
}

export default Footer;