# Project Guide: Novus Inc Website

This guide provides instructions on how to manage and customize the Novus Inc website.

## Project Overview

This project is a one-page responsive website for Novus Inc, a digital agency. It's built using HTML, CSS, and JavaScript, with the Bootstrap framework providing the foundation for the layout and styling.

The website consists of the following sections:

*   **Home:** The main landing page with a hero section, services overview, and project highlights.
*   **About:** Information about the company, its skills, and team members.
*   **Service:** A detailed list of the services offered.
*   **Project:** A portfolio of completed projects.
*   **Contact:** A contact form and contact information.

## File Structure

Here's a breakdown of the important files and directories in the project:

```
.
├── css/
│   ├── bootstrap.min.css  // Bootstrap framework styles
│   ├── style.css          // Main stylesheet for the website
│   └── dark-theme.css     // Styles for the dark theme
├── img/                   // All images used in the website
├── js/
│   └── main.js            // Main JavaScript file for interactivity
├── lib/                   // Third-party JavaScript libraries
├── scss/                  // SCSS files for advanced styling (optional)
├── index.html             // The main HTML file for the website
├── about.html             // HTML for the About page
├── service.html           // HTML for the Service page
├── project.html           // HTML for the Project page
├── contact.html           // HTML for the Contact page
└── PROJECT_GUIDE.md       // This guide
```

## Customization

### Content

All the text and content of the website are located in the `.html` files. To change any text, open the corresponding `.html` file and edit the content directly.

For example, to change the main headline on the homepage, open `index.html` and find the following line:

```html
<h1 class="text-white mb-4 animated slideInDown">Novus Inc - Ideas Into Reality</h1>
```

Replace the text with your desired headline.

To change an image, find the `<img>` tag with the image you want to replace and change the `src` attribute to the path of your new image. Make sure to place your new images in the `img/` directory.

### Styling

The main stylesheet for the website is `css/style.css`. You can modify this file to change the website's appearance.

#### Colors

The primary and secondary colors of the website are defined as CSS variables at the top of `css/style.css`:

```css
:root {
    --primary: #00BCD4; /* Cyan blue */
    --secondary: #FBA504;
}
```

To change the color scheme, simply replace the hex codes with your desired colors.

#### Fonts

The website uses the "Heebo" and "Jost" fonts from Google Fonts. You can change the fonts by editing the `<link>` tags in the `<head>` section of each `.html` file.

### Navigation

The navigation bar is defined in each `.html` file. To add, remove, or modify a navigation link, you'll need to edit the `<nav>` section in each file.

Here's an example of a navigation link:

```html
<a href="index.html" class="nav-item nav-link active">Home</a>
```

*   `href`: The URL of the page to link to.
*   `active`: This class is applied to the current page's link.

## Contact Form

The contact form is located in `contact.html`. The form submission is not handled by default in this template. You will need to add a backend script or use a third-party service to process the form data and send it to your email address.

## Dependencies

The website uses several third-party libraries, which are located in the `lib/` directory:

*   **jQuery:** A fast, small, and feature-rich JavaScript library.
*   **Bootstrap:** A popular CSS framework for building responsive, mobile-first websites.
*   **Animate.css:** A library of CSS animations.
*   **WOW.js:** A library for revealing animations on scroll.
*   **Easing.js:** A library for advanced easing effects.
*   **Waypoints.js:** A library to trigger functions when you scroll to an element.
*   **Counter-Up:** A jQuery plugin to animate numbers.
*   **Owl Carousel:** A jQuery plugin for creating carousels.
*   **Isotope:** A jQuery plugin for filtering and sorting layouts.
*   **Lightbox:** A library for creating image lightboxes.

These libraries are already included in the project, so you don't need to install them separately.

## Deployment

To deploy the website, you can simply upload all the files and folders to your web server. No special build process is required.
