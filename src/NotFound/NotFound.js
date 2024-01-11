import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NotFound.module.css';

function NotFound({ title, message, homeUrl, portfolioUrl, imageUrl }) {
  return (
    <div className={styles.notFound}>
      <h2>{title || '404 - Page Not Found'}</h2>
      <img src={imageUrl || '/images/404.png'} alt="Not Found" className={styles.notFoundImage}/>
      <p>{message || 'Oops! The page you are looking for does not exist. It might have been moved or deleted.'}</p>
      <p>
        Feel free to navigate back to the <Link to={homeUrl || '/'}>Homepage</Link>
        {portfolioUrl && ' or check out my '}
        {portfolioUrl && <Link to={portfolioUrl}>Portfolio</Link>}.
      </p>
    </div>
  );
}

NotFound.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  homeUrl: PropTypes.string,
  portfolioUrl: PropTypes.string,
  imageUrl: PropTypes.string
};

export default NotFound;
