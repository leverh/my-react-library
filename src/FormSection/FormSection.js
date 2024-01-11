import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormSection.module.css';

function FormSection({ formAction, fields, thankYouMessage, contactDetails, privacyStatement }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic as needed
    setSubmitted(true);
  };

  return (
    <div className={styles.formSection}>
      <h2>Contact Us</h2>
      {submitted ? (
        <p>{thankYouMessage}</p>
      ) : (
        <form onSubmit={handleSubmit} action={formAction} method="POST">
          {fields.map((field, index) => (
            <label key={index}>
              {field.label}:
              {field.type === 'textarea' ? (
                <textarea name={field.name} required aria-required="true"></textarea>
              ) : (
                <input type={field.type} name={field.name} required aria-required="true" />
              )}
            </label>
          ))}
          <button type="submit">Send</button>
        </form>
      )}
      <div className={styles.contactDetails}>
        <p>{contactDetails}</p>
      </div>
      <div className={styles.privacyStatement}>
        <p>{privacyStatement}</p>
      </div>
    </div>
  );
}

FormSection.propTypes = {
  formAction: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired // 'text', 'email', 'textarea', etc.
    })
  ).isRequired,
  thankYouMessage: PropTypes.string,
  contactDetails: PropTypes.string,
  privacyStatement: PropTypes.string
};

export default FormSection;
