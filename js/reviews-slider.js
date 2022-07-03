(function () {
    const slides = document.querySelectorAll(".reviews-card");

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
    });

    let curSlide = 0;
    const nextSlide = document.querySelector(".btn-next");
    let maxSlide = slides.length - 1;
    nextSlide.addEventListener("click", function () {
        curSlide = curSlide >= maxSlide ? 0 : curSlide + 1;
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });

    const prevSlide = document.querySelector(".btn-prev");
    prevSlide.addEventListener("click", function () {
        curSlide = curSlide - 1 < 0 ? maxSlide : curSlide - 1;
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });
})();