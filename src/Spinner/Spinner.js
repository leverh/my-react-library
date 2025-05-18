import React from 'react';
import PropTypes from 'prop-types';
import styles from './Spinner.module.css';

function Spinner({ 
  size, 
  color, 
  speed, 
  thickness, 
  variant, 
  label, 
  fullscreen, 
  overlay, 
  hideText,
  className,
  style,
  secondaryColor
}) {
  // Build the spinner styles dynamically
  const spinnerStyle = {
    width: size || '50px',
    height: size || '50px',
    borderWidth: thickness,
    animationDuration: speed || '1s',
    ...style
  };

  // Set the spinner colors based on variant and custom colors
  if (variant === 'primary') {
    spinnerStyle.borderTopColor = '#007bff';
  } else if (variant === 'secondary') {
    spinnerStyle.borderTopColor = '#6c757d';
  } else if (variant === 'success') {
    spinnerStyle.borderTopColor = '#28a745';
  } else if (variant === 'danger') {
    spinnerStyle.borderTopColor = '#dc3545';
  } else if (variant === 'warning') {
    spinnerStyle.borderTopColor = '#ffc107';
  } else if (variant === 'info') {
    spinnerStyle.borderTopColor = '#17a2b8';
  } else if (variant === 'light') {
    spinnerStyle.borderTopColor = '#f8f9fa';
  } else if (variant === 'dark') {
    spinnerStyle.borderTopColor = '#343a40';
  } else if (color) {
    spinnerStyle.borderTopColor = color;
  }

  // Set secondary color for the rest of the spinner
  if (secondaryColor) {
    spinnerStyle.borderColor = `${secondaryColor} ${secondaryColor} ${secondaryColor} transparent`;
  }

  // Determine spinner variant class
  const variantClass = variant ? styles[`spinner-${variant}`] : '';
  
  // Determine spinner type class
  const typeClass = styles[typeof variant === 'string' && variant.includes('-') 
    ? variant 
    : 'spinner-border'];

  // Build the complete className
  const spinnerClassName = [
    styles.spinner,
    variantClass,
    typeClass,
    fullscreen ? styles.fullscreen : '',
    overlay ? styles.overlay : '',
    className
  ].filter(Boolean).join(' ');

  // Create the spinner element
  const spinnerElement = (
    <div
      className={spinnerClassName}
      style={spinnerStyle}
      role="status"
      aria-label={label || 'Loading'}
    >
      {!hideText && (
        <span className={styles.srOnly}>
          {label || 'Loading...'}
        </span>
      )}
    </div>
  );

  // For fullscreen spinner, wrap in a container
  if (fullscreen) {
    return (
      <div className={styles.spinnerContainer}>
        {spinnerElement}
      </div>
    );
  }

  // Return the spinner
  return spinnerElement;
}

Spinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  speed: PropTypes.string,
  thickness: PropTypes.string,
  variant: PropTypes.oneOf([
    'primary', 
    'secondary', 
    'success', 
    'danger', 
    'warning', 
    'info', 
    'light', 
    'dark',
    'spinner-grow',
    'spinner-ripple',
    'spinner-dots'
  ]),
  label: PropTypes.string,
  fullscreen: PropTypes.bool,
  overlay: PropTypes.bool,
  hideText: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

Spinner.defaultProps = {
  size: '50px',
  speed: '1s',
  thickness: '4px',
  fullscreen: false,
  overlay: false,
  hideText: false
};

export default Spinner;