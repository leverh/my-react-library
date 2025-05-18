import React from 'react';
import PropTypes from 'prop-types';
import styles from './NotFound.module.css';

function NotFound({ 
  title, 
  message, 
  homeUrl, 
  homeText,
  portfolioUrl, 
  portfolioText,
  imageUrl,
  customLinks,
  darkMode = false,
  animated = true,
  layout = 'centered',
  showBackButton = true,
  onBackClick,
  className,
  style
}) {
  // Default text values
  const defaultTitle = '404 - Page Not Found';
  const defaultMessage = 'Oops! The page you are looking for does not exist. It might have been moved or deleted.';
  const defaultHomeText = 'Homepage';
  const defaultPortfolioText = 'Portfolio';
  
  // Handle back button click
  const handleBackClick = (e) => {
    if (onBackClick) {
      e.preventDefault();
      onBackClick();
    } else {
      window.history.back();
    }
  };
  
  // Build class names
  const notFoundClasses = [
    styles.notFound,
    styles[`layout-${layout}`],
    darkMode ? styles.darkMode : '',
    animated ? styles.animated : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={notFoundClasses} style={style}>
      <div className={styles.content}>
        {/* Back button */}
        {showBackButton && (
          <button 
            onClick={handleBackClick} 
            className={styles.backButton}
            aria-label="Go back to previous page"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              width="24"
              height="24"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Go Back</span>
          </button>
        )}
        
        {/* Title */}
        <h2 className={styles.title}>{title || defaultTitle}</h2>
        
        {/* Image */}
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt="Page not found illustration" 
            className={styles.notFoundImage}
          />
        )}
        
        {/* Message */}
        <p className={styles.message}>{message || defaultMessage}</p>
        
        {/* Navigation links */}
        <div className={styles.links}>
          {homeUrl && (
            <a href={homeUrl} className={styles.primaryLink}>
              {homeText || defaultHomeText}
            </a>
          )}
          
          {portfolioUrl && (
            <a href={portfolioUrl} className={styles.secondaryLink}>
              {portfolioText || defaultPortfolioText}
            </a>
          )}
          
          {/* Custom links */}
          {customLinks && customLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              className={link.primary ? styles.primaryLink : styles.secondaryLink}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

NotFound.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  homeUrl: PropTypes.string,
  homeText: PropTypes.string,
  portfolioUrl: PropTypes.string,
  portfolioText: PropTypes.string,
  imageUrl: PropTypes.string,
  customLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      primary: PropTypes.bool,
      external: PropTypes.bool
    })
  ),
  darkMode: PropTypes.bool,
  animated: PropTypes.bool,
  layout: PropTypes.oneOf(['centered', 'left', 'split']),
  showBackButton: PropTypes.bool,
  onBackClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};

export default NotFound;