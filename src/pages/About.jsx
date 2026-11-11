function About() {
  return (
    <div className="about-page">

      {/* Page Header */}
      <section className="about-header">
        <p className="about-label">OUR STORY</p>

        <h1>About Coral Cove</h1>

        <p>
          Still owned by the family that built it, and still run on the belief
          that a small resort done carefully beats a large one done well.
        </p>
      </section>


      {/* Story Section */}
      <section className="about-story">

        <div className="about-story-text">
          <h2>A family business, not a chain</h2>

          <p>
            Elena Ferrer arrived in Palmera Bay as a marine biologist and never
            left. What began as eight cabanas built with her husband Tomás has
            grown slowly — eight rooms at a time, never faster than the island
            could absorb. Their daughter Nuria now runs the resort day to day.
          </p>

          <p>
            That pace shapes everything: the water is desalinated on site, the
            power is solar, food waste is composted for the kitchen garden, and
            no building on the island rises above the palm line.
          </p>
        </div>

        <div className="about-story-image">
          <img
            src="https://i.pinimg.com/1200x/7c/6c/5c/7c6c5cdb3979e2b4bcbebb538fd1757b.jpg"
            alt="Coral Cove island resort"
          />
        </div>

      </section>


      {/* Milestones */}
      <section className="milestones">

        <h2>Milestones</h2>

        <div className="milestone-grid">

          <div className="milestone">
            <span>1998</span>
            <p>
              Elena and Tomás Ferrer open eight cabanas on a stretch of leased
              beach.
            </p>
          </div>

          <div className="milestone">
            <span>2006</span>
            <p>
              The dive centre and house-reef monitoring programme begin.
            </p>
          </div>

          <div className="milestone">
            <span>2014</span>
            <p>
              Overwater villas added; the island moves to solar and battery
              power.
            </p>
          </div>

          <div className="milestone">
            <span>2021</span>
            <p>
              Coral nursery planted, now supplying restoration dives across
              the bay.
            </p>
          </div>

          <div className="milestone">
            <span>2026</span>
            <p>
              Forty-two keys, ninety staff, and eighty percent of them from
              Palmera.
            </p>
          </div>

        </div>

      </section>


      {/* Values */}
      <section className="about-values">

        <div className="value-card">
          <h3>Reef first</h3>
          <p>
            Two staff biologists, a coral nursery and a strict no-anchor policy
            across the house reef.
          </p>
        </div>

        <div className="value-card">
          <h3>Local by default</h3>
          <p>
            Eight in ten team members live in Palmera Bay, and suppliers are
            chosen within the parish where possible.
          </p>
        </div>

        <div className="value-card">
          <h3>Quiet luxury</h3>
          <p>
            No piped music, no scheduled entertainment, no more than forty-two
            rooms. Ever.
          </p>
        </div>

      </section>

    </div>
  );
}

export default About;