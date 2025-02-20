import { useState } from "react";

import { NavLink, Link } from "react-router";
import { motion, AnimatePresence } from 'framer-motion';

import { useBreakpoint } from '../useBreakpoint'

const Nav = () => (<nav className="nav">
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
</nav>)

const Socials = () => (<div className="socials">
  <motion.a
    href="#x"
    target="_blank"
    className="social-link"
    whileHover={{
      x: ["0", "3%", "-3%", "3%", "-3%", "0%"], // Infinite shake animation
      transition: {
        x: {
          repeat: Infinity, // Make it repeat infinitely
          duration: 0.15, // Duration of each shake step
          ease: "easeInOut", // Smooth easing
        }
      }
    }}
  >
    <img src="/icons/x.png" alt="X icon." className="social-link-img" />
  </motion.a>
  <motion.a
    href="#tg"
    target="_blank"
    className="social-link"
    whileHover={{
      x: ["0", "3%", "-3%", "3%", "-3%", "0%"], // Infinite shake animation
      transition: {
        x: {
          repeat: Infinity, // Make it repeat infinitely
          duration: 0.15, // Duration of each shake step
          ease: "easeInOut", // Smooth easing
        }
      }
    }}
  >
    <img src="/icons/tg.png" alt="Telegram icon." className="social-link-img" />
  </motion.a>
  <motion.a
    href="#x"
    target="_blank"
    className="social-link"
    whileHover={{
      x: ["0", "3%", "-3%", "3%", "-3%", "0%"], // Infinite shake animation
      transition: {
        x: {
          repeat: Infinity, // Make it repeat infinitely
          duration: 0.15, // Duration of each shake step
          ease: "easeInOut", // Smooth easing
        }
      }
    }}
  >
    <img src="/icons/dextools.png" alt="Dextools icon." className="social-link-img" />
  </motion.a>
  <motion.a
    href="#x"
    target="_blank"
    className="social-link"
    whileHover={{
      x: ["0", "3%", "-3%", "3%", "-3%", "0%"], // Infinite shake animation
      transition: {
        x: {
          repeat: Infinity, // Make it repeat infinitely
          duration: 0.15, // Duration of each shake step
          ease: "easeInOut", // Smooth easing
        }
      }
    }}
  >
    <img src="/icons/dexscreener.png" alt="Dexscreener icon." className="social-link-img" />
  </motion.a>
</div>)

const Header = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)

  const { isLargeDesktop, isDesktop, isTablet, isMobile, isSmallMobile } = useBreakpoint();

  return (
    <>
      <header className="header">
        <Link
          to="/"
          className="home-link header-logo-container"
        >
          <img className="header-logo-img" src="/icons/logo.webp" alt="Shadoks logo." />
          <span>Les Shadoks on Sol</span>
        </Link>

        <Nav />

        <Socials />

        <div className="burger-icon" onClick={() => setMobileMenuOpened(prev => !prev)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileMenuOpened ? "close" : "burger"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{
                backgroundImage: `url('/icons/${mobileMenuOpened ? 'close.png' : 'burger.png'}')`,
                width: "30px",
                height: "30px",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
              }}
            />
          </AnimatePresence>
        </div>

      </header>
      <div className="mobile-menu">

      </div>
    </>
  )
}

export default Header
