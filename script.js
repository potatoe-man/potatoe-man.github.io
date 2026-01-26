let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Wrap around if index is out of bounds
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('show');
        if (i === currentSlide) {
            slide.classList.add('show');
        }
    });
}

// Change slide based on direction
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the slideshow
showSlide(currentSlide);
