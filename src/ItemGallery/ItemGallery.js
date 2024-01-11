import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem/GalleryItem';
import styles from './ItemGallery.module.css';

function ItemGallery({ items }) {
  return (
    <div className={styles.itemGallery}>
      <h2>Gallery</h2>
      <div className={styles.itemsGrid}> 
        {items.map(item => <GalleryItem key={item.title} item={item} />)}
      </div>
    </div>
  );
}

ItemGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgSrc: PropTypes.string,
      link: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
};

export default ItemGallery;
