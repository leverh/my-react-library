import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem/GalleryItem';
import styles from './CardGrid.module.css';

function CardGrid({ 
  items, 
  title = 'Gallery',
  subtitle,
  columns = 3,
  gap = '2rem',
  layout = 'grid',
  filters = [],
  itemsPerPage,
  onItemClick,
  loading = false,
  darkMode = false,
  className,
  style,
  showLoadMore = false,
  loadMoreText = 'Load More',
  emptyMessage = 'No items to display',
  showItemCount = false,
  itemCountText = 'items',
  hoverEffect = 'scale',
  animateEntry = false
}) {
  // State
  const [filteredItems, setFilteredItems] = useState(items);
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState([]);
  const [page, setPage] = useState(1);
  
  // Calculate number of items to show based on pagination
  useEffect(() => {
    if (itemsPerPage) {
      setVisibleItems(filteredItems.slice(0, page * itemsPerPage));
    } else {
      setVisibleItems(filteredItems);
    }
  }, [filteredItems, page, itemsPerPage]);
  
  // Filter items when filter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter(item => {
          if (item.category === activeFilter) return true;
          if (item.tags && item.tags.includes(activeFilter)) return true;
          if (item.technologies && item.technologies.includes(activeFilter)) return true;
          return false;
        })
      );
    }
    setPage(1); // Reset pagination when filter changes
  }, [activeFilter, items]);
  
  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  
  // Handle load more
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  
  // Handle item click
  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };
  
  // Determine if load more button should be visible
  const showLoadMoreButton = showLoadMore && itemsPerPage && visibleItems.length < filteredItems.length;
  
  // Determine loading state
  const isLoading = loading;
  
  // Check if there are items to display
  const hasItems = filteredItems.length > 0;
  
  // Build class names
  const galleryClasses = [
    styles.itemGallery,
    styles[`layout-${layout}`],
    darkMode ? styles.darkMode : '',
    isLoading ? styles.loading : '',
    animateEntry ? styles.animated : '',
    className
  ].filter(Boolean).join(' ');
  
  // Build custom styles
  const galleryStyles = {
    ...style,
    ...(gap && { '--gallery-gap': gap })
  };
  
  // Dynamic grid template columns based on layout and columns prop
  if (layout === 'grid') {
    galleryStyles['--gallery-columns'] = columns;
  }

  return (
    <div className={galleryClasses} style={galleryStyles}>
      {/* Gallery Header */}
      <div className={styles.galleryHeader}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        
        {/* Item count display */}
        {showItemCount && hasItems && (
          <div className={styles.itemCount}>
            {filteredItems.length} {itemCountText}
          </div>
        )}
        
        {/* Filters */}
        {filters.length > 0 && (
          <div className={styles.filters}>
            <button 
              className={`${styles.filter} ${activeFilter === 'all' ? styles.active : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              All
            </button>
            {filters.map(filter => (
              <button 
                key={filter}
                className={`${styles.filter} ${activeFilter === filter ? styles.active : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Loading indicator */}
      {isLoading && (
        <div className={styles.loadingIndicator}>
          <div className={styles.spinner}></div>
          <p>Loading gallery items...</p>
        </div>
      )}
      
      {/* Empty state */}
      {!isLoading && !hasItems && (
        <div className={styles.emptyState}>
          <p>{emptyMessage}</p>
        </div>
      )}
      
      {/* Gallery Grid */}
      {!isLoading && hasItems && (
        <div className={styles.itemsContainer}>
          {visibleItems.map((item, index) => (
            <GalleryItem 
              key={item.id || item.title || index}
              item={item}
              onClick={() => handleItemClick(item)}
              darkMode={darkMode}
              hoverEffect={hoverEffect}
              animationDelay={animateEntry ? index * 0.1 : 0}
            />
          ))}
        </div>
      )}
      
      {/* Load More Button */}
      {showLoadMoreButton && (
        <div className={styles.loadMoreContainer}>
          <button 
            className={styles.loadMoreButton}
            onClick={handleLoadMore}
          >
            {loadMoreText}
          </button>
        </div>
      )}
    </div>
  );
}

CardGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgSrc: PropTypes.string,
      link: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string),
      category: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  columns: PropTypes.number,
  gap: PropTypes.string,
  layout: PropTypes.oneOf(['grid', 'list', 'masonry', 'carousel']),
  filters: PropTypes.arrayOf(PropTypes.string),
  itemsPerPage: PropTypes.number,
  onItemClick: PropTypes.func,
  loading: PropTypes.bool,
  darkMode: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  showLoadMore: PropTypes.bool,
  loadMoreText: PropTypes.string,
  emptyMessage: PropTypes.string,
  showItemCount: PropTypes.bool,
  itemCountText: PropTypes.string,
  hoverEffect: PropTypes.oneOf(['scale', 'lift', 'glow', 'border', 'none']),
  animateEntry: PropTypes.bool
};

export default CardGrid;