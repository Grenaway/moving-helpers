export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">About Us</p>

          <h1>Local Moving Help You Can Count On</h1>

          <p>
            Moving Helpers LLC provides dependable moving assistance for
            homes, apartments, businesses, and more throughout the Erie area.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">Who We Are</p>
              <h2>Simple, Reliable Moving Help</h2>
            </div>

            <p className="section-intro">
              We focus on showing up, working hard, and helping make moving
              less stressful.
            </p>
          </div>

          <div className="service-grid">
            <div className="service-card">
              <h3>Local</h3>
              <p>
                Serving Erie, Pennsylvania and surrounding communities.
              </p>
            </div>

            <div className="service-card">
              <h3>Flexible</h3>
              <p>
                Full moving help or just the extra hands you need for the job.
              </p>
            </div>

            <div className="service-card">
              <h3>Dependable</h3>
              <p>
                Clear communication, reliable scheduling, and hardworking help.
              </p>
            </div>

            <div className="service-card">
              <h3>Simple</h3>
              <p>
                Request a quote, tell us what you need, and we’ll take it from there.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "45px", textAlign: "center" }}>
            <a href="/quote" className="btn btn-primary">
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}