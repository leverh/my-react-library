import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeroSection.module.css';

function HeroSection({ title, subtitle, imageSrc, altText }) {
  return (
    <div className={styles.heroSection}>
      {imageSrc && <img src={imageSrc} alt={altText || 'Hero Image'} className={styles.heroImage} />}
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
  altText: PropTypes.string
};

export default HeroSection;
