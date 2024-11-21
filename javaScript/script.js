// Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Collect form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Example: Simulate sending data to EmailJS or backend
      console.log('Form submitted with:', { name, email, subject, message });

      // Clear the form fields
      document.getElementById('contactForm').reset();

      // Optionally, show a success message
      alert('Thank you for your message. The form has been submitted!');
    });

// Get the button element
  const goToTopBtn = document.getElementById('goToTopBtn');

  // When the user scrolls down 300px from the top of the document, show the button
  window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      goToTopBtn.classList.add('show'); // Show the button
    } else {
      goToTopBtn.classList.remove('show'); // Hide the button
    }
  };

  // When the user clicks the button, scroll to the top of the document
  goToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  });
