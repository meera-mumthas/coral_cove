import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <p className="hero-location">
            CORAL COVE · ISLAND RESORT
          </p>

          <h1>
            Where the reef meets
            <br />
            the shore
          </h1>

          <p className="hero-description">
            A peaceful island retreat surrounded by turquoise waters,
            white sands and unforgettable tropical experiences.
          </p>

          <div className="hero-buttons">
            <Link to="/booking" className="primary-button">
                   RESERVE A STAY
            </Link>
              
            <Link to="/rooms" className="secondary-button">
                   VIEW ROOMS
            </Link>
          </div>

        </div>
      </section>


      {/* WELCOME */}
      <section className="welcome-section">

        <div className="welcome-title">
          <p className="section-label">WELCOME</p>

          <h2>
            An island run at the
            <br />
            pace of the tide
          </h2>
        </div>

        <div className="welcome-text">
          <p>
            Coral Cove is a secluded coastal retreat designed for
            slowing down, reconnecting and enjoying the beauty of
            island life.
          </p>

          <p>
            From quiet mornings by the sea to evenings beneath
            the stars, every moment is shaped by the rhythm of
            the ocean.
          </p>
        </div>

      </section>


      {/* THREE REASONS */}
      <section className="reasons-section">

        <div className="section-heading">
          <p className="section-label">THE CORAL COVE EXPERIENCE</p>

          <h2>Three reasons guests return</h2>
        </div>


        <div className="reason-cards">

          <article className="reason-card">

            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80"
              alt="Luxury resort room"
            />

            <div className="card-content">
              <p className="card-number">01</p>

              <h3>Restful Rooms</h3>

              <p>
                Wake up to soft ocean breezes in spaces designed
                for comfort and peaceful island living.
              </p>

              <Link to="/rooms" className="card-link">
                     EXPLORE ROOMS →
              </Link>
            </div>

          </article>


          <article className="reason-card">

            <img
              src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80"
              alt="Tropical dining"
            />

            <div className="card-content">
              <p className="card-number">02</p>

              <h3>Oceanfront Dining</h3>

              <p>
                Fresh local ingredients, tropical flavours and
                unforgettable meals beside the sea.
              </p>

              <Link to="/dining" className="card-link">
                     EXPLORE DINING
              </Link>
            </div>

          </article>


          <article className="reason-card">

         <img
  src="https://www.paradigmairportservices.com/wp-content/uploads/2021/01/faleolo-_642444145-scaled.jpg"
  alt="Tropical beach and turquoise ocean"
/>

            <div className="card-content">
              <p className="card-number">03</p>

              <h3>Sea & Serenity</h3>

              <p>
                Swim, explore, relax and discover experiences
                created around the beauty of the coast.
              </p>

              <Link to="/experiences" className="card-link">
                     EXPLORE EXPERIENCES
              </Link>
            </div>

          </article>

        </div>

      </section>


      {/* STATS */}
      <section className="stats-section">

        <div className="stat">
          <h3>42</h3>
          <p>Private rooms & villas</p>
        </div>

        <div className="stat">
          <h3>1.4 km</h3>
          <p>Pristine coastline</p>
        </div>

        <div className="stat">
          <h3>30</h3>
          <p>Years of island hospitality</p>
        </div>

      </section>


      {/* BOOKING CTA */}
      <section className="booking-cta">

        <div>
          <p className="section-label">PLAN YOUR ESCAPE</p>

          <h2>Planning a stay this season?</h2>

          <p>
            Let us help you create your perfect island getaway.
          </p>
        </div>

        <Link to="/booking" className="primary-button">
               REQUEST A STAY
        </Link>

      </section>

    </main>
  );
}

export default Home;