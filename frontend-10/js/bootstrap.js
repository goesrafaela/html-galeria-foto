
let pageIndex = 0;

function _showSlide(index) {
    const slides = document.querySelectorAll('.galeria-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        pageIndex = 0;
    } else if (index < 0) {
        pageIndex = totalSlides - 1;
    } else {
        pageIndex = index;
    }

    const offset = -pageIndex * 100;
    document.querySelector('.galeria-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    _showSlide(pageIndex + 1);
}

function prevSlide() {
    _showSlide(pageIndex - 1);
}

function showSlide(index) {
    _showSlide(index-1);
}

function openSlideshow(src) {
    //document.getElementById('slideshow-img').src = src;
    document.getElementById('slideshow').style.display = 'block';
}

function closeSlideshow() {
    document.getElementById('slideshow').style.display = 'none';
}