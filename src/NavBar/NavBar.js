import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css'; // Unified CSS module
import { ThemeContext } from '../../context/ThemeContext'; // If needed
import Avatar from './Avatar';  // If an Avatar is needed

const Navbar = ({ links, logo, currentUser, onSignOut, toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  const renderLinks = () => {
    return links.map((link) => (
      <motion.li key={link.path} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <NavLink 
          to={link.path} 
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => isActive ? styles.activeLink : undefined}
          end
        >
          {link.label}
        </NavLink>
      </motion.li>
    ));
  };

  return (
    <motion.nav 
      className={`${styles.navbar} ${darkMode ? styles.darkMode : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={styles.navbarContainer}>
        {/* Logo */}
        {logo && (
          <Link to="/" className={styles.logoContainer}>
            <img src={logo} alt="Site Logo" className={styles.logo} />
          </Link>
        )}

        {/* Menu Icon with improved accessibility */}
        <button 
          className={`${styles.menuIcon} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
        </button>

        {/* Menu Items */}
        <div 
          ref={menuRef} 
          className={styles.menuContainer}
        >
          <ul 
            id="main-menu" 
            className={`${styles.menu} ${menuOpen ? styles.open : ''}`}
            aria-hidden={!menuOpen && window.innerWidth <= 768}
          >
            {renderLinks()}
          </ul>
        </div>

        {/* User Authentication Section */}
        <div className={styles.authSection}>
          {currentUser ? (
            <div className={styles.userActions}>
              <div className={styles.userProfile}>
                <Avatar 
                  src={currentUser.profile_image} 
                  alt={`${currentUser.name || 'User'}'s profile`}
                  text="Profile" 
                  height={40} 
                />
                {currentUser.name && <span className={styles.userName}>{currentUser.name}</span>}
              </div>
              <button 
                onClick={onSignOut} 
                className={styles.signOutButton}
                aria-label="Sign out"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className={styles.guestActions}>
              <NavLink to="/signin" className={styles.authLink}>Sign in</NavLink>
              <NavLink to="/signup" className={`${styles.authLink} ${styles.signupButton}`}>Sign up</NavLink>
            </div>
          )}
        </div>

        {/* Dark Mode Toggle with improved accessibility */}
        {toggleDarkMode && (
          <button 
            onClick={toggleDarkMode} 
            className={styles.themeToggle}
            aria-pressed={darkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <span className={styles.themeIcon}>☀️</span>
            ) : (
              <span className={styles.themeIcon}>🌙</span>
            )}
            <span className={styles.srOnly}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        )}
      </div>
    </motion.nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  logo: PropTypes.string,
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    profile_image: PropTypes.string
  }),
  onSignOut: PropTypes.func,
  toggleDarkMode: PropTypes.func,
  darkMode: PropTypes.bool
};

export default Navbar;