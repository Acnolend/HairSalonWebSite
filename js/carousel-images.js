const images = [
    'carrusel/imagen1.jpg',
    'carrusel/imagen2.jpg',
    'carrusel/imagen3.jpg',
    'carrusel/imagen4.jpg'
];

let currentIndex = 0;
const carouselImages = document.getElementsByClassName('main__img--div');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function showImage() {
    carouselImages[0].src = images[currentIndex];
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

showImage();
