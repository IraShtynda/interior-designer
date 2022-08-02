(function () {

    const slides = [
        `<div class="modern-image">
            <img
                src="img/projects/modern_1.jpeg"
                alt="Modern Home"
            >
        </div>`,
        `<div class="modern-image">
            <img
                src="img/projects/modern_2.jpeg"
                alt="Modern Home"
            >
        </div>`,
        `<div class="modern-image">
                <img
                    src="img/projects/modern_3.jpeg"
                    alt="Modern Home"
                >
        </div>`,
        `<div class="modern-image">
            <img
                src="img/projects/modern_4.jpeg" 
                alt="Modern Home"
            >
        </div>`
    ]

    let slideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.image-container');
        slideContainer.innerHTML = slides[slideIdx];
    }

    function nextSlide() {
        slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        showCurrentSlide();
    }

    function prevSlide() {
        slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    const nextButton = document.querySelector('.modern-slider-button-right');
    nextButton.addEventListener('click', nextSlide);
    const prevButton = document.querySelector('.modern-slider-button-left');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', showCurrentSlide);
})()
