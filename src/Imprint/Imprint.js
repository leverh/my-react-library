import React from 'react';
import PropTypes from 'prop-types';
import styles from './Imprint.module.css';

function Imprint({ content, metaData, contactDetails, legalDisclaimer }) {
  return (
    <div className={styles.imprint}>
      <h2>Imprint</h2>

      {/* Dynamic Content Rendering */}
      <div dangerouslySetInnerHTML={{ __html: content }} />

      {/* Contact Details */}
      <p><strong>Contact:</strong><br />
        {contactDetails.map((line, index) => <span key={index}>{line}<br /></span>)}
      </p>

      {/* Legal Disclaimer */}
      <h3>Disclaimer:</h3>
      <p><strong>Legal Disclaimer:</strong><br />{legalDisclaimer}</p>
    </div>
  );
}

Imprint.propTypes = {
  content: PropTypes.string.isRequired,
  metaData: PropTypes.object,
  contactDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
  legalDisclaimer: PropTypes.string.isRequired
};

export default Imprint;
