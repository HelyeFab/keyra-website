document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navToggle.contains(event.target) || navLinks.contains(event.target);
        
        if (!isClickInside && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });
});
