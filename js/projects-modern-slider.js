(function () {
    const slides = document.querySelectorAll('.modern-image'),
        next = document.querySelector('.modern-slider-button-right'),
        prev = document.querySelector('.modern-slider-button-left'),
        slidesWrapper = document.querySelector('.modern-slider'),
        slidesField = document.querySelector('.image-container'),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1,
        offset = 0;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slides.forEach(slide => {
        slide.style.width = width;
    })

    const dots = document.createElement('ol'),
        indicators = [];
    dots.classList.add('slider-indicators');
    slidesWrapper.append(dots);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i === 0) {
            dot.style.opacity = 1;
        }
        dots.append(dot);
        indicators.push(dot);
    }

    next.addEventListener('click', () => {
        if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        indicators.forEach(dot => dot.style.opacity = '.5');
        indicators[slideIndex - 1].style.opacity = 1;

    })

    prev.addEventListener('click', () => {
        if (offset === 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        indicators.forEach(dot => dot.style.opacity = '.5');
        indicators[slideIndex - 1].style.opacity = 1;


    })

})()
