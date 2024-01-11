import React from 'react';
import PropTypes from 'prop-types';
import TechnologyTag from '../TechnologyTag/TechnologyTag'; // Consider renaming this too
import styles from './ItemCard.module.css';

function ItemCard({ item }) {
  return (
    <a href={item.link} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
      <div className={styles.card}>
        <img src={item.imgSrc} alt={item.title} className={styles.cardImage} />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardDescription}>{item.description}</p>
          {item.technologies && (
            <div className={styles.techTags}>
              {item.technologies.map(tech => <TechnologyTag key={tech} tech={tech} />)}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgSrc: PropTypes.string,
    link: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default ItemCard;
