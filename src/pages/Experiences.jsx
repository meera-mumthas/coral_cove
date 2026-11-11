import { Link } from "react-router-dom";

function Experiences() {
  return (
    <main className="experiences-page">

      {/* PAGE INTRO */}
      <section className="experiences-intro">
        <div className="experiences-intro-content">
          <p className="small-label">ISLAND EXPERIENCES</p>

          <h1>Discover your<br />island story.</h1>

          <p>
            From exploring the reef to watching the sun disappear
            beyond the horizon, every day at Coral Cove offers
            something worth remembering.
          </p>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="experiences-welcome">

        <div>
          <p className="small-label">MAKE IT YOURS</p>

          <h2>
            More than a stay,
            <br />
            it's an experience.
          </h2>
        </div>

        <p>
          Whether you are looking for adventure, relaxation or a
          little bit of both, our experiences let you discover the
          island at your own pace. Choose your adventure or simply
          let the day unfold.
        </p>

      </section>


      {/* EXPERIENCE CARDS */}
      <section className="experiences-section">

        <div className="section-heading">
          <p className="small-label">EXPLORE</p>

          <h2>Things to do</h2>

          <p>
            Create moments you'll remember long after your stay.
          </p>
        </div>


        <div className="experiences-grid">

          {/* EXPERIENCE 1 */}
          <article className="experience-card experience-large">

            <div className="experience-image">
              <img
                src="https://tropicalnorthqueensland.org.au/wp-content/uploads/136636-56-1.jpg"
                alt="Snorkeling in clear ocean water"
              />
            </div>

            <div className="experience-content">
              <span>01 · OCEAN</span>

              <h3>Explore the Reef</h3>

              <p>
                Discover colourful coral gardens and tropical marine
                life beneath the clear waters surrounding Coral Cove.
              </p>

              <Link to="/contact">DISCOVER MORE →</Link>
            </div>

          </article>


          {/* EXPERIENCE 2 */}
          <article className="experience-card">

            <div className="experience-image">
              <img
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/15/80/6b/1d.jpg"
                alt="Kayaking on the ocean"
              />
            </div>

            <div className="experience-content">
              <span>02 · ADVENTURE</span>

              <h3>Kayak the Coast</h3>

              <p>
                Paddle along quiet coves and discover hidden corners
                of the coastline from the water.
              </p>

              <Link to="/contact">EXPLORE →</Link>
            </div>

          </article>


          {/* EXPERIENCE 3 */}
          <article className="experience-card">

            <div className="experience-image">
              <img
                src="https://dbijapkm3o6fj.cloudfront.net/resources/28013,1004,1,6,4,0,960,330/-1236-/20230825135949/rarotonga-ocean-and-earth-private-tour.jpeg"
                alt="Tropical beach"
              />
            </div>

            <div className="experience-content">
              <span>03 · ISLAND</span>

              <h3>Island Discovery</h3>

              <p>
                Wander beyond the resort and discover local beaches,
                hidden trails and the character of the island.
              </p>

              <Link to="/contact">DISCOVER →</Link>
            </div>

          </article>


          {/* EXPERIENCE 4 */}
          <article className="experience-card">

            <div className="experience-image">
              <img
                src="https://i.redd.it/5odoqsafxlse1.jpeg"
                alt="Sunset by the ocean"
              />
            </div>

            <div className="experience-content">
              <span>04 · SUNSET</span>

              <h3>Sunset by the Sea</h3>

              <p>
                Slow down with a peaceful evening beside the water
                as the sky turns golden and the island grows quiet.
              </p>

              <Link to="/booking">PLAN YOUR EVENING →</Link>
            </div>

          </article>

        </div>

      </section>


      {/* FEATURE EXPERIENCE */}
      <section className="signature-experience">

        <div className="signature-image">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
            alt="Island adventure"
          />
        </div>

        <div className="signature-content">

          <p className="small-label">SIGNATURE EXPERIENCE</p>

          <h2>
            Your island,
            <br />
            your way.
          </h2>

          <p>
            Tell us what you love and we'll help create a day that's
            completely yours. From private boat trips and reef
            adventures to quiet beach picnics, our team is here to
            make it memorable.
          </p>

          <Link to="/contact" className="experience-button">
            PLAN YOUR EXPERIENCE
          </Link>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="experiences-cta">

        <p className="small-label">READY TO EXPLORE?</p>

        <h2>
          Your next adventure<br />
          starts here.
        </h2>

        <Link to="/booking" className="experience-button">
          BOOK YOUR STAY
        </Link>

      </section>

    </main>
  );
}

export default Experiences;