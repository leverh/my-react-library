import React from 'react';
import PropTypes from 'prop-types';
import styles from './CookiePolicy.module.css';

function CookiePolicy({ title, content, contactEmail }) {
  return (
    <div className={styles.cookiePolicy}>
      <h2>{title || 'Cookie Policy'}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {contactEmail && (
        <p>Contacting Us: If you have any questions about this policy, or if you would like to change your settings, please contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
      )}
    </div>
  );
}

CookiePolicy.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  contactEmail: PropTypes.string
};

export default CookiePolicy;
