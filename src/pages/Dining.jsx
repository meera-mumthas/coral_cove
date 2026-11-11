import { Link } from "react-router-dom";

function Dining() {
  return (
    <div className="dining-page">

      {/* HERO */}
      <section className="dining-hero">
        <div className="dining-hero-overlay">
          <p className="small-label">CULINARY EXPERIENCES</p>

          <h1>Dining by the sea</h1>

          <p>
            Fresh flavours, local ingredients and unforgettable
            moments beside the ocean.
          </p>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="dining-intro">

        <div>
          <p className="small-label">TASTE OF CORAL COVE</p>

          <h2>
            Where every meal becomes
            <br />
            a memory.
          </h2>
        </div>

        <p>
          From leisurely breakfasts overlooking the turquoise sea
          to intimate dinners beneath the stars, Coral Cove brings
          together fresh local ingredients, tropical flavours and
          thoughtful hospitality.
        </p>

      </section>


      {/* RESTAURANTS */}
      <section className="restaurants-section">

        <div className="section-heading">
          <p className="small-label">OUR TABLES</p>

          <h2>Dining at Coral Cove</h2>

          <p>
            Discover a collection of dining experiences created
            around the beauty of the island.
          </p>
        </div>


        <div className="restaurant-grid">

          {/* CARD 1 */}
          <div className="restaurant-card">

            <img
              src="https://webbox.imgix.net/images/gxehoakvqarcrqrd/47def70b-93d6-40bb-9a6b-549453e8cc68.jpg?auto=format,compress&fit=crop&crop=entropy"
              alt="Restaurant dining"
            />

            <div className="restaurant-content">

              <p className="card-number">01</p>

              <h3>The Coral Table</h3>

              <p>
                Island-inspired cuisine made with fresh seafood,
                seasonal produce and ingredients sourced from
                local farmers.
              </p>

              <Link to="/contact">
                DISCOVER MORE →
              </Link>

            </div>

          </div>


          {/* CARD 2 */}
          <div className="restaurant-card">

            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
              alt="Fresh tropical food"
            />

            <div className="restaurant-content">

              <p className="card-number">02</p>

              <h3>Ocean Breeze Café</h3>

              <p>
                Relaxed breakfasts, fresh juices, tropical bowls
                and light lunches served with uninterrupted views
                of the sea.
              </p>

              <Link to="/contact">
                EXPLORE CAFÉ →
              </Link>

            </div>

          </div>


          {/* CARD 3 */}
          <div className="restaurant-card">

            <img
              src="https://thestrandtci.com/wp-content/uploads/2025/02/01-Villa-Rooftop-Terrace-1.jpeg"
              alt="Fine dining restaurant"
            />

            <div className="restaurant-content">

              <p className="card-number">03</p>

              <h3>Sunset Dining</h3>

              <p>
                An intimate evening experience where carefully
                prepared dishes meet golden sunsets and the sound
                of the waves.
              </p>

              <Link to="/booking">
                RESERVE A TABLE →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* OCEANFRONT SECTION */}
      <section className="ocean-dining">

        <div className="ocean-dining-image">
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=80"
            alt="Oceanfront dining"
          />
        </div>

        <div className="ocean-dining-content">

          <p className="small-label">DINING BY THE WATER</p>

          <h2>
            Your table,
            <br />
            beside the sea.
          </h2>

          <p>
            Let the ocean set the mood. Enjoy freshly prepared
            dishes, cool tropical drinks and slow evenings as the
            sun disappears beyond the horizon.
          </p>

          <Link to="/booking" className="dining-button">
            BOOK YOUR TABLE
          </Link>

        </div>

      </section>


      {/* HIGHLIGHTS */}
      <section className="dining-highlights">

        <div>
          <span>01</span>
          <h3>Fresh Ingredients</h3>
          <p>
            Locally sourced seafood, produce and tropical flavours.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Ocean Views</h3>
          <p>
            Beautiful dining spaces overlooking the turquoise sea.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Island Flavours</h3>
          <p>
            A thoughtful blend of local traditions and modern cuisine.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Dining;