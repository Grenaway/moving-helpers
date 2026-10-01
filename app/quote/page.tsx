export default function QuotePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Moving Helpers LLC</p>

          <h1>Request a Free Quote</h1>

          <p>
            Tell us about your move and we’ll follow up with pricing and
            availability.
          </p>
        </div>
      </section>

      <section className="form-section">
        <div className="container form-container">
          <form
            className="quote-form"
            action="https://formsubmit.co/wgrenaway@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Moving Helpers Quote Request"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Preferred Move Date</label>

                <input
                  id="date"
                  name="date"
                  type="date"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pickup">Pickup Location</label>

                <input
                  id="pickup"
                  name="pickup"
                  type="text"
                  placeholder="Erie, PA"
                />
              </div>

              <div className="form-group">
                <label htmlFor="destination">Destination</label>

                <input
                  id="destination"
                  name="destination"
                  type="text"
                />
              </div>

              <div className="form-group">
                <label htmlFor="moveType">Type of Move</label>

                <select id="moveType" name="moveType">
                  <option value="">Select one</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Condo">Condo</option>
                  <option value="Office / Business">
                    Office / Business
                  </option>
                  <option value="Storage Unit">Storage Unit</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Needed</label>

                <select id="service" name="service">
                  <option value="">Select one</option>
                  <option value="Full Moving Help">
                    Full Moving Help
                  </option>
                  <option value="Loading Only">
                    Loading Only
                  </option>
                  <option value="Unloading Only">
                    Unloading Only
                  </option>
                  <option value="Furniture Moving">
                    Furniture Moving
                  </option>
                  <option value="Cleanout">
                    Cleanout
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="details">
                Tell Us About the Job
              </label>

              <textarea
                id="details"
                name="details"
                rows={7}
                placeholder="Number of rooms, large furniture, stairs, truck size, special items, or anything else we should know."
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
            >
              Request My Quote
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}