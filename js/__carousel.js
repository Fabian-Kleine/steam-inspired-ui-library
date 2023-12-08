function carouselInit(id) {
    const carousel = document.getElementById(id);
    const slides = carousel.querySelectorAll('.carousel-slide');
    slides.forEach((slide, i) => {
        if(i == 0) {
            slide.classList.add('visible')
            carousel.style.height = slide.offsetHeight + "px";
        } else {
            slide.classList.add('hidden')
        }
    })
}

function carousel(id, direction) {
    const carousel = document.getElementById(id);
    const slides = carousel.querySelectorAll('.carousel-slide');
    let active = Array.from(slides).indexOf(carousel.querySelector('.visible'));
    if (active == 0 && direction == "previous") return;
    if (active+1 == slides.length && direction == "next") return;
    slides.forEach((slide, i) => {
        if (direction == "previous" && i == active - 1) {
            slide.classList.add('visible');
            slide.classList.remove('hidden');
            carousel.style.height = slide.offsetHeight + "px";
        } else if (direction == "next" && i == active + 1) {
            slide.classList.add('visible');
            slide.classList.remove('hidden');
            carousel.style.height = slide.offsetHeight + "px";
        } else if (i == active) {
            slide.classList.add('hidden');
            slide.classList.remove('visible');
        }
    });
}