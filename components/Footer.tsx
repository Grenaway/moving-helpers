export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo">
            <span className="logo-main">MOVING HELPERS</span>
            <span className="logo-sub">LLC</span>
          </div>

          <p className="footer-description">
            Reliable moving help for homes, apartments, businesses,
            loading, unloading, furniture moving, and cleanouts.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/about">About</a>
            <a href="/quote">Request Quote</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div>
          <h3>Services</h3>

          <div className="footer-links">
            <span>Residential Moving</span>
            <span>Loading & Unloading</span>
            <span>Furniture Moving</span>
            <span>Cleanouts</span>
          </div>
        </div>

        <div>
          <h3>Service Area</h3>
          <p>Erie, Pennsylvania and surrounding areas.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Moving Helpers LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}