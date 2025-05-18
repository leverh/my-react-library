import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeroSection.module.css';

function HeroSection({ 
  title, 
  subtitle, 
  imageSrc, 
  altText,
  backgroundImage,
  backgroundOverlay,
  height,
  textAlign = 'center',
  textColor,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  children,
  darkMode = false,
  theme = 'default',
  alignItems = 'center',
  fullScreen = false,
  animated = false,
  className,
  style,
  video
}) {
  // Determine which background to use
  const hasBackgroundImage = backgroundImage || imageSrc;
  
  // Build style object for background image
  const backgroundStyle = {
    ...(hasBackgroundImage && { backgroundImage: `url(${backgroundImage || imageSrc})` }),
    ...(height && { height }),
    ...style
  };
  
  // Determine text color default based on dark mode or theme
  const getDefaultTextColor = () => {
    if (textColor) return textColor;
    if (hasBackgroundImage) return '#ffffff';
    if (darkMode) return '#ffffff';
    return '';
  };
  
  // Calculate overlay opacity based on theme or custom value
  const getOverlayOpacity = () => {
    if (typeof backgroundOverlay === 'number') return backgroundOverlay;
    if (theme === 'dark') return 0.7;
    if (theme === 'light') return 0.3;
    return 0.5; // default
  };
  
  // Build class names string
  const heroClasses = [
    styles.heroSection,
    styles[`align-${textAlign}`],
    styles[`valign-${alignItems}`],
    fullScreen ? styles.fullScreen : '',
    animated ? styles.animated : '',
    hasBackgroundImage ? styles.hasBackground : '',
    video ? styles.hasVideo : '',
    darkMode ? styles.darkMode : '',
    theme !== 'default' ? styles[`theme-${theme}`] : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={heroClasses}
      style={backgroundStyle}
    >
      {/* Video background if provided */}
      {video && (
        <div className={styles.videoContainer}>
          <video autoPlay muted loop playsInline className={styles.videoBackground}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
      
      {/* Background overlay */}
      {hasBackgroundImage && (
        <div 
          className={styles.overlay} 
          style={{ opacity: getOverlayOpacity() }}
        ></div>
      )}
      
      {/* Content container */}
      <div className={styles.contentContainer}>
        {/* Text content */}
        <div 
          className={styles.textContent}
          style={{ color: getDefaultTextColor() }}
        >
          {/* Hero image (displayed inline, not as background) */}
          {imageSrc && !backgroundImage && !hasBackgroundImage && (
            <img 
              src={imageSrc} 
              alt={altText || 'Hero Image'} 
              className={styles.heroImage} 
            />
          )}
          
          {title && (
            <h1 className={styles.title}>
              {animated ? (
                <span className={styles.animatedText}>{title}</span>
              ) : (
                title
              )}
            </h1>
          )}
          
          {subtitle && (
            <p className={styles.subtitle}>
              {animated ? (
                <span className={styles.animatedText}>{subtitle}</span>
              ) : (
                subtitle
              )}
            </p>
          )}
          
          {/* Call to action buttons */}
          {(buttonText || secondaryButtonText) && (
            <div className={styles.buttonContainer}>
              {buttonText && (
                <a 
                  href={buttonLink || '#'} 
                  className={styles.primaryButton}
                >
                  {buttonText}
                </a>
              )}
              
              {secondaryButtonText && (
                <a 
                  href={secondaryButtonLink || '#'} 
                  className={styles.secondaryButton}
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          )}
          
          {/* Additional content */}
          {children && (
            <div className={styles.additionalContent}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundOverlay: PropTypes.number,
  height: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  textColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  secondaryButtonLink: PropTypes.string,
  children: PropTypes.node,
  darkMode: PropTypes.bool,
  theme: PropTypes.oneOf(['default', 'dark', 'light', 'gradient']),
  alignItems: PropTypes.oneOf(['top', 'center', 'bottom']),
  fullScreen: PropTypes.bool,
  animated: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  video: PropTypes.string
};

export default HeroSection;