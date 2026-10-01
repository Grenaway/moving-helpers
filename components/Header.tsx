export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <a href="/" className="logo">
          <span className="logo-main">MOVING HELPERS</span>
          <span className="logo-sub">LLC</span>
        </a>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/quote">Request Quote</a>
          <a href="/contact">Contact</a>
        </nav>

        <a href="tel:18145551234" className="nav-call">
          Call Now
        </a>
      </div>
    </header>
  );
}