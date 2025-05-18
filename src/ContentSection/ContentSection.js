import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContentSection.module.css';

const ContentSection = ({ 
  title, 
  description, 
  iconName, 
  imagePath, 
  children,
  highlight,
  align = 'left',
  maxWidth,
  theme = 'light',
  className,
  style,
  action,
  onClick
}) => {
  // Prepare image source - either use imagePath directly, or build path based on iconName
  const imgSrc = imagePath || (iconName ? `/icons/${iconName}.svg` : null);
  
  // Build className string combining default and conditional classes
  const sectionClasses = [
    styles.contentSection,
    styles[`align-${align}`],
    highlight ? styles.highlight : '',
    theme === 'dark' ? styles.dark : '',
    className
  ].filter(Boolean).join(' ');
  
  // Prepare custom styles
  const customStyles = {
    ...(maxWidth && { maxWidth }),
    ...style
  };
  
  // Process description to handle strings or React nodes
  const descriptionContent = typeof description === 'string' 
    ? <p className={styles.description}>{description}</p>
    : <div className={styles.description}>{description}</div>;

  return (
    <div 
      className={sectionClasses} 
      style={customStyles}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {imgSrc && (
        <div className={styles.iconContainer}>
          <img
            src={imgSrc}
            alt={`${iconName || title} icon`}
            className={styles.icon}
          />
        </div>
      )}
      
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        
        {description && descriptionContent}
        
        {children && (
          <div className={styles.extraContent}>
            {children}
          </div>
        )}
        
        {action && (
          <div className={styles.actionContainer}>
            {typeof action === 'string' ? (
              <button className={styles.actionButton}>{action}</button>
            ) : (
              action
            )}
          </div>
        )}
      </div>
    </div>
  );
};

ContentSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconName: PropTypes.string,
  imagePath: PropTypes.string,
  children: PropTypes.node,
  highlight: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  maxWidth: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
  style: PropTypes.object,
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func
};

export default ContentSection;