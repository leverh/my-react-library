import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css'; // Unified CSS module
import { ThemeContext } from '../../context/ThemeContext'; // If needed
import Avatar from './Avatar';  // If an Avatr is needed want to use Avatar

const Navbar = ({ links, logo, currentUser, onSignOut, toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderLinks = () => {
    return links.map((link) => (
      <motion.li key={link.path} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link to={link.path} onClick={() => setMenuOpen(false)}>{link.label}</Link>
      </motion.li>
    ));
  };

  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      {/* Menu Icon */}
      <div className={styles["menu-icon"]} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu Items */}
      <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
        {renderLinks()}
      </ul>

      {/* Additional Icons for Logged In/Out Users */}
      {currentUser ? (
        <div>
          {/* Logged In User Icons */}
          <Avatar src={currentUser.profile_image} text="Profile" height={40} />
          <button onClick={onSignOut}>Sign out</button>
        </div>
      ) : (
        <div>
          {/* Logged Out User Icons */}
          <NavLink to="/signin">Sign in</NavLink>
          <NavLink to="/signup">Sign up</NavLink>
        </div>
      )}

      {/* Dark Mode Toggle */}
      {toggleDarkMode && (
        <button onClick={toggleDarkMode}>
          Toggle Dark Mode ({darkMode ? "Enabled" : "Disabled"})
        </button>
      )}
    </motion.nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  logo: PropTypes.string,
  currentUser: PropTypes.object,
  onSignOut: PropTypes.func,
  toggleDarkMode: PropTypes.func,
  darkMode: PropTypes.bool
};

export default Navbar;
