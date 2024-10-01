let currentIndex = 0;
let isPlaying = false;
let interval;
let currentPage = 1;
const itemsPerPage = 12; // 4 imagens por linha, 3 linhas
const images = [
    'foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg',
    'foto5.jpg', 'foto6.jpg', 'foto7.jpg', 'foto8.jpg',
    'foto9.jpg', 'foto10.jpg', 'foto11.jpg', 'foto12.jpg',
    'foto13.jpg', 'foto14.jpg', 'foto15.jpg', 'foto16.jpg',
    'foto17.jpg', 'foto18.jpg', 'foto19.jpg', 'foto20.jpg',
    'foto21.jpg', 'foto22.jpg', 'foto23.jpg', 'foto24.jpg'
]; // Adicione mais imagens conforme necessário

function openSlideshow(index) {
    currentIndex = index;
    document.getElementById('slideshow-img').src = images[currentIndex];
    document.getElementById('slideshow').classList.add('active');
}

function closeSlideshow() {
    document.getElementById('slideshow').classList.remove('active');
    pauseSlideshow(); // Pausar o slideshow ao fechar
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    document.getElementById('slideshow-img').src = images[currentIndex];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('slideshow-img').src = images[currentIndex];
}

function playSlideshow() {
    interval = setInterval(nextSlide, 2000);
    isPlaying = true;
    document.getElementById('playPause').textContent = '⏸️';
}

function pauseSlideshow() {
    clearInterval(interval);
    isPlaying = false;
    document.getElementById('playPause').textContent = '▶️';
}

document.getElementById('playPause').addEventListener('click', () => {
    if (isPlaying) {
        pauseSlideshow();
    } else {
        playSlideshow();
    }
});

function showPage(page) {
    const galeriaInner = document.getElementById('galeria-inner');
    galeriaInner.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedImages = images.slice(start, end);

    paginatedImages.forEach((image, index) => {
        const col = document.createElement('div');
        col.classList.add('col-3', 'img');
        col.setAttribute('onclick', `openSlideshow(${start + index})`);
        col.innerHTML = `<p>Image ${start + index + 1}</p>`;
        galeriaInner.appendChild(col);
    });

    document.getElementById('pageIndicator').textContent = `Página ${page}`;
    document.getElementById('prevPage').disabled = page === 1;
    document.getElementById('nextPage').disabled = end >= images.length;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    const maxPage = Math.ceil(images.length / itemsPerPage);
    if (currentPage < maxPage) {
        currentPage++;
        showPage(currentPage);
    }
}

showPage(currentPage); // Exibir a primeira página ao carregar
