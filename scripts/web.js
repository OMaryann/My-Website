const slideContainer = document.querySelector('.slide-img');
const slides = document.querySelectorAll('.slide-img img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;
const totalSlides = slides.length;
let autoSlideInterval;

// Create dots dynamically
function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateSlide();
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }
}

// Update dots' active class
function updateDots() {
    const dots = dotsContainer.querySelectorAll('span');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function updateSlide() {
    const slideWidth = slides[0].clientWidth;
    slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateDots();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000);
}

window.addEventListener('resize', updateSlide);

// Initialize slider
createDots();
updateSlide();
autoSlideInterval = setInterval(nextSlide, 3000);


// about section slide
const aboutTrack = document.querySelector('.about-slide-track');
const aboutSlides = document.querySelectorAll('.about-slide-track img');
let aboutIndex = 0;

function updateAboutSlide() {
    const slideWidth = aboutSlides[0].clientWidth; // This gets the width (in pixels) of the first image in the slideshow.
    aboutTrack.style.transform = `translateX(-${aboutIndex * slideWidth}px)`; // `translateX(-${aboutIndex * slideWidth}px)`. calculates how far to move the slides to the left. The negative sign (-) moves the track leftward to reveal the correct slide
}

//This line increases the current slide index and wraps it around if it passes the last slide.
function nextAboutSlide() {
    aboutIndex = (aboutIndex + 1) % aboutSlides.length;
    updateAboutSlide();
}

// Autoplay every 3 seconds
setInterval(nextAboutSlide, 3000);

// Recalculate on resize
window.addEventListener('resize', updateAboutSlide);
updateAboutSlide();
