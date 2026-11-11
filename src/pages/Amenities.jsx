function Amenities() {
  return (
    <main className="amenities-page">

      {/* HERO */}
      <section className="amenities-hero">
        <div className="amenities-hero-content">
          <p className="small-label">RESORT AMENITIES</p>

          <h1>Everything you need<br />to unwind.</h1>

          <p>
            From sunrise swims to quiet moments at the spa,
            discover spaces designed for a slower, more peaceful stay.
          </p>
        </div>
      </section>


      {/* INTRO */}
      <section className="amenities-intro">

        <div>
          <p className="small-label">THE CORAL COVE EXPERIENCE</p>

          <h2>
            Relax. Refresh.<br />
            Reconnect.
          </h2>
        </div>

        <p>
          At Coral Cove, every detail is designed to make your stay
          effortless. Spend the morning beside the pool, unwind with
          a treatment in the afternoon, or simply find a quiet place
          to watch the ocean.
        </p>

      </section>


      {/* AMENITIES GRID */}
      <section className="amenities-section">

        <div className="section-heading">
          <p className="small-label">DISCOVER</p>

          <h2>Made for your stay</h2>

          <p>
            Take your time. Enjoy the spaces, services and experiences
            created for your comfort.
          </p>
        </div>


        <div className="amenities-grid">

          {/* POOL */}
          <article className="amenity-card">

            <div className="amenity-image">
              <img
                src="https://i.pinimg.com/736x/ec/fd/0d/ecfd0dcf9f438c9151da56f03cfb0200.jpg "
                alt="Resort swimming pool"
              />
            </div>

            <div className="amenity-content">
              <span>01</span>

              <h3>Infinity Pool</h3>

              <p>
                Cool off in our infinity pool while enjoying
                uninterrupted views of the tropical surroundings.
              </p>
            </div>

          </article>


          {/* SPA */}
          <article className="amenity-card">

            <div className="amenity-image">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85"
                alt="Spa treatment"
              />
            </div>

            <div className="amenity-content">
              <span>02</span>

              <h3>Cove Spa</h3>

              <p>
                Slow down with relaxing treatments inspired by
                tropical botanicals and traditional wellness rituals.
              </p>
            </div>

          </article>


          {/* FITNESS */}
          <article className="amenity-card">

            <div className="amenity-image">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85"
                alt="Resort fitness centre"
              />
            </div>

            <div className="amenity-content">
              <span>03</span>

              <h3>Fitness Studio</h3>

              <p>
                Keep moving in our bright fitness studio equipped
                for everything from light workouts to focused training.
              </p>
            </div>

          </article>


          {/* BEACH */}
          <article className="amenity-card">

            <div className="amenity-image">
              <img
                src="https://i.pinimg.com/1200x/7b/d5/d7/7bd5d719bc2649aa0f50db6669a7d0b7.jpg"
                alt="Tropical beach"
              />
            </div>

            <div className="amenity-content">
              <span>04</span>

              <h3>Private Beach</h3>

              <p>
                Step onto soft sand, swim in clear water and enjoy
                peaceful moments by the shore.
              </p>
            </div>

          </article>

        </div>

      </section>


      {/* FEATURE SECTION */}
      <section className="amenity-feature">

        <div className="amenity-feature-image">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85"
            alt="Relaxing spa experience"
          />
        </div>

        <div className="amenity-feature-content">

          <p className="small-label">SLOW DOWN</p>

          <h2>
            Time to simply<br />
            be.
          </h2>

          <p>
            Whether you're floating in the pool, enjoying a quiet
            massage or watching the sunset from the beach, Coral Cove
            gives you space to pause and enjoy the moment.
          </p>

          <div className="amenity-feature-list">

            <div>
              <span>01</span>
              <p>Daily housekeeping</p>
            </div>

            <div>
              <span>02</span>
              <p>Complimentary Wi-Fi</p>
            </div>

            <div>
              <span>03</span>
              <p>24-hour guest assistance</p>
            </div>

            <div>
              <span>04</span>
              <p>Beach equipment</p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Amenities;