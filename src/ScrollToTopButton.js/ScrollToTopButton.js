import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ScrollToTopButton.module.css';

function ScrollToTopButton({ 
  style, 
  className, 
  threshold, 
  label, 
  icon, 
  showLabel,
  showAnimation,
  duration,
  smooth,
  offset,
  size
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Track scroll position for visibility
  useEffect(() => {
    const checkVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Initial check
    checkVisibility();
    
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [threshold]);

  // Animation for scroll completion
  useEffect(() => {
    if (!isScrolling) return;
    
    const timer = setTimeout(() => {
      setIsScrolling(false);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [isScrolling, duration]);

  const handleClick = () => {
    // Set scrolling state for animation
    setIsScrolling(true);
    
    // Scroll to position with offset
    window.scrollTo({ 
      top: offset, 
      behavior: smooth ? 'smooth' : 'auto' 
    });
    
    // Focus back to the top for accessibility
    setTimeout(() => {
      const firstFocusableElement = document.querySelector('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }, smooth ? duration : 0);
  };

  const buttonClasses = [
    styles.scrollToTop,
    isVisible ? styles.visible : '',
    isScrolling ? styles.scrolling : '',
    showAnimation ? styles.animated : '',
    size === 'small' ? styles.small : size === 'large' ? styles.large : '',
    className
  ].filter(Boolean).join(' ');

  if (!isVisible && !isScrolling) {
    return null;
  }

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      style={style}
      aria-label={label || 'Scroll to top'}
      title={label || 'Scroll to top'}
    >
      {icon ? (
        <span className={styles.icon}>{icon}</span>
      ) : (
        <span className={styles.defaultIcon}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </span>
      )}
      
      {showLabel && (
        <span className={styles.label}>{label || 'Top'}</span>
      )}
      
      {showAnimation && (
        <span className={styles.ripple} aria-hidden="true"></span>
      )}
    </button>
  );
}

ScrollToTopButton.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  threshold: PropTypes.number,
  label: PropTypes.string,
  icon: PropTypes.node,
  showLabel: PropTypes.bool,
  showAnimation: PropTypes.bool,
  duration: PropTypes.number,
  smooth: PropTypes.bool,
  offset: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

ScrollToTopButton.defaultProps = {
  threshold: 300,
  showLabel: false,
  showAnimation: true,
  duration: 800,
  smooth: true,
  offset: 0,
  size: 'medium'
};

export default ScrollToTopButton;