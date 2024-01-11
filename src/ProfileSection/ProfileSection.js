import React from 'react';
import PropTypes from 'prop-types';
import Skills from '../Skills/Skills'; // Consider making this component more generic as well
import styles from './ProfileSection.module.css';

function ProfileSection({ sections }) {
  return (
    <div className={styles.profile}>
      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          {section.image && (
            <img src={section.image} alt={section.title} className={styles.icon} />
          )}
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          {section.skills && <Skills skills={section.skills} />}
        </div>
      ))}
    </div>
  );
}

ProfileSection.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
      image: PropTypes.string,
      skills: PropTypes.array // If using a generic Skills component
    })
  ).isRequired
};

export default ProfileSection;
