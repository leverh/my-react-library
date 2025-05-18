import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

function Footer({ 
  year, 
  companyName, 
  links, 
  logo, 
  socialLinks, 
  columns, 
  darkMode,
  showScrollToTop,
  className,
  style
}) {
  const currentYear = year || new Date().getFullYear();
  
  // Build columns if provided
  const renderColumns = () => {
    if (!columns || columns.length === 0) return null;
    
    return (
      <div className={styles.columns}>
        {columns.map((column, index) => (
          <div key={index} className={styles.column}>
            {column.title && <h3 className={styles.columnTitle}>{column.title}</h3>}
            {column.links && column.links.length > 0 && (
              <ul className={styles.columnLinks}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={styles.link}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  // Build social links if provided
  const renderSocialLinks = () => {
    if (!socialLinks || socialLinks.length === 0) return null;
    
    return (
      <div className={styles.socialLinks}>
        {socialLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            aria-label={link.label}
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            {link.icon ? (
              <span className={styles.socialIcon}>{link.icon}</span>
            ) : (
              link.label
            )}
          </a>
        ))}
      </div>
    );
  };
  
  // Handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer 
      className={`
        ${styles.footer} 
        ${darkMode ? styles.darkMode : ''} 
        ${className || ''}
      `}
      style={style}
    >
      <div className={styles.footerContainer}>
        {/* Logo section */}
        {logo && (
          <div className={styles.logoSection}>
            <img src={logo} alt={`${companyName} logo`} className={styles.footerLogo} />
          </div>
        )}
        
        {/* Columns section */}
        {renderColumns()}
        
        {/* Simple links (backward compatibility) */}
        {links && links.length > 0 && !columns && (
          <ul className={styles.links}>
            {links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        
        {/* Social links section */}
        {renderSocialLinks()}
        
        {/* Copyright section */}
        <div className={styles.copyright}>
          <p>© {companyName || 'Your Company Name'} {currentYear}</p>
        </div>
        
        {/* Scroll to top button */}
        {showScrollToTop && (
          <button 
            className={styles.scrollToTop} 
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              width="16"
              height="16"
            >
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
}

Footer.propTypes = {
  year: PropTypes.number,
  companyName: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      external: PropTypes.bool
    })
  ),
  logo: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.node
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          external: PropTypes.bool
        })
      )
    })
  ),
  darkMode: PropTypes.bool,
  showScrollToTop: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

Footer.defaultProps = {
  showScrollToTop: false,
  darkMode: false
};

export default Footer;