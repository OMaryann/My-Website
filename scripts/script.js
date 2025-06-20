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

        