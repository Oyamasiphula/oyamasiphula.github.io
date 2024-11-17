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
