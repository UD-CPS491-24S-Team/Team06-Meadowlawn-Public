let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel img');
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Initialize the carousel to show the first slide and hide others
document.addEventListener('DOMContentLoaded', function() {
    showSlide(slideIndex);
});

// Auto-slide functionality
setInterval(nextSlide, 5000); // Change slide every 5 seconds
