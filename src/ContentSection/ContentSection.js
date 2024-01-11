import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContentSection.module.css';

const ContentSection = ({ title, description, iconName, imagePath }) => {
  return (
    <div className={styles.contentSection}>
      {iconName && imagePath && (
        <img
          src={imagePath}
          alt={`${title} icon`}
          className={styles.icon}
        />
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  imagePath: PropTypes.string
};

export default ContentSection;
