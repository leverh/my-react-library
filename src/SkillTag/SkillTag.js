import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillTag.module.css';

function SkillTag({ imageSrc, label }) {
  return (
    <div className={styles.iconWrapper} title={label}>
      <img src={imageSrc} alt={label} className={styles.icon} />
    </div>
  );
}

SkillTag.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default SkillTag;
