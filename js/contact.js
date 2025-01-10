window.onload = function () {
    // Initialize EmailJS with your public key
    emailjs.init({
        publicKey: "PQc3cO39wTVPLYkz5", // Replace with your actual public key
    });

    const contactForm = document.getElementById('contact-form-inner');
    const submitButton = document.getElementById('the-submit-button');
    let isSubmitting = false; // Flag to track submission status

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Prevent double submissions
        if (isSubmitting) return;
        isSubmitting = true;

        // Disable button to prevent further clicks
        submitButton.disabled = true;
        submitButton.innerText = "Sending...";

        // Send the form using EmailJS
        emailjs
            .sendForm('service_07neuaw', 'template_ve0sv1y', this)
            .then(() => {
                alert('Message sent successfully!'); // Success feedback to user
                isSubmitting = false; // Reset flag
                submitButton.disabled = false; // Re-enable button
                submitButton.innerText = "Submit"; // Restore button text
            })
            .catch((error) => {
                console.error('FAILED...', error); // Log error to console
                alert('Failed to send the message. Please try again later.'); // Failure feedback to user
                isSubmitting = false; // Reset flag
                submitButton.disabled = false; // Re-enable button
                submitButton.innerText = "Submit"; // Restore button text
            });
    });
};

// code powers the emailJS message sending to my outlook and an auto reply to the original user.
// also prevents double clicking the submit button. 