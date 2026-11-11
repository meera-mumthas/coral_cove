import { Link } from "react-router-dom";

function Rooms() {
  return (
    <main className="rooms-page">

      {/* PAGE INTRO */}
      <section className="rooms-intro">
        <p className="section-label">ACCOMMODATION</p>

        <h1>Rooms & Suites</h1>

        <p>
          Rest easy in bright, airy spaces designed for the island way of life.
          Every room includes thoughtful touches, natural light and views
          that bring the beauty of Coral Cove closer.
        </p>
      </section>


      {/* ROOM 1 */}
      <section className="room-item">

        <div className="room-image">
          <img
            src="https://www.manavamoorearesort.com/wp-content/uploads/sites/341/2026/06/garden_room_king-bed_manava_moorea.jpg"
            alt="Garden Room"
          />
        </div>

        <div className="room-details">
          <h2>Garden Room</h2>

          <p className="room-meta">2 ADULTS · 1 KING BED</p>

          <p>
            A peaceful room surrounded by tropical greenery, with
            comfortable interiors and a private space to unwind after
            a day by the sea.
          </p>

          <p className="room-price">From ₹8,500 / night</p>

          <Link to="/booking" className="room-button">
            CHECK AVAILABILITY
          </Link>
        </div>

      </section>


      {/* ROOM 2 */}
      <section className="room-item reverse">

        <div className="room-image">
          <img
            src="https://www.thehotelguru.com/_images/23/c5/23c5b14d3c1266596c778f30375d8411/s880x600.jpg"
            alt="Beachfront Suite"
          />
        </div>

        <div className="room-details">
          <h2>Beachfront Suite</h2>

          <p className="room-meta">2–4 GUESTS · 1 KING BED</p>

          <p>
            Wake up to the sound of the waves in this spacious suite,
            featuring a private sitting area and beautiful views of
            the coastline.
          </p>

          <p className="room-price">From ₹12,500 / night</p>

          <Link to="/booking" className="room-button">
            CHECK AVAILABILITY
          </Link>
        </div>

      </section>


      {/* ROOM 3 */}
      <section className="room-item">

        <div className="room-image">
          <img
            src="https://cdn-ilelahc.nitrocdn.com/JkNLPVooosmPbKRNRAyWMKOheqSkuwhh/assets/images/optimized/rev-0cea985/www.waldorfastoriamaldives.com/wp-content/uploads/2025/06/1.-Two-Queen-Bedded-Reef-Villa_Exterior.webp"
            alt="Reef Overwater Villa"
          />
        </div>

        <div className="room-details">
          <h2>Reef Overwater Villa</h2>

          <p className="room-meta">2 ADULTS · 1 KING BED</p>

          <p>
            Stay above the water in our signature villa, created for
            guests who want a closer connection with the sea and
            uninterrupted tropical views.
          </p>

          <p className="room-price">From ₹18,500 / night</p>

          <Link to="/booking" className="room-button">
            CHECK AVAILABILITY
          </Link>
        </div>

      </section>


      {/* ROOM 4 */}
      <section className="room-item reverse">

        <div className="room-image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/036/191/516/non_2x/ai-generated-beach-front-bungalow-with-sandy-tones-weathered-shutter-free-photo.jpg"
            alt="Cove Family Cottage"
          />
        </div>

        <div className="room-details">
          <h2>Cove Family Cottage</h2>

          <p className="room-meta">4 GUESTS · 2 BEDROOMS</p>

          <p>
            A spacious cottage made for families, with two comfortable
            bedrooms, a generous living area and a private garden
            overlooking the island.
          </p>

          <p className="room-price">From ₹10,500 / night</p>

          <Link to="/booking" className="room-button">
            CHECK AVAILABILITY
          </Link>
        </div>

      </section>


      {/* ROOM FEATURES */}
      <section className="room-features">

        <div className="features-heading">
          <p className="section-label">IN EVERY ROOM</p>

          <h2>Thoughtful comforts</h2>
        </div>

        <div className="features-grid">

          <div>
            <h3>01</h3>
            <p>Complimentary Wi-Fi</p>
            <span>Stay connected when you need to.</span>
          </div>

          <div>
            <h3>02</h3>
            <p>Air Conditioning</p>
            <span>Cool, comfortable spaces throughout your stay.</span>
          </div>

          <div>
            <h3>03</h3>
            <p>Private Outdoor Space</p>
            <span>Relax and enjoy the tropical surroundings.</span>
          </div>

          <div>
            <h3>04</h3>
            <p>Daily Housekeeping</p>
            <span>Thoughtful service every day.</span>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Rooms;