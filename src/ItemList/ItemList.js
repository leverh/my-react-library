import React from 'react';
import PropTypes from 'prop-types';
import SectionItem from '../SectionItem/SectionItem'; // Previously ServiceSection
import styles from './ItemList.module.css';

function ItemList({ items, ctaContent, ctaLink }) {
  return (
    <div className={styles.itemListPage}>
      {items.map((item, index) => (
        <SectionItem
          key={index}
          title={item.title}
          description={item.description}
          iconName={item.iconName}
        />
      ))}

      {ctaContent && (
        <div className={styles.cta}>
          <p>{ctaContent}</p>
          <a href={ctaLink || '#'} className={styles.contactButton}>Learn More</a>
        </div>
      )}
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      iconName: PropTypes.string
    })
  ).isRequired,
  ctaContent: PropTypes.string,
  ctaLink: PropTypes.string
};

export default ItemList;
