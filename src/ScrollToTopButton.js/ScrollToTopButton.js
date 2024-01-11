import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ScrollToTopButton.module.css';

function ScrollToTopButton({ style, className, threshold, label }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [threshold]);

  if (!isVisible) {
    return null;
  }

  return (
    <button 
      className={`${styles.scrollToTop} ${className}`} 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={style}
      aria-label={label || 'Scroll to top'}
    >
      ↑
    </button>
  );
}

ScrollToTopButton.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  threshold: PropTypes.number,
  label: PropTypes.string
};

ScrollToTopButton.defaultProps = {
  threshold: 300
};

export default ScrollToTopButton;
