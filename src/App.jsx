import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Dining from "./pages/Dining";
import Amenities from "./pages/Amenities";
import Experiences from "./pages/Experiences";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;