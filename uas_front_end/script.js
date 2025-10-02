const heroSlidesData = [
    { video: 'videos/Gajah_Makan.mp4', judul: 'Gajah Sumatra', subjudul: 'Herbivora Lembut yang Terancam' },
    { video: 'videos/lumba_lumba.mp4', judul: 'Lumba-Lumba', subjudul: 'Kecerdasan di Kedalaman Biru' },
    { video: 'videos/placeholder.mp4', judul: 'Video Berikutnya', subjudul: 'Jelajahi Keajaiban Lainnya' }
];

function scrollToCarousel() {
    const carouselWrapper = document.getElementById('animal-container-wrapper');
    const offsetPosition = carouselWrapper.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}

document.addEventListener('DOMContentLoaded', () => {
    const animalContainer = document.getElementById('animal-container');
    const modal = document.getElementById('detail-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = modal.querySelector('.close-btn');
    const createModal = document.getElementById('create-modal');
    const editModal = document.getElementById('edit-modal');
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const scrollBottomBtn = document.getElementById("scrollBottomBtn");
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const heroSliderContainer = document.getElementById('hero-slider-container');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroPrevBtn = document.getElementById('hero-prev-btn');
    const heroNextBtn = document.getElementById('hero-next-btn');

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let currentIndex = 0;
    let currentlyDisplayedAnimals = [];
    let currentHeroIndex = 0;
    const itemsPerPage = 4;

    function createHeroSlides() {
        heroSlidesData.forEach(slideData => {
            const videoEl = document.createElement('video');
            videoEl.className = 'hero-video-slide';
            videoEl.muted = true;
            videoEl.loop = true;
            videoEl.playsInline = true;
            videoEl.autoplay = false;
            const sourceEl = document.createElement('source');
            sourceEl.src = slideData.video;
            sourceEl.type = 'video/mp4';
            videoEl.appendChild(sourceEl);
            heroSliderContainer.appendChild(videoEl);
        });
    }

    function showHeroSlide(index) {
        const slides = document.querySelectorAll('.hero-video-slide');
        const currentActiveSlide = document.querySelector('.hero-video-slide.active');
        if (currentActiveSlide) {
            currentActiveSlide.classList.remove('active');
            currentActiveSlide.pause();
        }
        const newActiveSlide = slides[index];
        newActiveSlide.classList.add('active');
        newActiveSlide.play().catch(error => {
            console.error("Video play failed:", error);
        });
        heroTitle.textContent = heroSlidesData[index].judul;
        heroSubtitle.textContent = heroSlidesData[index].subjudul;
        currentHeroIndex = index;
    }

    function nextHeroSlide() {
        showHeroSlide((currentHeroIndex + 1) % heroSlidesData.length);
    }

    function prevHeroSlide() {
        showHeroSlide((currentHeroIndex - 1 + heroSlidesData.length) % heroSlidesData.length);
    }

    function displayCarouselItems(animalArray) {
        animalContainer.innerHTML = '';
        if (animalArray.length === 0) {
            animalContainer.innerHTML = '<p class="not-found">Data tidak ditemukan.</p>';
            return;
        }
        const track = document.createElement('div');
        track.className = 'carousel-track';
        animalArray.forEach(hewan => {
            const card = document.createElement('div');
            card.className = 'carousel-item';
            const uniqueId = hewan.namaIlmiah || `${hewan.nama}-${dataHewan.indexOf(hewan)}`;
            card.dataset.id = uniqueId;
            card.innerHTML = `
                <div class="image-wrapper">
                    <img src="${hewan.gambar || ''}" alt="${hewan.nama || ''}" onerror="this.parentElement.style.display='none'">
                </div>
                <div class="card-content">
                    <h3>${hewan.nama || ''}</h3>
                    <p>${(hewan.deskripsi || '').substring(0, 70)}...</p>
                </div>
            `;
            track.appendChild(card);
        });
        animalContainer.appendChild(track);
        updateCarouselPosition();
    }
    
    function updateCarouselPosition() {
        const track = document.querySelector('.carousel-track');
        if (!track) return;
        const totalItemWidthPercentage = 25.5;
        const offset = -currentIndex * totalItemWidthPercentage;
        track.style.transform = `translateX(${offset}%)`;
    }

    function showNextItem() {
        if (currentlyDisplayedAnimals.length <= itemsPerPage) return;
        currentIndex++;
        if (currentIndex > currentlyDisplayedAnimals.length - itemsPerPage) {
            currentIndex = 0;
        }
        updateCarouselPosition();
    }

    function showPrevItem() {
        if (currentlyDisplayedAnimals.length <= itemsPerPage) return;
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = currentlyDisplayedAnimals.length - itemsPerPage;
        }
        updateCarouselPosition();
    }

    function loadAllAnimals() {
        currentlyDisplayedAnimals = [...dataHewan];
        currentIndex = 0; 
        displayCarouselItems(currentlyDisplayedAnimals);
    }
    
    function openModal(hewan) {
        const randomAnimals = dataHewan.filter(h => h.namaIlmiah !== hewan.namaIlmiah).sort(() => 0.5 - Math.random()).slice(0, 3);
        modalBody.innerHTML = `
            <img src="${hewan.gambar || 'images/placeholder.png'}" alt="${hewan.nama || ''}">
            <h2>${hewan.nama || 'N/A'}</h2>
            <p class="nama-ilmiah">${hewan.namaIlmiah || 'N/A'}</p>
            <p>${hewan.deskripsi || 'N/A'}</p>
            <div class="detail-grid">
                <div class="detail-item"><h4>Status</h4><p>${hewan.statusKonservasi || 'N/A'}</p></div>
                <div class="detail-item"><h4>Populasi</h4><p>${hewan.populasi || 'N/A'} (${hewan.tahunPencatatan || 'N/A'})</p></div>
                <div class="detail-item"><h4>Makanan</h4><p>${hewan.tipeMakanan || 'N/A'}</p></div>
                <div class="detail-item"><h4>Kearifan Lokal</h4><p>${hewan.hubunganMasyarakat || 'N/A'}</p></div>
            </div>
            <div class="random-animals"><h3>Lihat Juga</h3><div class="random-grid">
            ${randomAnimals.map(rand => `<div class="random-card" data-id="${rand.namaIlmiah}"><img src="${rand.gambar}" alt="${rand.nama}"><p>${rand.nama}</p></div>`).join('')}
            </div></div>
        `;
        modal.style.display = 'flex';
    }

    createHeroSlides();
    showHeroSlide(0);
    setInterval(nextHeroSlide, 7000); 
    loadAllAnimals();
    setInterval(showNextItem, 4000);

    heroPrevBtn.addEventListener('click', prevHeroSlide);
    heroNextBtn.addEventListener('click', nextHeroSlide);
    prevBtn.addEventListener('click', showPrevItem);
    nextBtn.addEventListener('click', showNextItem);
    
    animalContainer.addEventListener('click', e => {
        const card = e.target.closest('.carousel-item');
        if (!card) return;
        const animalId = card.dataset.id;
        const hewan = dataHewan.find(h => (h.namaIlmiah || `${h.nama}-${dataHewan.indexOf(h)}`) === animalId);
        if (hewan) openModal(hewan);
    });

    closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
    scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    scrollBottomBtn.addEventListener("click", () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }));
});