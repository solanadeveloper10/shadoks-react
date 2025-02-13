import { NavLink, Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <Link
        to="/"
        className="home-link header-logo-container"
      >
        <img className="header-logo-img" src="/icons/logo.webp" alt="Shadoks logo." />
        <span>Les Shadoks on Sol</span>
      </Link>

      <nav className="nav">
        <NavLink
          to="/roadmap"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Roadmap
        </NavLink>
        <NavLink
          to="/tokenomics"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Tokenomics
        </NavLink>
        <NavLink
          to="/how-to-buy"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          How To Buy
        </NavLink>
      </nav>

      <div className="socials">
        <a href="#x" target="_blank" className="social-link">
          <img src="/icons/x.png" alt="X icon." className="social-link-img" />
        </a>
        <a href="#twitter" target="_blank" className="social-link">
          <img src="/icons/tg.png" alt="Telegram icon." className="social-link-img" />
        </a>
        <a href="#twitter" target="_blank" className="social-link">
          <img src="/icons/tg.png" alt="Telegram icon." className="social-link-img" />
        </a>
        <a href="#twitter" target="_blank" className="social-link">
          <img src="/icons/tg.png" alt="Telegram icon." className="social-link-img" />
        </a>
      </div>
    </header>
  )
}

export default Header
