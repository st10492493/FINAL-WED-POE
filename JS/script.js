// Real-time Clock Function with error handling
function updateClock() {
    try {
        const now = new Date();
        const dateString = now.toLocaleDateString();
        const timeString = now.toLocaleTimeString();
        const clockElement = document.getElementById('real-time-clock');
        if (clockElement) {
            clockElement.textContent = `Current Date: ${dateString} | Current Time: ${timeString}`;
        }
    } catch (error) {
        console.error('Error n clock:', error);
    }
}

// Initialize clock when page loads with error handling
document.addEventListener('DOMContentLoaded', function() {
    try {
        updateClock();
        setInterval(updateClock, 1000); // Update every second
    } catch (error) {
        console.error('Error initializing clock:', error);
    }
});

// Form Validation Functions
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name) && name.length >= 2;
}

function validatePhone(phone) {
    const phoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
    return phoneRegex.test(phone);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateDate(date) {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
}

function validateTime(time) {
    const [hours, minutes] = time.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    const openTime = 8 * 60; // 8:00 AM
    const closeTime = 18 * 60; // 6:00 PM
    return totalMinutes >= openTime && totalMinutes <= closeTime;
}

// Booking Form Submission with error handling
function submitBookingForm(event) {
    try {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const date = form.date.value;
        const time = form.time.value;
        const service = form.service.value;
        const message = form.message.value.trim();

        let isValid = true;
        let errors = [];

        // Validate name
        if (!validateName(name)) {
            document.getElementById('name-error').textContent = 'Please enter a valid name (letters only, at least 2 characters).';
            document.getElementById('name-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('name-error').style.display = 'none';
        }

        // Validate phone
        if (!validatePhone(phone)) {
            document.getElementById('phone-error').textContent = 'Please enter a valid South African phone number.';
            document.getElementById('phone-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('phone-error').style.display = 'none';
        }

        // Validate date
        if (!validateDate(date)) {
            document.getElementById('date-error').textContent = 'Please select a date from today onwards.';
            document.getElementById('date-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('date-error').style.display = 'none';
        }

        // Validate time
        if (!validateTime(time)) {
            document.getElementById('time-error').textContent = 'Please select a time between 8:00 AM and 6:00 PM.';
            document.getElementById('time-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('time-error').style.display = 'none';
        }

        // Validate service
        if (!service) {
            document.getElementById('service-error').textContent = 'Please select a service.';
            document.getElementById('service-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('service-error').style.display = 'none';
        }

        if (isValid) {
            // Simulate form submission
            const feedback = document.getElementById('form-feedback');
            feedback.textContent = 'Appointment booked successfully! We will contact you shortly to confirm.';
            feedback.className = 'feedback-message success';
            feedback.style.display = 'block';

            // Show modal
            const modal = document.getElementById('booking-modal');
            const modalMessage = document.getElementById('modal-message');
            modalMessage.textContent = `Thank you, ${name}! Your ${service} appointment is booked for ${date} at ${time}.`;
            modal.style.display = 'block';

            // Reset form
            form.reset();
        } else {
            const feedback = document.getElementById('form-feedback');
            feedback.textContent = 'Please correct the errors above and try again.';
            feedback.className = 'feedback-message error';
            feedback.style.display = 'block';
        }
    } catch (error) {
        console.error('Error submitting booking form:', error);
        alert('An error occurred while processing your booking. Please try again.');
    }
}

// Real-time validation functions for booking form
function validateBookingName() {
    const name = document.getElementById('name').value.trim();
    const errorElement = document.getElementById('name-error');
    if (!validateName(name)) {
        errorElement.textContent = 'Please enter a valid name (letters only, at least 2 characters).';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function validateBookingPhone() {
    const phone = document.getElementById('phone').value.trim();
    const errorElement = document.getElementById('phone-error');
    if (!validatePhone(phone)) {
        errorElement.textContent = 'Please enter a valid South African phone number.';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function validateBookingDate() {
    const date = document.getElementById('date').value;
    const errorElement = document.getElementById('date-error');
    if (!validateDate(date)) {
        errorElement.textContent = 'Please select a date from today onwards.';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function validateBookingTime() {
    const time = document.getElementById('time').value;
    const errorElement = document.getElementById('time-error');
    if (!validateTime(time)) {
        errorElement.textContent = 'Please select a time between 8:00 AM and 6:00 PM.';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function validateBookingService() {
    const service = document.getElementById('service').value;
    const errorElement = document.getElementById('service-error');
    if (!service) {
        errorElement.textContent = 'Please select a service.';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

// Real-time validation functions for contact form
function validateContactName() {
    const name = document.getElementById('contact-name').value.trim();
    const errorElement = document.getElementById('contact-name-error');
    if (!validateName(name)) {
        errorElement.textContent = 'Please enter a valid name (letters only, at least 2 characters).';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function validateContactEmail() {
    const email = document.getElementById('contact-email').value.trim();
    const errorElement = document.getElementById('contact-email-error');
    if (!validateEmail(email)) {
        errorElement.textContent = 'Please enter a valid email address.';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function validateContactMessage() {
    const message = document.getElementById('contact-message').value.trim();
    const errorElement = document.getElementById('contact-message-error');
    if (message.length < 10) {
        errorElement.textContent = 'Please enter a message with at least 10 characters.';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

// Contact Form Submission with error handling
function submitContactForm(event) {
    try {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        let isValid = true;

        // Validate name
        if (!validateName(name)) {
            document.getElementById('contact-name-error').textContent = 'Please enter a valid name (letters only, at least 2 characters).';
            document.getElementById('contact-name-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('contact-name-error').style.display = 'none';
        }

        // Validate email
        if (!validateEmail(email)) {
            document.getElementById('contact-email-error').textContent = 'Please enter a valid email address.';
            document.getElementById('contact-email-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('contact-email-error').style.display = 'none';
        }

        // Validate message
        if (message.length < 10) {
            document.getElementById('contact-message-error').textContent = 'Please enter a message with at least 10 characters.';
            document.getElementById('contact-message-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('contact-message-error').style.display = 'none';
        }

        if (isValid) {
            // Compile email content
            const subject = 'Contact Inquiry';
            const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
            const mailtoLink = `mailto:info@carwash.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show feedback
            const feedback = document.getElementById('contact-feedback');
            feedback.textContent = 'Your email client is opening with your message. Please send the email to complete the submission.';
            feedback.className = 'feedback-message success';
            feedback.style.display = 'block';

            // Reset form
            form.reset();
        } else {
            const feedback = document.getElementById('contact-feedback');
            feedback.textContent = 'Please correct the errors above.';
            feedback.className = 'feedback-message error';
            feedback.style.display = 'block';
        }
    } catch (error) {
        console.error('Error submitting contact form:', error);
        alert('An error occurred while sending your message. Please try again.');
    }
}

// Modal Functions
function closeModal() {
    document.getElementById('booking-modal').style.display = 'none';
}

// Service Search Function
function filterServices() {
    const input = document.getElementById('service-search');
    const filter = input.value.toLowerCase();
    const services = document.getElementById('services-list');
    const items = services.getElementsByClassName('service-item');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const text = item.textContent || item.innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
}

// Lightbox Functions
function openLightbox(imgSrc, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Add event listeners for lightbox triggers
document.addEventListener('DOMContentLoaded', function() {
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    lightboxTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const imgSrc = this.src;
            const altText = this.alt;
            openLightbox(imgSrc, altText);
        });
    });
});

// Tab Functions
function openTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Accordion Functions (for future use)
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    content.classList.toggle('active');
}

// Add event listeners for accordions and contact form validation
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            toggleAccordion(this);
        });
    });

    // Add real-time validation for booking form
    const bookingNameField = document.getElementById('name');
    const bookingPhoneField = document.getElementById('phone');
    const bookingDateField = document.getElementById('date');
    const bookingTimeField = document.getElementById('time');
    const bookingServiceField = document.getElementById('service');

    if (bookingNameField) {
        bookingNameField.addEventListener('blur', validateBookingName);
    }
    if (bookingPhoneField) {
        bookingPhoneField.addEventListener('blur', validateBookingPhone);
    }
    if (bookingDateField) {
        bookingDateField.addEventListener('blur', validateBookingDate);
    }
    if (bookingTimeField) {
        bookingTimeField.addEventListener('blur', validateBookingTime);
    }
    if (bookingServiceField) {
        bookingServiceField.addEventListener('blur', validateBookingService);
    }

    // Add real-time validation for contact form
    const contactNameField = document.getElementById('contact-name');
    const contactEmailField = document.getElementById('contact-email');
    const contactMessageField = document.getElementById('contact-message');

    if (contactNameField) {
        contactNameField.addEventListener('blur', validateContactName);
    }
    if (contactEmailField) {
        contactEmailField.addEventListener('blur', validateContactEmail);
    }
    if (contactMessageField) {
        contactMessageField.addEventListener('blur', validateContactMessage);
    }
});
