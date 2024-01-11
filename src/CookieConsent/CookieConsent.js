import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CookieConsent.module.css';

const CookieConsent = ({ consentText, learnMoreLink, onConsent }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'given') {
      setVisible(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookieConsent', 'given');
    onConsent();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.cookieConsent}>
      <p>{consentText || 'This website uses cookies to ensure you get the best experience on our website.'} 
        <a href={learnMoreLink || '/cookie-policy'}>Learn More</a>
      </p>
      <button onClick={handleConsent}>Got it!</button>
    </div>
  );
};

CookieConsent.propTypes = {
  consentText: PropTypes.string,
  learnMoreLink: PropTypes.string,
  onConsent: PropTypes.func
};

export default CookieConsent;
