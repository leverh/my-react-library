import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormSection.module.css';

function FormSection({ 
  formAction, 
  fields, 
  submitButtonText = 'Send',
  title = 'Contact Us',
  subtitle,
  thankYouMessage = 'Thank you for your submission. We will get back to you soon!', 
  contactDetails, 
  privacyStatement,
  darkMode = false,
  className,
  style,
  onSubmit,
  loading = false,
  errors = {},
  validate,
  resetAfterSubmit = false,
  autoComplete = 'on'
}) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear field-specific error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  // Form validation
  const validateForm = () => {
    // Use custom validation if provided
    if (validate) {
      const customErrors = validate(formData);
      setFormErrors(customErrors);
      return Object.keys(customErrors).length === 0;
    }
    
    // Basic required field validation
    const newErrors = {};
    fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
      
      // Email validation
      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Please enter a valid email address';
        }
      }
    });
    
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Don't submit if already submitting
    if (isSubmitting || loading) return;
    
    // Validate form
    const isValid = validateForm();
    if (!isValid) return;
    
    setIsSubmitting(true);
    
    try {
      // If custom onSubmit handler is provided
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default submission logic
        const formElement = e.target;
        const formDataObj = new FormData(formElement);
        
        await fetch(formAction, {
          method: 'POST',
          body: formDataObj
        });
      }
      
      setSubmitted(true);
      
      // Reset form if requested
      if (resetAfterSubmit) {
        setFormData({});
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormErrors({
        form: 'An error occurred while submitting the form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Reset form and submission status
  const handleReset = () => {
    setSubmitted(false);
    setFormData({});
    setFormErrors({});
  };
  
  // Combine errors from props and internal state
  const combinedErrors = { ...formErrors, ...errors };
  
  return (
    <div 
      className={`
        ${styles.formSection} 
        ${darkMode ? styles.darkMode : ''} 
        ${className || ''}
      `}
      style={style}
    >
      <div className={styles.formHeader}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      
      {submitted ? (
        <div className={styles.thankYouMessage}>
          <div className={styles.successIcon}>✓</div>
          <p>{thankYouMessage}</p>
          <button 
            type="button" 
            className={styles.resetButton}
            onClick={handleReset}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          action={formAction} 
          method="POST" 
          className={styles.form}
          noValidate
          autoComplete={autoComplete}
        >
          {/* Display form-level error if exists */}
          {combinedErrors.form && (
            <div className={styles.formError}>
              {combinedErrors.form}
            </div>
          )}
          
          {fields.map((field, index) => (
            <div 
              key={index} 
              className={`
                ${styles.formGroup} 
                ${combinedErrors[field.name] ? styles.hasError : ''}
              `}
            >
              <label htmlFor={`field-${field.name}`} className={styles.label}>
                {field.label}
                {field.required && <span className={styles.required}>*</span>}
              </label>
              
              {field.type === 'textarea' ? (
                <textarea 
                  id={`field-${field.name}`}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  aria-required={field.required ? "true" : "false"}
                  aria-invalid={!!combinedErrors[field.name]}
                  placeholder={field.placeholder || ''}
                  className={styles.textarea}
                  rows={field.rows || 4}
                  maxLength={field.maxLength}
                  disabled={isSubmitting || loading}
                />
              ) : field.type === 'select' ? (
                <select
                  id={`field-${field.name}`}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  aria-required={field.required ? "true" : "false"}
                  aria-invalid={!!combinedErrors[field.name]}
                  className={styles.select}
                  disabled={isSubmitting || loading}
                >
                  <option value="">{field.placeholder || 'Select an option'}</option>
                  {field.options && field.options.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input 
                  id={`field-${field.name}`}
                  type={field.type} 
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  aria-required={field.required ? "true" : "false"}
                  aria-invalid={!!combinedErrors[field.name]}
                  placeholder={field.placeholder || ''}
                  className={styles.input}
                  min={field.min}
                  max={field.max}
                  maxLength={field.maxLength}
                  pattern={field.pattern}
                  disabled={isSubmitting || loading}
                />
              )}
              
              {/* Field-specific error message */}
              {combinedErrors[field.name] && (
                <div className={styles.fieldError}>
                  {combinedErrors[field.name]}
                </div>
              )}
              
              {/* Field help text */}
              {field.helpText && (
                <div className={styles.helpText}>
                  {field.helpText}
                </div>
              )}
            </div>
          ))}
          
          <button 
            type="submit" 
            className={`
              ${styles.submitButton}
              ${(isSubmitting || loading) ? styles.loading : ''}
            `}
            disabled={isSubmitting || loading}
          >
            {(isSubmitting || loading) ? (
              <span className={styles.loadingSpinner}></span>
            ) : null}
            {submitButtonText}
          </button>
        </form>
      )}
      
      {contactDetails && (
        <div className={styles.contactDetails}>
          <p>{contactDetails}</p>
        </div>
      )}
      
      {privacyStatement && (
        <div className={styles.privacyStatement}>
          <p>{privacyStatement}</p>
        </div>
      )}
    </div>
  );
}

FormSection.propTypes = {
  formAction: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired, // 'text', 'email', 'textarea', 'select', etc.
      required: PropTypes.bool,
      placeholder: PropTypes.string,
      helpText: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })),
      min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      maxLength: PropTypes.number,
      pattern: PropTypes.string,
      rows: PropTypes.number
    })
  ).isRequired,
  submitButtonText: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  thankYouMessage: PropTypes.string,
  contactDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  privacyStatement: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  darkMode: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  errors: PropTypes.object,
  validate: PropTypes.func,
  resetAfterSubmit: PropTypes.bool,
  autoComplete: PropTypes.string
};

export default FormSection;