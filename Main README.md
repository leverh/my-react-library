# My React Component Library

### Last Updated:
18th May 2025

A modern, accessible React component library designed to elevate your web experience with thoughtfully crafted UI elements.

## Features

- ✨ Modern, responsive components with smooth animations
- 🎨 Light and dark mode support out of the box
- ♿ Comprehensive accessibility features in every component
- 📱 Mobile-first design approach
- 🧩 Modular architecture for easy integration
- 🔍 Extensive customization options
- 📦 Lightweight with minimal dependencies

## Installation

```bash
npm install pixelsummit-react-components
# or
yarn add pixelsummit-react-components
```

## Components

### 🔗 [Navbar](./src/components/Navbar)
A fully responsive navigation bar with mobile menu support, user authentication, and dark mode toggle.

### ⬆️ [ScrollToTopButton](./src/components/ScrollToTopButton)
A customizable button that appears when scrolling down, allowing users to smoothly return to the top of the page.

### 🔄 [Spinner](./src/components/Spinner)
A versatile loading spinner with multiple variants, animations, and styling options.

### 🦶 [Footer](./src/components/Footer)
A flexible footer component supporting multiple columns, social links, and customizable layouts.

## Component Documentation

### Navbar Component

A responsive navigation bar with mobile menu, authentication support, and dark mode toggle.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `links` | array | required | Array of navigation links with `path` and `label` properties |
| `logo` | string | - | URL for your application logo |
| `currentUser` | object | - | User object with properties like `name` and `profile_image` |
| `onSignOut` | function | - | Function to handle user sign-out |
| `toggleDarkMode` | function | - | Function to toggle dark mode |
| `darkMode` | boolean | - | Current dark mode state |

#### Basic Usage

```jsx
import { Navbar } from 'pixelsummit-react-components';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

function MyApp() {
  return (
    <Navbar
      links={links}
      logo="/path/to/logo.png"
      darkMode={false}
      toggleDarkMode={() => {}}
    />
  );
}
```

### HeroSection Component

A versatile and visually impactful hero banner component for creating compelling page headers and landing sections.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | - | Main heading text |
| `subtitle` | string | - | Secondary descriptive text |
| `imageSrc` | string | - | Image URL (used as content image or background) |
| `altText` | string | `'Hero Image'` | Alt text for accessibility |
| `backgroundImage` | string | - | Background image URL (takes precedence over imageSrc for background) |
| `backgroundOverlay` | number | theme-based | Opacity of dark overlay (0-1) |
| `height` | string | - | Custom height (e.g., '500px', '80vh') |
| `textAlign` | string | `'center'` | Text alignment: `'left'`, `'center'`, or `'right'` |
| `textColor` | string | auto | Text color (auto-detects based on background) |
| `buttonText` | string | - | Primary call-to-action button text |
| `buttonLink` | string | `'#'` | Primary button URL |
| `secondaryButtonText` | string | - | Secondary button text |
| `secondaryButtonLink` | string | `'#'` | Secondary button URL |
| `children` | node | - | Additional content to render below subtitle |
| `darkMode` | boolean | `false` | Enable dark color scheme |
| `theme` | string | `'default'` | Predefined themes: `'default'`, `'dark'`, `'light'`, `'gradient'` |
| `alignItems` | string | `'center'` | Vertical content alignment: `'top'`, `'center'`, `'bottom'` |
| `fullScreen` | boolean | `false` | Make hero section fill entire viewport |
| `animated` | boolean | `false` | Enable entrance animations |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Additional inline styles |
| `video` | string | - | URL to background video (MP4 format) |

#### Basic Usage

```jsx
import { HeroSection } from 'pixelsummit-react-components';

function HomePage() {
  return (
    <HeroSection
      title="Welcome to My Website"
      subtitle="Creating beautiful digital experiences with modern technologies"
      buttonText="Get Started"
      buttonLink="/signup"
      secondaryButtonText="Learn More"
      secondaryButtonLink="/about"
      backgroundImage="/images/hero-bg.jpg"
      theme="dark"
    />
  );
}
```

#### Variants and Styles

```jsx
// Full-screen video background
<HeroSection
  title="Innovative Solutions"
  subtitle="Transforming ideas into digital reality"
  buttonText="Our Services"
  video="/videos/background.mp4"
  textAlign="left"
  fullScreen={true}
/>

// Gradient overlay with custom height
<HeroSection
  title="About Our Company"
  subtitle="Founded in 2020, we've been at the forefront of web innovation"
  theme="gradient"
  backgroundImage="/images/team.jpg"
  height="70vh"
  alignItems="bottom"
/>

// Simple hero with inline image
<HeroSection
  title="Our Products"
  subtitle="Discover our range of digital solutions"
  imageSrc="/images/product-showcase.png"
  altText="Product showcase"
  darkMode={true}
/>

// Animated hero with custom content
<HeroSection
  title="Get in Touch"
  subtitle="We'd love to hear from you"
  backgroundImage="/images/contact-bg.jpg"
  animated={true}
>
  <div className="contact-info">
    <p>Email: contact@example.com</p>
    <p>Phone: (123) 456-7890</p>
  </div>
</HeroSection>
```

### CardGrid Component

A versatile gallery component for displaying collections of items, projects, or cards with filtering, pagination, and multiple layout options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | array | required | Array of item objects to display in gallery |
| `title` | string | `'Gallery'` | Gallery title |
| `subtitle` | string | - | Descriptive subtitle |
| `columns` | number | `3` | Number of columns in grid layout |
| `gap` | string | `'2rem'` | Space between items |
| `layout` | string | `'grid'` | Layout style: `'grid'`, `'list'`, `'masonry'`, or `'carousel'` |
| `filters` | array | `[]` | Array of filter categories to display as filter buttons |
| `itemsPerPage` | number | - | Number of items to show per page (enables pagination) |
| `onItemClick` | function | - | Handler function when an item is clicked |
| `loading` | boolean | `false` | Show loading state |
| `darkMode` | boolean | `false` | Use dark color theme |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Additional inline styles |
| `showLoadMore` | boolean | `false` | Show load more button for pagination |
| `loadMoreText` | string | `'Load More'` | Text for load more button |
| `emptyMessage` | string | `'No items to display'` | Message shown when no items match filters |
| `showItemCount` | boolean | `false` | Display count of items |
| `itemCountText` | string | `'items'` | Text to show after item count number |
| `hoverEffect` | string | `'scale'` | Hover effect style for items |
| `animateEntry` | boolean | `false` | Animate items when they enter viewport |

#### Item Object Properties

Each object in the `items` array should have:

| Property | Type | Description |
|----------|------|-------------|
| `id` | string/number | Unique identifier (optional, falls back to title) |
| `title` | string | Item title (required) |
| `description` | string | Brief description or summary |
| `imgSrc` | string | URL to item image |
| `link` | string | URL when item or its button is clicked |
| `technologies` | array | List of technologies/tags to display and filter by |
| `category` | string | Primary category for filtering |
| `tags` | array | Additional tags for filtering |
| `featured` | boolean | Whether item should be marked as featured |
| `date` | string | Publication or creation date |
| `author` | string | Creator or author name |

#### Basic Usage

```jsx
import { CardGrid } from 'pixelsummit-react-components';

function ProjectGallery() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with shopping cart and payment processing",
      imgSrc: "/images/projects/ecommerce.jpg",
      link: "https://example-ecommerce.com",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Web Development"
    },
    {
      id: 2,
      title: "Health Tracker App",
      description: "Mobile application for tracking fitness goals and nutrition",
      imgSrc: "/images/projects/health-app.jpg",
      link: "https://healthtracker.app",
      technologies: ["React Native", "Firebase"],
      category: "Mobile Apps"
    },
    // More projects...
  ];

  return (
    <CardGrid
      items={projects}
      title="Featured Projects"
      subtitle="A collection of my recent work"
      columns={3}
      layout="grid"
    />
  );
}
```

#### Advanced Features

```jsx
import { CardGrid } from 'pixelsummit-react-components';
import { useState } from 'react';

function FilteredProjectGallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [/* project data */];
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    // Open modal or navigate to project details
  };
  
  return (
    <>
      <CardGrid
        items={projects}
        title="Portfolio"
        subtitle="Browse my work by category"
        columns={3}
        filters={["Web Development", "Mobile Apps", "UI/UX Design", "Branding"]}
        layout="masonry"
        itemsPerPage={6}
        showLoadMore={true}
        onItemClick={handleProjectClick}
        hoverEffect="lift"
        animateEntry={true}
        showItemCount={true}
        darkMode={false}
      />
      
      {selectedProject && (
        <ProjectDetailsModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}
```

### ItemCard Component

A card component used within the CardGrid to display individual items with consistent styling and interactive features.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `item` | object | required | Item data object (see Item Object Properties above) |
| `onClick` | function | - | Handler function when the item is clicked |
| `darkMode` | boolean | `false` | Use dark color theme |
| `hoverEffect` | string | `'scale'` | Effect on hover: `'scale'`, `'lift'`, `'glow'`, `'border'`, or `'none'` |
| `animationDelay` | number | `0` | Delay in seconds before animation starts (for staggered animations) |

#### Basic Usage

```jsx
import { ItemCard } from 'pixelsummit-react-components';

function SingleItem() {
  const project = {
    title: "Portfolio Website",
    description: "Personal portfolio built with React",
    imgSrc: "/images/portfolio.jpg",
    technologies: ["React", "CSS Modules", "Vite"]
  };

  return (
    <ItemCard 
      item={project}
      onClick={() => console.log('Item clicked')}
      hoverEffect="lift"
    />
  );
}
```

The ItemCard component is typically used within CardGrid, but can also be used independently when you need to display a single card with the same styling.

### NotFound Component

A customizable 404 page component for displaying error states and providing navigation options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | `'404 - Page Not Found'` | Main title for the error page |
| `message` | string | `'Oops! The page...'` | Descriptive message explaining the error |
| `homeUrl` | string | - | URL for the homepage link |
| `homeText` | string | `'Homepage'` | Text for the homepage link |
| `portfolioUrl` | string | - | URL for portfolio link |
| `portfolioText` | string | `'Portfolio'` | Text for portfolio link |
| `imageUrl` | string | - | URL to the error illustration image |
| `customLinks` | array | - | Array of custom navigation links |
| `darkMode` | boolean | `false` | Enable dark color scheme |
| `animated` | boolean | `true` | Enable entrance animations |
| `layout` | string | `'centered'` | Layout style: `'centered'`, `'left'`, or `'split'` |
| `showBackButton` | boolean | `true` | Show "Go Back" button |
| `onBackClick` | function | - | Custom handler for back button |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Additional inline styles |

#### Basic Usage

```jsx
import { NotFound } from 'pixelsummit-react-components';

function Custom404Page() {
  return (
    <NotFound
      title="Oops! Page Not Found"
      message="We couldn't find the page you were looking for. It may have been moved or deleted."
      homeUrl="/"
      imageUrl="/images/404-robot.svg"
    />
  );
}
```

#### Layout Variations

```jsx
// Left-aligned layout
<NotFound
  layout="left"
  title="404 - Page Not Found"
  imageUrl="/images/404.png"
  homeUrl="/"
  portfolioUrl="/projects"
/>

// Split layout with image and content side by side
<NotFound
  layout="split"
  title="Looks like you're lost"
  message="The page you are looking for is not available."
  imageUrl="/images/lost-in-space.svg"
  homeUrl="/"
/>
```

#### Custom Links

```jsx
<NotFound
  title="404 - Not Found"
  message="We couldn't find what you were looking for."
  imageUrl="/images/404.svg"
  customLinks={[
    { text: "Back to Home", url: "/", primary: true },
    { text: "Contact Support", url: "/contact" },
    { text: "Documentation", url: "https://docs.example.com", external: true }
  ]}
/>
```

#### Dark Mode

```jsx
<NotFound
  darkMode={true}
  title="404 - Lost in Space"
  message="Houston, we have a problem. The page you're looking for doesn't exist."
  imageUrl="/images/astronaut.svg"
  homeUrl="/"
/>
```

### ScrollToTopButton Component

A button that appears when scrolling down the page, allowing users to return to the top with a smooth animation.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `threshold` | number | `300` | Scroll position (in px) when button appears |
| `size` | string | `"medium"` | Button size: `"small"`, `"medium"`, or `"large"` |
| `color` | string | - | Custom button color |
| `showLabel` | boolean | `false` | Whether to display text label |
| `label` | string | `"Scroll to top"` | Accessible label and visible text (if `showLabel` is true) |
| `showAnimation` | boolean | `true` | Whether to show animations |
| `smooth` | boolean | `true` | Whether to use smooth scrolling |
| `duration` | number | `800` | Animation duration in milliseconds |
| `offset` | number | `0` | Offset from top (useful for fixed headers) |

#### Basic Usage

```jsx
import { ScrollToTopButton } from 'pixelsummit-react-components';

function MyApp() {
  return (
    <div>
      {/* Your content */}
      <ScrollToTopButton 
        threshold={400} 
        showAnimation={true}
      />
    </div>
  );
}
```

### Spinner Component

A versatile loading spinner with multiple animation styles and customization options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `"50px"` | Size of the spinner |
| `color` | string | - | Custom color for the spinner |
| `secondaryColor` | string | - | Color for non-active parts |
| `speed` | string | `"1s"` | Animation speed/duration |
| `thickness` | string | `"4px"` | Border thickness |
| `variant` | string | - | Predefined type or color variant |
| `label` | string | `"Loading"` | Accessible label text |
| `fullscreen` | boolean | `false` | Whether to display fullscreen |
| `overlay` | boolean | `false` | Whether to center over parent |
| `hideText` | boolean | `false` | Whether to hide loading text |

#### Basic Usage

```jsx
import { Spinner } from 'pixelsummit-react-components';

function LoadingState() {
  return (
    <div>
      <h2>Loading Data</h2>
      <Spinner 
        size="60px"
        variant="primary"
      />
    </div>
  );
}
```

#### Spinner Variants

```jsx
// Border spinner (default)
<Spinner />

// Growing spinner
<Spinner variant="spinner-grow" />

// Ripple effect
<Spinner variant="spinner-ripple" />

// Bouncing dots
<Spinner variant="spinner-dots" />

// Color variants
<Spinner variant="primary" />
<Spinner variant="secondary" />
<Spinner variant="success" />
<Spinner variant="danger" />
<Spinner variant="warning" />
<Spinner variant="info" />
<Spinner variant="light" />
<Spinner variant="dark" />
```

### ContentSection Component

A versatile component for displaying content blocks with titles, descriptions, icons, and optional actions.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | - | Section title |
| `description` | string/node | - | Description text or React node |
| `iconName` | string | - | Icon name (automatically resolves to `/icons/{name}.svg`) |
| `imagePath` | string | - | Direct path to image (overrides iconName) |
| `children` | node | - | Additional content to render below description |
| `highlight` | boolean | `false` | Add colored accent to section |
| `align` | string | `'left'` | Text alignment: `'left'`, `'center'`, or `'right'` |
| `maxWidth` | string | - | Custom maximum width (e.g., `'500px'`) |
| `theme` | string | `'light'` | Color theme: `'light'` or `'dark'` |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Additional inline styles |
| `action` | string/node | - | Action button text or custom node |
| `onClick` | function | - | Click handler for the entire section |

#### Basic Usage

```jsx
import { ContentSection } from 'pixelsummit-react-components';

function Features() {
  return (
    <div className="features">
      <ContentSection
        title="Responsive Design"
        description="Layouts that automatically adapt to any device size"
        iconName="responsive"
        highlight={true}
      />
      
      <ContentSection
        title="Modern Architecture"
        description="Built with the latest web technologies and best practices"
        iconName="code"
      />
      
      <ContentSection
        title="Accessibility First"
        description="Designed to be usable by everyone, regardless of ability"
        iconName="accessibility"
        action="Learn More"
        onClick={() => window.location.href = '/accessibility'}
      />
    </div>
  );
}
```

#### Advanced Usage

```jsx
import { ContentSection } from 'pixelsummit-react-components';

function FeatureHighlight() {
  return (
    <ContentSection
      title="Premium Support"
      description={
        <>
          <p>Get priority access to our support team with 24/7 availability.</p>
          <p>Includes dedicated Slack channel and emergency hotline.</p>
        </>
      }
      imagePath="/images/support-team.jpg"
      align="center"
      theme="dark"
      maxWidth="600px"
      action={<a href="/pricing" className="custom-link">View Pricing Plans</a>}
    >
      {/* Additional content that appears after the description */}
      <div className="testimonial">
        <blockquote>"The support team saved our product launch!"</blockquote>
        <cite>- Sarah Johnson, CTO</cite>
      </div>
    </ContentSection>
  );
}
```

### ProfileSection Component

A flexible, modular component for displaying profile information, project sections, or feature highlights in various layouts.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sections` | array | required | Array of section objects containing profile/feature content |
| `layout` | string | `'grid'` | Layout style: `'grid'`, `'list'`, or `'cards'` |
| `highlightColor` | string | - | Accent color for section highlights |
| `animateEntrance` | boolean | `false` | Enable entrance animations for sections |
| `darkMode` | boolean | `false` | Use dark color scheme |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Additional inline styles |

#### Section Object Properties

Each object in the `sections` array supports:

| Property | Type | Description |
|----------|------|-------------|
| `title` | string | Section title (required) |
| `subtitle` | string | Subtitle or description |
| `content` | string/node | Main content text or React node |
| `image` | string | URL to section icon or image |
| `imageAlt` | string | Alt text for the image |
| `skills` | array | Array of skills to display (requires Skills component) |
| `backgroundColor` | string | Custom background color for this section |
| `textColor` | string | Custom text color for this section |
| `link` | object | Optional action link with `url`, `label`, and `external` properties |

#### Basic Usage

```jsx
import { ProfileSection } from 'pixelsummit-react-components';

function AboutMe() {
  const profileSections = [
    {
      title: "About Me",
      image: "/icons/user.svg",
      content: "Frontend developer with 5 years of experience building responsive web applications."
    },
    {
      title: "Technical Skills",
      image: "/icons/code.svg",
      skills: ["React", "JavaScript", "CSS", "HTML", "Node.js"]
    },
    {
      title: "Projects",
      image: "/icons/project.svg",
      content: "Led development of multiple e-commerce applications.",
      link: {
        url: "/projects",
        label: "View Projects"
      }
    }
  ];

  return (
    <ProfileSection 
      sections={profileSections} 
      layout="grid"
      highlightColor="#6200ee"
      animateEntrance={true}
    />
  );
}
```

#### Different Layouts

The component supports three layout options:

```jsx
// Grid layout (default) - great for dashboards
<ProfileSection sections={sections} layout="grid" />

// List layout - best for detailed information
<ProfileSection sections={sections} layout="list" />

// Cards layout - ideal for showcasing projects or features
<ProfileSection sections={sections} layout="cards" />
```

### FormSection Component

A comprehensive, accessible form component with validation, error handling, and customizable fields.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fields` | array | required | Array of field objects (see Field Properties below) |
| `formAction` | string | - | Form submission URL endpoint |
| `title` | string | `'Contact Us'` | Form title |
| `subtitle` | string | - | Optional subtitle or description |
| `submitButtonText` | string | `'Send'` | Text for the submit button |
| `thankYouMessage` | string | `'Thank you...'` | Message shown after successful submission |
| `contactDetails` | string/node | - | Additional contact information |
| `privacyStatement` | string/node | - | Privacy policy or data handling statement |
| `darkMode` | boolean | `false` | Enable dark color scheme |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Additional inline styles |
| `onSubmit` | function | - | Custom submission handler function |
| `loading` | boolean | `false` | Show loading state |
| `errors` | object | - | External validation errors |
| `validate` | function | - | Custom validation function |
| `resetAfterSubmit` | boolean | `false` | Clear form after successful submission |
| `autoComplete` | string | `'on'` | HTML autocomplete attribute |

#### Field Properties

| Property | Type | Description |
|----------|------|-------------|
| `label` | string | Field label (required) |
| `name` | string | Field name attribute (required) |
| `type` | string | Input type: `'text'`, `'email'`, `'textarea'`, `'select'`, etc. (required) |
| `required` | boolean | Whether field is required |
| `placeholder` | string | Placeholder text |
| `helpText` | string | Helper text displayed below the field |
| `options` | array | For `select` fields, array of `{label, value}` objects |
| `min` | string/number | Minimum value for number inputs |
| `max` | string/number | Maximum value for number inputs |
| `maxLength` | number | Maximum character length |
| `pattern` | string | Regular expression pattern for validation |
| `rows` | number | Number of rows for textarea elements |

#### Basic Usage

```jsx
import { FormSection } from 'pixelsummit-react-components';

function ContactPage() {
  const formFields = [
    { 
      label: 'Name', 
      name: 'name', 
      type: 'text', 
      required: true,
      placeholder: 'Your full name'
    },
    { 
      label: 'Email', 
      name: 'email', 
      type: 'email', 
      required: true,
      placeholder: 'your.email@example.com'
    },
    { 
      label: 'Message', 
      name: 'message', 
      type: 'textarea', 
      required: true,
      placeholder: 'How can we help you?',
      rows: 5
    }
  ];

  return (
    <FormSection
      formAction="/api/contact"
      fields={formFields}
      contactDetails="Or reach us directly at: contact@example.com"
      privacyStatement="We respect your privacy and will never share your information."
    />
  );
}
```

#### Advanced Usage

```jsx
import { FormSection } from 'pixelsummit-react-components';
import { useState } from 'react';

function EnquiryForm() {
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  const formFields = [
    { 
      label: 'Full Name', 
      name: 'fullName', 
      type: 'text', 
      required: true
    },
    { 
      label: 'Email Address', 
      name: 'email', 
      type: 'email', 
      required: true,
      helpText: 'We'll never share your email with anyone else.'
    },
    { 
      label: 'Service Required', 
      name: 'service', 
      type: 'select', 
      required: true,
      options: [
        { label: 'Web Development', value: 'web' },
        { label: 'UI/UX Design', value: 'design' },
        { label: 'Consultation', value: 'consultation' }
      ]
    },
    { 
      label: 'Budget Range', 
      name: 'budget', 
      type: 'select',
      options: [
        { label: 'Less than $1,000', value: 'small' },
        { label: '$1,000 - $5,000', value: 'medium' },
        { label: 'More than $5,000', value: 'large' }
      ],
      helpText: 'This helps us tailor our solution to your needs.'
    },
    { 
      label: 'Project Details', 
      name: 'details', 
      type: 'textarea', 
      required: true,
      rows: 6
    }
  ];

  // Custom validation function
  const validateForm = (data) => {
    const errors = {};
    
    if (data.fullName && data.fullName.length < 3) {
      errors.fullName = 'Name must be at least 3 characters';
    }
    
    return errors;
  };
  
  // Custom submission handler
  const handleSubmit = async (data) => {
    setLoading(true);
    
    try {
      // API call
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      
      // Success! Form component will show thank you message
    } catch (error) {
      setFormErrors({
        form: 'There was a problem submitting your enquiry. Please try again.'
      });
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormSection
      title="Request a Quote"
      subtitle="Fill out the form below and we'll get back to you within 24 hours."
      fields={formFields}
      submitButtonText="Submit Request"
      onSubmit={handleSubmit}
      validate={validateForm}
      loading={loading}
      errors={formErrors}
      darkMode={false}
      resetAfterSubmit={true}
      thankYouMessage="Thank you for your enquiry! We'll be in touch shortly with a custom quote."
      privacyStatement={
        <span>
          By submitting this form, you agree to our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a>.
        </span>
      }
    />
  );
}
```


### Footer Component

A flexible footer with support for multi-column layouts, social links, and custom styling.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `companyName` | string | `"Your Company Name"` | Company name for copyright |
| `year` | number | current year | Year for copyright notice |
| `links` | array | - | Simple array of link objects (legacy mode) |
| `columns` | array | - | Multi-column footer layout configuration |
| `logo` | string | - | URL to company logo |
| `socialLinks` | array | - | Array of social media links |
| `darkMode` | boolean | `false` | Whether to use dark styling |
| `showScrollToTop` | boolean | `false` | Whether to show scroll-to-top button |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Additional inline styles |

#### Basic Usage

```jsx
import { Footer } from 'pixelsummit-react-components';

function MyApp() {
  return (
    <Footer
      companyName="PixelSummit"
      year={2025}
    />
  );
}
```

#### With Columns and Social Links

```jsx
import { Footer } from 'pixelsummit-react-components';

function MyApp() {
  const footerColumns = [
    {
      title: "Company",
      links: [
        { label: "About", url: "/about" },
        { label: "Careers", url: "/careers" },
        { label: "Contact", url: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", url: "/privacy" },
        { label: "Terms of Service", url: "/terms" }
      ]
    }
  ];

  const socialLinks = [
    { label: "Twitter", url: "https://twitter.com/example", icon: "🐦" },
    { label: "GitHub", url: "https://github.com/example", icon: "📂" }
  ];

  return (
    <Footer
      companyName="PixelSummit"
      columns={footerColumns}
      socialLinks={socialLinks}
      logo="/logo.svg"
      showScrollToTop={true}
      darkMode={false}
    />
  );
}
```

## Styling Philosophy

I love and believe in the power of thoughtful, clean CSS. My library uses CSS Modules (and no Bootstrap or Tailwind) for component styling, ensuring styles remain scoped and maintainable while avoiding the overhead of CSS-in-JS solutions.

- [CSS Guidelines](./README.CSS_GUIDELINES.md) - My recommendations and practices used in this library

### CSS Reset and Base Font Size

I include a minimal CSS reset to ensure consistent rendering across browsers:

```css
html {
  font-size: 62.5%; /* 1rem = 10px */
  box-sizing: border-box;
}
``` 

or simply:

```css
html {
  font-size: 10px;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}
```

This approach makes scaling and calculating rem units more intuitive. Since the default browser font size is 16px, setting it to 62.5% effectively makes 1rem equal to 10px, simplifying the process of setting dimensions throughout your app. Or to make life even easier (because who can remember 62.5 exactly if you don't use CSS on a daily basis), simply set the html font-size property to 10px. 

### Light and Dark Mode Support

All components support both light and dark modes out of the box:

```css
/* Light Mode (default) */
body {
  background-color: #FAFAFA;
  color: black;
}

/* Dark Mode */
body.dark-mode {
  background-color: #121212;
  color: white;
}
```

### CSS Modules

I use CSS Modules for component styling to avoid naming conflicts and ensure styles are properly scoped:

```jsx
import styles from './Component.module.css';

function Component() {
  return <div className={styles.container}>Content</div>;
}
```

## Accessibility Commitment

Accessibility is a fundamental aspect of the PixelSummit component library. I believe that the web should be inclusive and accessible to everyone, regardless of their abilities or disabilities. Every component is built with accessibility in mind, including:

- Proper semantic HTML structure
- ARIA attributes for enhanced screen reader support
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Support for reduced motion preferences

## Getting Started with React

New to React? Check out my React Getting Started Guide for a step-by-step introduction to creating and deploying React applications with Vite.
- [Getting Started with React](./README.GETTING_STARTED.md) - A beginner's guide to setting up a React project

## License

This component library is open-source and available under the MIT License. You are free to use and modify it as needed for your projects.

---

### The Joy of Building with React

Developing websites and applications with React is not just about writing code—it's a genuinely fun and creative experience. The beauty of React lies in its simplicity once you get the hang of it. Creating interactive UIs becomes almost intuitive. You start seeing the web in components, making it easier to design, develop, and maintain complex applications.

With this library, I want to show you that React is indeed a piece of cake to use once you start applying it. If you're just beginning, remember that the best way to learn React is by doing. Build something, break it, fix it, and improve it.

### Contact

Website: 
<https://pixelsummit.dev/>

Email:
<contact@pixesummit.dev>
