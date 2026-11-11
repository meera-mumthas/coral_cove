function Contact() {
  return (
    <div className="contact-page">

      {/* Page Header */}
      <section className="contact-header">
        <p className="contact-label">GET IN TOUCH</p>

        <h1>Contact Coral Cove</h1>

        <p>
          Questions about your stay, the island, or getting here?
          We are happy to help.
        </p>
      </section>


      {/* Contact Section */}
      <section className="contact-content">

        {/* Contact Information */}
        <div className="contact-info">

          <p className="contact-small-title">CORAL COVE ISLAND</p>

          <h2>We'd love to hear from you.</h2>

          <p>
            Whether you're planning your first visit or returning to the
            island, our team is here to make your stay special.
          </p>

          <div className="contact-details">

            <div>
              <h3>Location</h3>
              <p>
                Coral Cove Island<br />
                Palmera Bay<br />
                Kerala, India
              </p>
            </div>

            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <h3>Email</h3>
              <p>stay@coralcove.com</p>
            </div>

          </div>

        </div>


        {/* Contact Form */}
        <div className="contact-form">

          <h2>Send us a message</h2>

          <form>

            <div className="form-row">

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                />
              </div>

            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit">
              SEND MESSAGE
            </button>

          </form>

        </div>

      </section>


      {/* Getting Here */}
      <section className="getting-here">

        <p className="contact-label">GETTING HERE</p>

        <h2>Your journey begins before you arrive.</h2>

        <p>
          Coral Cove is reached by boat from the mainland. Our team will
          coordinate your transfer and make sure your journey to the island
          is smooth and comfortable.
        </p>

      </section>

    </div>
  );
}

export default Contact;