export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <div className="hero-badge">
              Erie, PA Moving Services
            </div>

            <h1>
              Moving Made
              <span> Simple.</span>
            </h1>

            <p className="hero-description">
              Reliable, hardworking moving help for homes, apartments,
              businesses, loading, unloading, furniture, and cleanouts.
            </p>

            <div className="hero-buttons">
              <a href="/quote" className="btn btn-primary">
                Get a Free Quote
              </a>

              <a href="/services" className="btn btn-outline">
                View Our Services
              </a>
            </div>

            <div className="hero-features">
              <span>✓ Local Erie Team</span>
              <span>✓ Flexible Scheduling</span>
              <span>✓ Fast Quotes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-grid">
          <div>
            <strong>Local</strong>
            <span>Erie, Pennsylvania</span>
          </div>

          <div>
            <strong>Reliable</strong>
            <span>Professional Moving Help</span>
          </div>

          <div>
            <strong>Flexible</strong>
            <span>Services Built Around Your Move</span>
          </div>

          <div>
            <strong>Simple</strong>
            <span>Fast Quote Requests</span>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">Our Services</p>
              <h2>We Handle the Heavy Lifting.</h2>
            </div>

            <p className="section-intro">
              From a few heavy pieces of furniture to a complete move,
              Moving Helpers LLC gives you the extra hands you need.
            </p>
          </div>

          <div className="service-grid">
            <a href="/services" className="service-card">
              <div className="service-number">01</div>

              <h3>Residential Moving</h3>

              <p>
                Moving assistance for houses, apartments, condos, and local
                residential moves.
              </p>

              <span className="service-link">Learn More →</span>
            </a>

            <a href="/services" className="service-card">
              <div className="service-number">02</div>

              <h3>Loading &amp; Unloading</h3>

              <p>
                Professional help loading trucks, trailers, storage units,
                and moving containers.
              </p>

              <span className="service-link">Learn More →</span>
            </a>

            <a href="/services" className="service-card">
              <div className="service-number">03</div>

              <h3>Furniture Moving</h3>

              <p>
                Heavy furniture moved carefully within your home or to a new
                location.
              </p>

              <span className="service-link">Learn More →</span>
            </a>

            <a href="/services" className="service-card">
              <div className="service-number">04</div>

              <h3>Cleanouts</h3>

              <p>
                Help clearing garages, basements, apartments, homes, and
                other properties.
              </p>

              <span className="service-link">Learn More →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container why-grid">
          <div className="why-content">
            <p className="section-label">Why Choose Us</p>

            <h2>
              Hardworking Help.
              <br />
              Without the Hassle.
            </h2>

            <p>
              We make it easier to get reliable moving help without turning
              your move into a complicated process.
            </p>

            <a href="/quote" className="btn btn-primary">
              Request a Quote
            </a>
          </div>

          <div className="why-cards">
            <div className="why-card">
              <strong>01</strong>
              <div>
                <h3>Local Service</h3>
                <p>Based in Erie and serving the surrounding area.</p>
              </div>
            </div>

            <div className="why-card">
              <strong>02</strong>
              <div>
                <h3>Flexible Help</h3>
                <p>
                  Hire us for full moving help or simply the heavy lifting.
                </p>
              </div>
            </div>

            <div className="why-card">
              <strong>03</strong>
              <div>
                <h3>Simple Quotes</h3>
                <p>
                  Tell us about your move and get the process started quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="cta-label">Ready to Move?</p>
            <h2>Let’s Get You Moving.</h2>

            <p>
              Tell us where, when, and what you need help with.
            </p>
          </div>

          <a href="/quote" className="btn btn-dark">
            Get My Free Quote
          </a>
        </div>
      </section>
    </main>
  );
}