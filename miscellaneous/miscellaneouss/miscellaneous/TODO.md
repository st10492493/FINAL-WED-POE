## Project: Car Wash Website  
*Author:* Liezel Rammela  
*Last Updated:* 24 September 2025  



## 1. Fix HTML & Content Issues
- [ ] Correct malformed HTML tags (e.g., </l> → </li> in index.html).
- [ ] Add missing < before section class="contact-section" in contact.html.
- [ ] Remove duplicate <!DOCTYPE html> declarations from all pages.
- [ ] Standardize file names (use lowercase, no spaces):  
  - Book appointment.html → appointments.html  
  - Book appointments.html → appointments.html
- [ ] Ensure consistent navigation links across all pages (use correct relative paths).
- [ ] Verify that all images are stored under /assets/ and load correctly.


## 2. Improve UX and Design
- [ ] Add a main <nav> with .nav-links class to make navigation consistent.
- [ ] Replace <br> tags with proper CSS spacing (use margin or padding).
- [ ] Create a .btn class in styles.css for consistent button styling.
- [ ] Center the booking form and style it with a card layout.
- [ ] Show a success message inline on the booking page instead of using alert().



## 3. Mobile Responsiveness
- [ ] Test website layout on screens smaller than 768px.
- [ ] Add a hamburger menu for navigation on mobile.
- [ ] Make all images responsive with max-width: 100%; height: auto;.
- [ ] Make Google Maps iframe responsive using a wrapper div and CSS.


## 4. Accessibility & SEO
- [ ] Add descriptive alt text to all images.
- [ ] Make sure all form labels use the for attribute correctly.
- [ ] Wrap main page content in <main> tags for screen readers.
- [ ] Add proper <title> and <meta name="description"> for all pages.
- [ ] Ensure color contrast meets accessibility standards.



## 5. Styling & Branding
- [ ] Add a consistent color palette in styles.css.
- [ ] Use a Google Font (e.g., Roboto) across all pages.
- [ ] Style footer with centered text and optional social icons.
- [ ] Add hover effects for links and buttons.



## 6. Future Enhancements
- [ ] Add backend (PHP or Node.js) to save appointments to a database.
- [ ] Send an email confirmation when a booking is made.
- [ ] Add testimonials or customer reviews section.
- [ ] Display service prices and package options.
- [ ] Add social media links in footer (use Font Awesome icons).
- [ ] Optimize images for faster loading (use .webp format).
- [ ] Add favicon and company logo.



## 7. Testing Checklist
- [ ] Validate all HTML using [W3C Validator](https://validator.w3.org/).
- [ ] Test all links to ensure there are no broken paths.
- [ ] Test website on desktop, tablet, and mobile browsers.
- [ ] Test booking form with valid and invalid input.
- [ ] Check performance using Lighthouse in Chrome DevTools.


## 8. Changelog Reminder
- *Next Version (v1.2.0)* should include:
  - Cleaned HTML and fixed navigation.
  - Styled booking form with inline confirmation message.
  - Responsive Google Map and images.
  - Basic accessibility improvements.

 