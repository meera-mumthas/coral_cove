function Booking() {
  return (
    <div className="booking-page">

      {/* Page Header */}
      <section className="booking-header">
        <p className="booking-label">RESERVATIONS</p>

        <h1>Book Your Stay</h1>

        <p>
          Plan your perfect stay at Coral Cove.
        </p>
      </section>


      {/* Booking Section */}
      <section className="booking-content">

        <div className="booking-intro">
          <h2>Your island escape starts here.</h2>

          <p>
            Tell us when you would like to visit Coral Cove and our team
            will help you plan a peaceful stay by the sea.
          </p>
        </div>


        <form className="booking-form">

          <div className="booking-row">

            <div className="booking-field">
              <label>CHECK-IN</label>
              <input type="date" />
            </div>

            <div className="booking-field">
              <label>CHECK-OUT</label>
              <input type="date" />
            </div>

          </div>


          <div className="booking-row">

            <div className="booking-field">
              <label>GUESTS</label>
              <select>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>

            <div className="booking-field">
              <label>ROOM TYPE</label>
              <select>
                <option>Garden Room</option>
                <option>Beachfront Suite</option>
                <option>Reef Overwater Villa</option>
                <option>Cove Family Cottage</option>
              </select>
            </div>

          </div>


          <div className="booking-field">
            <label>FULL NAME</label>
            <input
              type="text"
              placeholder="Your name"
            />
          </div>


          <div className="booking-field">
            <label>EMAIL</label>
            <input
              type="email"
              placeholder="Your email"
            />
          </div>


          <button type="submit">
            REQUEST A STAY
          </button>

        </form>

      </section>

    </div>
  );
}

export default Booking;