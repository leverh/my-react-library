import React from 'react';
import PropTypes from 'prop-types';
import Skills from '../Skills/Skills';
import styles from './ProfileSection.module.css';

function ProfileSection({ 
  sections, 
  layout = 'grid', 
  className, 
  style,
  highlightColor,
  animateEntrance = false,
  darkMode = false
}) {
  return (
    <div 
      className={`
        ${styles.profile} 
        ${styles[`layout-${layout}`]} 
        ${darkMode ? styles.darkMode : ''}
        ${animateEntrance ? styles.animate : ''}
        ${className || ''}
      `}
      style={style}
    >
      {sections.map((section, index) => (
        <div 
          key={index} 
          className={styles.section}
          style={{
            ...(section.backgroundColor && { backgroundColor: section.backgroundColor }),
            ...(section.textColor && { color: section.textColor }),
            ...(highlightColor && { '--highlight-color': highlightColor })
          }}
        >
          <div className={styles.sectionHeader}>
            {section.image && (
              <div className={styles.imageContainer}>
                <img 
                  src={section.image} 
                  alt={section.imageAlt || `${section.title} icon`} 
                  className={styles.icon} 
                />
              </div>
            )}
            <h2 className={styles.title}>{section.title}</h2>
          </div>
          
          {section.subtitle && (
            <h3 className={styles.subtitle}>{section.subtitle}</h3>
          )}
          
          {section.content && (
            <div className={styles.content}>
              {typeof section.content === 'string' ? (
                <p>{section.content}</p>
              ) : (
                section.content
              )}
            </div>
          )}
          
          {section.skills && (
            <div className={styles.skillsContainer}>
              <Skills skills={section.skills} />
            </div>
          )}
          
          {section.link && (
            <a 
              href={section.link.url} 
              className={styles.sectionLink}
              target={section.link.external ? "_blank" : undefined}
              rel={section.link.external ? "noopener noreferrer" : undefined}
            >
              {section.link.label || 'Learn more'}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

ProfileSection.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      image: PropTypes.string,
      imageAlt: PropTypes.string,
      skills: PropTypes.array,
      backgroundColor: PropTypes.string,
      textColor: PropTypes.string,
      link: PropTypes.shape({
        url: PropTypes.string.isRequired,
        label: PropTypes.string,
        external: PropTypes.bool
      })
    })
  ).isRequired,
  layout: PropTypes.oneOf(['grid', 'list', 'cards']),
  className: PropTypes.string,
  style: PropTypes.object,
  highlightColor: PropTypes.string,
  animateEntrance: PropTypes.bool,
  darkMode: PropTypes.bool
};

export default ProfileSection;