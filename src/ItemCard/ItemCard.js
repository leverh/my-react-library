import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemCard.module.css';

function ItemCard({ 
  item, 
  onClick, 
  darkMode = false, 
  hoverEffect = 'scale',
  animationDelay = 0
}) {
  const { 
    title, 
    description, 
    imgSrc, 
    link, 
    technologies,
    category,
    tags,
    featured,
    date,
    author
  } = item;
  
  // Build class names
  const itemClasses = [
    styles.galleryItem,
    styles[`hover-${hoverEffect}`],
    darkMode ? styles.darkMode : '',
    featured ? styles.featured : '',
    onClick ? styles.clickable : ''
  ].filter(Boolean).join(' ');
  
  // Handle click
  const handleClick = () => {
    if (onClick) {
      onClick(item);
    } else if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };
  
  // Animation delay style
  const animationStyle = animationDelay ? { animationDelay: `${animationDelay}s` } : {};

  return (
    <div 
      className={itemClasses} 
      onClick={handleClick}
      style={animationStyle}
      tabIndex={onClick || link ? 0 : undefined}
      role={onClick || link ? 'button' : undefined}
      aria-label={onClick || link ? `View details for ${title}` : undefined}
    >
      {/* Featured badge */}
      {featured && (
        <div className={styles.featuredBadge}>Featured</div>
      )}
      
      {/* Image container */}
      {imgSrc && (
        <div className={styles.imageContainer}>
          <img src={imgSrc} alt={title} className={styles.image} />
          
          {/* Image overlay with quick action buttons */}
          <div className={styles.overlay}>
            {link && (
              <a 
                href={link} 
                className={styles.linkButton}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Visit ${title}`}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className={styles.content}>
        {/* Category or date info */}
        {(category || date) && (
          <div className={styles.meta}>
            {category && <span className={styles.category}>{category}</span>}
            {date && <span className={styles.date}>{date}</span>}
            {author && <span className={styles.author}>by {author}</span>}
          </div>
        )}
        
        {/* Title */}
        <h3 className={styles.title}>{title}</h3>
        
        {/* Description */}
        {description && (
          <p className={styles.description}>{description}</p>
        )}
        
        {/* Tags or technologies */}
        {(technologies && technologies.length > 0) && (
          <div className={styles.tags}>
            {technologies.map(tech => (
              <span key={tech} className={styles.tag}>{tech}</span>
            ))}
          </div>
        )}
        
        {(tags && tags.length > 0) && (
          <div className={styles.tags}>
            {tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgSrc: PropTypes.string,
    link: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    featured: PropTypes.bool,
    date: PropTypes.string,
    author: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func,
  darkMode: PropTypes.bool,
  hoverEffect: PropTypes.oneOf(['scale', 'lift', 'glow', 'border', 'none']),
  animationDelay: PropTypes.number
};

export default ItemCard;