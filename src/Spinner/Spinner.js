import React from 'react';
import PropTypes from 'prop-types';
import styles from './Spinner.module.css';

function Spinner({ size, color, speed }) {
  const spinnerStyle = {
    width: size || '50px',
    height: size || '50px',
    borderTopColor: color || '#000',
    animationDuration: speed || '1s'
  };

  return (
    <div 
      className={styles.spinner} 
      style={spinnerStyle}
      role="status"
      aria-label="Loading"
    ></div>
  );
}

Spinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  speed: PropTypes.string
};

export default Spinner;
