import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

function Footer({ year, companyName, links }) {
  return (
    <footer className={styles.footer}>
      <p>© {companyName || 'Your Company Name'} {year || new Date().getFullYear()}</p>
      <ul>
        {links && links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

Footer.propTypes = {
  year: PropTypes.number,
  companyName: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
};

export default Footer;
