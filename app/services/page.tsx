export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Our Services</p>

          <h1>Moving Help That Fits the Job</h1>

          <p>
            Whether you need help with a full move or just the heavy lifting,
            Moving Helpers LLC offers flexible moving services in Erie, PA.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="service-grid">
            <div className="service-card">
              <h3>Residential Moving</h3>
              <p>
                Help moving houses, apartments, condos, and other residential
                properties.
              </p>
            </div>

            <div className="service-card">
              <h3>Loading &amp; Unloading</h3>
              <p>
                Help loading and unloading rental trucks, trailers, storage
                units, and moving containers.
              </p>
            </div>

            <div className="service-card">
              <h3>Furniture Moving</h3>
              <p>
                Help moving heavy furniture between rooms, floors, homes, or
                other locations.
              </p>
            </div>

            <div className="service-card">
              <h3>Cleanouts</h3>
              <p>
                Help clearing garages, basements, apartments, homes, and other
                properties.
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