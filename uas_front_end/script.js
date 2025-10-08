const heroSlidesData = [
    { video: 'videos/Gajah_Makan.mp4', judul: 'Ensiklopedia Hewan Langka Nusantara', subjudul: 'Jelajahi Fauna Alam Nusantara' }, 
    { video: 'videos/lumba_lumba.mp4', judul: 'Ensiklopedia Hewan Langka Nusantara', subjudul: 'Jelajahi Fauna Alam Nusantara' }, 
    { video: 'videos/Burung.mp4', judul: 'Ensiklopedia Hewan Langka Nusantara', subjudul: 'Jelajahi Fauna Alam Nusantara' }
];

function getAnimalUniqueId(hewan) {
    return hewan.namaIlmiah || `${hewan.nama}-${dataHewan.indexOf(hewan)}`;
}

function getFavorites() {
    const favorites = localStorage.getItem('animalFavorites');
    return favorites ? JSON.parse(favorites) : {};
}

function saveFavorites(favorites) {
    localStorage.setItem('animalFavorites', JSON.stringify(favorites));
    updateFavoriteCount();
}

function isFavorite(animalId) {
    const favorites = getFavorites();
    return !!favorites[animalId];
}

function toggleFavorite(animalId) {
    const favorites = getFavorites();
    const isCurrentlyFavorite = isFavorite(animalId);
    
    if (isCurrentlyFavorite) {
        delete favorites[animalId];
    } else {
        favorites[animalId] = true;
    }
    
    saveFavorites(favorites);
    return !isCurrentlyFavorite;
}

function updateFavoriteCount() {
    const count = Object.keys(getFavorites()).length;
    const btn = document.getElementById('view-favorites-btn');
    if (btn) {
        btn.textContent = `Lihat Favorit Anda (${count})`;
        btn.onclick = () => {
            currentFilteredLocation = 'Favorit';
            renderLocationAnimals('Favorit');
        };
    }
}

function createStatusBadge(status) {
    let className = 'status-badge';
    let text = status || 'N/A';
    
    switch (status) {
        case 'Kritis':
            className += ' critical';
            break;
        case 'Terancam':
            className += ' endangered';
            break;
        case 'Rentan':
            className += ' vulnerable';
            break;
        case 'Hampir Terancam':
            className += ' near-threatened';
            break;
        default:
            className += ' unknown';
            break;
    }
    
    return `<span class="${className}">${text}</span>`;
}

function scrollToCarousel() {
    const carouselWrapper = document.getElementById('animal-container-wrapper');
    const offsetPosition = carouselWrapper.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}

function scrollToAboutSection() {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
        const offsetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);

    const animalContainer = document.getElementById('animal-container'); 
    const modal = document.getElementById('detail-modal');
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const scrollBottomBtn = document.getElementById("scrollBottomBtn");
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');    
    const heroSliderContainer = document.getElementById('hero-slider-container');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroPrevBtn = document.getElementById('hero-prev-btn');
    const heroNextBtn = document.getElementById('hero-next-btn');
    const quizQuestion = document.getElementById('quiz-question');
    const quizExtraHints = document.getElementById('quiz-extra-hints');
    const quizAnswerContainer = document.getElementById('quiz-answer');
    const quizAnswerInput = document.getElementById('quiz-answer-input');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizSubmitBtn = document.getElementById('quiz-submit-btn');
    const quizHintBtn = document.getElementById('quiz-hint-btn');
    const quizShowAnswerBtn = document.getElementById('quiz-show-answer-btn');
    const quizNextBtn = document.getElementById('quiz-next-btn');
    const mainContent = document.getElementById('main-content');
    const locationListPage = document.getElementById('location-list-page');
    const locationListTitle = document.getElementById('location-list-title');
    const locationAnimalList = document.getElementById('location-animal-list');
    const backToHomeBtn = document.getElementById('back-to-home-btn');
    const filterNameInput = document.getElementById('filter-name');
    const filterTipeMakanan = document.getElementById('filter-tipe-makanan');
    const filterLokasi = document.getElementById('filter-lokasi'); 
    const filterPopulasi = document.getElementById('filter-populasi');
    const filterFavorite = document.getElementById('filter-favorite');
    const resetFilterBtn = document.getElementById('reset-filter-btn');
    const viewAllLocationsBtn = document.getElementById('view-all-locations-btn'); 
    const scrollToContentBtn = document.getElementById('scroll-to-content-btn'); 
    const addAnimalBtn = document.getElementById('add-animal-btn');
    const addAnimalModal = document.getElementById('add-animal-modal');
    const addAnimalForm = document.getElementById('add-animal-form');
    const closeAddAnimalModalBtn = addAnimalModal.querySelector('.close-btn');
    const scrollBtnContainer = document.querySelector('.scroll-buttons'); 
    
    let currentFilteredLocation = ''; 
    let currentEditingAnimal = null;

    let currentIndex = 0;
    let currentlyDisplayedAnimals = [];
    let currentHeroIndex = 0;
    const itemsPerPage = 4; 
    let currentQuizAnimal = null;
    let revealedIndexes = [];
    let usedHintTypes = [];

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
        
        newActiveSlide.play().catch(error => {}); 
        heroTitle.textContent = heroSlidesData[index].judul;
        heroSubtitle.textContent = heroSlidesData[index].subjudul;
        currentHeroIndex = index;
    }

    function nextHeroSlide() { showHeroSlide((currentHeroIndex + 1) % heroSlidesData.length); }
    function prevHeroSlide() { showHeroSlide((currentHeroIndex - 1 + heroSlidesData.length) % heroSlidesData.length); }

    function displayCarouselItems(animalArray) {
        animalContainer.innerHTML = '';
        if (animalArray.length === 0) { animalContainer.innerHTML = '<p class="not-found">Data tidak ditemukan.</p>'; return; }
        const track = document.createElement('div');
        track.className = 'carousel-track';
        animalArray.forEach(hewan => {
            const uniqueId = getAnimalUniqueId(hewan);
            let isFav = isFavorite(uniqueId);
            
            const card = document.createElement('div');
            card.className = 'carousel-item';
            card.dataset.id = uniqueId;

            const imageWrapper = document.createElement('div');
            imageWrapper.className = 'image-wrapper';
            const img = document.createElement('img');
            img.src = hewan.gambar || '';
            img.alt = hewan.nama || '';
            img.onerror = () => {
                imageWrapper.style.display = 'none'; 
            };
            imageWrapper.appendChild(img);

            const favBtn = document.createElement('button');
            favBtn.className = `favorite-btn carousel-card-favorite-btn-in-list ${isFav ? 'is-favorite' : ''}`;
            favBtn.dataset.id = uniqueId;
            favBtn.innerHTML = `
                <span class="material-icons star-icon">${isFav ? 'star' : 'star_border'}</span>
                <span class="favorite-tooltip">${isFav ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}</span>
            `;
            
            favBtn.onclick = (e) => {
                e.stopPropagation(); 
                const newStatus = toggleFavorite(uniqueId);
                isFav = newStatus; 
                favBtn.classList.toggle('is-favorite', newStatus);
                favBtn.querySelector('.star-icon').textContent = newStatus ? 'star' : 'star_border';
                favBtn.querySelector('.favorite-tooltip').textContent = newStatus ? 'Hapus dari Favorit' : 'Tambah ke Favorit';
                updateFavoriteCount();
            };

            const cardContent = document.createElement('div');
            cardContent.className = 'card-content';
            
            const titleContainer = document.createElement('div');
            titleContainer.style.display = 'flex';
            titleContainer.style.alignItems = 'center';
            titleContainer.style.gap = '5px'; 
            titleContainer.style.marginBottom = '0.5rem';
            
            const h3 = document.createElement('h3');
            h3.textContent = hewan.nama || '';
            h3.style.margin = '0';
            
            titleContainer.appendChild(h3);
            titleContainer.appendChild(favBtn); 

            const pDeskripsi = document.createElement('p');
            pDeskripsi.textContent = `${(hewan.deskripsi || '').substring(0, 70)}...`;
            
            const badgeContainer = document.createElement('div');
            badgeContainer.className = 'badge-row';
            badgeContainer.innerHTML = `
                ${createStatusBadge(hewan.statusKonservasi)}
                <span class="status-badge location">${Array.isArray(hewan.lokasi) ? hewan.lokasi.join(', ') : hewan.lokasi || 'N/A'}</span>
            `;

            cardContent.appendChild(titleContainer); 
            cardContent.appendChild(pDeskripsi);
            cardContent.appendChild(badgeContainer);
            
            card.appendChild(imageWrapper);
            card.appendChild(cardContent);
            track.appendChild(card);
        });
        animalContainer.appendChild(track);
        updateCarouselPosition();
    }
    
    function updateCarouselPosition() {
        const track = document.querySelector('.carousel-track');
        if (!track) return;
        
        track.style.transform = `translateX(${-currentIndex * 25.5}%)`; 
    }

    function showNextItem() {
        if (currentlyDisplayedAnimals.length <= itemsPerPage) return;
        currentIndex++;
        if (currentIndex > currentlyDisplayedAnimals.length - itemsPerPage) { currentIndex = 0; }
        updateCarouselPosition();
    }

    function showPrevItem() {
        if (currentlyDisplayedAnimals.length <= itemsPerPage) return;
        currentIndex--;
        if (currentIndex < 0) { currentIndex = currentlyDisplayedAnimals.length - itemsPerPage; }
        updateCarouselPosition();
    }

    function loadAllAnimals() {
        currentlyDisplayedAnimals = [...dataHewan];
        currentIndex = 0; 
        displayCarouselItems(currentlyDisplayedAnimals);
        updateFavoriteCount();
    }

    function renderAnswerPlaceholders() {
        const answer = currentQuizAnimal.nama;
        quizAnswerContainer.innerHTML = '';
        for (let i = 0; i < answer.length; i++) {
            const char = answer[i];
            const charBox = document.createElement('span');
            if (char === ' ') {
                charBox.className = 'letter-space';
            } else {
                charBox.className = 'letter-box';
                if (revealedIndexes.includes(i)) {
                    charBox.textContent = char;
                }
            }
            quizAnswerContainer.appendChild(charBox);
        }
    }

    function generateQuestion() {
        currentQuizAnimal = dataHewan[Math.floor(Math.random() * dataHewan.length)];
        revealedIndexes = [];
        usedHintTypes = [];
        quizQuestion.innerHTML = currentQuizAnimal.deskripsi;
        quizAnswerInput.value = '';
        quizFeedback.textContent = '';
        quizFeedback.className = '';
        quizExtraHints.innerHTML = '';
        quizNextBtn.classList.add('hidden');
        quizSubmitBtn.classList.remove('hidden');
        quizHintBtn.classList.remove('hidden');
        quizShowAnswerBtn.classList.remove('hidden');
        quizHintBtn.disabled = false;
        renderAnswerPlaceholders();
        quizAnswerInput.focus();
    }

    function revealRandomLetter() {
        const answer = currentQuizAnimal.nama;
        const unrevealedIndexes = [];
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] !== ' ' && !revealedIndexes.includes(i)) {
                unrevealedIndexes.push(i);
            }
        }

        if (unrevealedIndexes.length > 0) {
            const randomIndex = unrevealedIndexes[Math.floor(Math.random() * unrevealedIndexes.length)];
            revealedIndexes.push(randomIndex);
            renderAnswerPlaceholders();
        } else {
            showAnswer();
        }
    }
    
    function showNextHint() {
        const hintPool = ['namaIlmiah', 'kebiasaanUnik', 'lokasi', 'tipeMakanan'];
        const availableHints = hintPool.filter(type => !usedHintTypes.includes(type) && currentQuizAnimal[type]);

        if (availableHints.length === 0) {
            quizHintBtn.disabled = true;
            return;
        }

        const randomHintType = availableHints[Math.floor(Math.random() * availableHints.length)];
        usedHintTypes.push(randomHintType);

        const hintText = currentQuizAnimal[randomHintType];
        const hintLabel = { namaIlmiah: 'Nama Ilmiah', kebiasaanUnik: 'Kebiasaan Unik', lokasi: 'Habitat', tipeMakanan: 'Tipe Makanan' }[randomHintType];
        
        const hintEl = document.createElement('p');
        hintEl.innerHTML = `<strong>${hintLabel}:</strong> ${hintText}`;
        quizExtraHints.appendChild(hintEl);
        
        if(availableHints.length - 1 === 0) {
            quizHintBtn.disabled = true;
        }
    }

    function checkAnswer() {
        const userAnswer = quizAnswerInput.value.trim().toLowerCase();
        const correctAnswer = currentQuizAnimal.nama.toLowerCase();
        if (userAnswer === correctAnswer) {
            revealedIndexes = [...Array(correctAnswer.length).keys()];
            renderAnswerPlaceholders();
            quizFeedback.textContent = 'Benar!';
            quizFeedback.className = 'correct';
            quizSubmitBtn.classList.add('hidden');
            quizShowAnswerBtn.classList.add('hidden');
            quizHintBtn.classList.add('hidden');
            quizNextBtn.classList.remove('hidden');
        } else {
            quizFeedback.textContent = 'Kurang tepat, satu huruf terbuka!';
            quizFeedback.className = 'incorrect';
            revealRandomLetter();
        }
    }
    
    function showAnswer() {
        revealedIndexes = [...Array(currentQuizAnimal.nama.length).keys()];
        renderAnswerPlaceholders();
        quizFeedback.textContent = `Jawabannya adalah ${currentQuizAnimal.nama}.`;
        quizFeedback.className = '';
        quizSubmitBtn.classList.add('hidden');
        quizShowAnswerBtn.classList.add('hidden');
        quizHintBtn.classList.add('hidden');
        quizNextBtn.classList.remove('hidden');
    }

    function openModal(hewan) {
        const modalContentWrapper = document.getElementById('modal-content-wrapper');
        const randomAnimals = dataHewan.filter(h => h.namaIlmiah !== hewan.namaIlmiah).sort(() => 0.5 - Math.random()).slice(0, 6);
        const uniqueId = getAnimalUniqueId(hewan);

        const getStatusClass = (status) => {
            switch (status) {
                case 'Kritis': return 'text-red-500';
                case 'Terancam': return 'text-orange-500';
                case 'Rentan': return 'text-yellow-500';
                case 'Hampir Terancam': return 'text-blue-400';
                default: return 'text-gray-500';
            }
        };

        modalContentWrapper.innerHTML = `
            <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-lg overflow-hidden">
                <header class="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                    <div class="relative">
                        <button id="modal-menu-btn-new" class="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-text-dark">
                            <span class="material-icons">more_vert</span>
                        </button>
                        <div id="dropdown-menu-new" class="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 hidden">
                            <button id="dropdown-edit-btn" class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                                <span class="material-icons mr-2">edit</span> Edit
                            </button>
                            <button id="dropdown-delete-btn" class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                                <span class="material-icons mr-2">delete</span> Hapus
                            </button>
                        </div>
                    </div>
                    <h1 class="text-xl font-bold text-text-light dark:text-text-dark">Detail Hewan</h1>
                    <button id="close-btn-new" class="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-text-dark">
                        <span class="material-icons">close</span>
                    </button>
                </header>
                <main class="p-6" style="max-height: 80vh; overflow-y: auto;">
                    <div class="relative mb-6">
                        <img alt="${hewan.nama}" class="w-full h-auto object-cover rounded-lg" src="${hewan.gambar}">
                    </div>
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold text-text-light dark:text-text-dark">${hewan.nama}</h2>
                        <p class="text-lg text-text-secondary-light dark:text-text-secondary-dark italic">${hewan.namaIlmiah}</p>
                        <p class="mt-2 max-w-2xl mx-auto text-text-secondary-light dark:text-text-secondary-dark">${hewan.deskripsi}</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Informasi Detail</h3>
                            <div class="space-y-4">
                                <div class="flex justify-between items-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
                                    <span class="font-medium text-text-secondary-light dark:text-text-secondary-dark">Status</span>
                                    <span class="font-semibold ${getStatusClass(hewan.statusKonservasi)}">${hewan.statusKonservasi}</span>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
                                    <span class="font-medium text-text-secondary-light dark:text-text-secondary-dark">Populasi</span>
                                    <span class="font-semibold text-text-light dark:text-text-dark">${hewan.populasi} (${hewan.tahunPencatatan})</span>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
                                    <span class="font-medium text-text-secondary-light dark:text-text-secondary-dark">Tipe Makanan</span>
                                    <span class="font-semibold text-text-light dark:text-text-dark">${hewan.tipeMakanan}</span>
                                </div>
                                <div class="flex justify-between items-center p-3 bg-background-light dark:bg-background-dark rounded-lg">
                                    <span class="font-medium text-text-secondary-light dark:text-text-secondary-dark">Makanan Utama</span>
                                    <span class="font-semibold text-text-light dark:text-text-dark text-right">${hewan.makanan}</span>
                                </div>
                                <div class="p-3 bg-background-light dark:bg-background-dark rounded-lg">
                                    <span class="font-medium text-text-secondary-light dark:text-text-secondary-dark">Kebiasaan Unik</span>
                                    <p class="mt-1 font-semibold text-text-light dark:text-text-dark">${hewan.kebiasaanUnik}</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-primary/30">
                            <h3 class="text-xl font-semibold mb-4 text-primary dark:text-blue-300 flex items-center">
                                <span class="material-icons mr-2">flag</span>
                                Kearifan Lokal
                            </h3>
                            <p class="text-text-secondary-light dark:text-text-secondary-dark">${hewan.hubunganMasyarakat}</p>
                        </div>
                    </div>
                    <div class="mt-12">
                        <h2 class="text-2xl font-bold text-center mb-8 text-text-light dark:text-text-dark">Lihat Juga</h2>
                        <div class="relative">
                            <div id="lihat-juga-carousel" class="overflow-hidden">
                                <div id="lihat-juga-track" class="flex transition-transform duration-300 ease-in-out">
                                    </div>
                            </div>
                        </div>
                        <div id="lihat-juga-dots" class="flex justify-center mt-4 space-x-2">
                            </div>
                    </div>
                </main>
            </div>
        `;

        modal.style.display = 'flex';

        const track = document.getElementById('lihat-juga-track');
        const dotsContainer = document.getElementById('lihat-juga-dots');
        const itemsPerPage = 3;
        const pages = Math.ceil(randomAnimals.length / itemsPerPage);
        let currentPage = 0;

        track.innerHTML = randomAnimals.map(rand => `
            <div class="flex-shrink-0 w-1/3 p-2">
                <div class="random-card bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer" data-id="${getAnimalUniqueId(rand)}">
                    <img alt="${rand.nama}" class="w-full h-48 object-cover" src="${rand.gambar}">
                    <div class="p-4 text-center">
                        <h3 class="font-semibold text-text-light dark:text-text-dark">${rand.nama}</h3>
                    </div>
                </div>
            </div>
        `).join('');

        if (pages > 1) {
            for (let i = 0; i < pages; i++) {
                const dot = document.createElement('button');
                dot.className = 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full';
                dot.addEventListener('click', () => {
                    currentPage = i;
                    updateCarousel();
                });
                dotsContainer.appendChild(dot);
            }
        }

        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentPage * 100}%)`;
            Array.from(dotsContainer.children).forEach((dot, index) => {
                dot.classList.toggle('bg-primary', index === currentPage);
                dot.classList.toggle('bg-gray-300', index !== currentPage);
            });
        };

        updateCarousel();

        document.getElementById('close-btn-new').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        const menuBtn = document.getElementById('modal-menu-btn-new');
        const dropdown = document.getElementById('dropdown-menu-new');
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('hidden');
        });

        document.body.addEventListener('click', (e) => {
            if (menuBtn && !menuBtn.contains(e.target) && dropdown && !dropdown.contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        }, { once: true });

        document.getElementById('dropdown-edit-btn').addEventListener('click', () => {
            dropdown.classList.add('hidden');
            handleEditClick(hewan);
        });

        document.getElementById('dropdown-delete-btn').addEventListener('click', () => {
            dropdown.classList.add('hidden');
            if (confirm(`Apakah Anda yakin ingin menghapus data ${hewan.nama}?`)) {
                const animalIndex = dataHewan.findIndex(h => getAnimalUniqueId(h) === uniqueId);
                if (animalIndex > -1) {
                    dataHewan.splice(animalIndex, 1);
                    modal.style.display = 'none';
                    loadAllAnimals();
                    if (!locationListPage.classList.contains('hidden')) {
                        applyFilters();
                    }
                    alert('Data hewan berhasil dihapus.');
                    loadUniqueLocations();
                }
            }
        });

        modal.querySelectorAll('.random-card').forEach(card => {
            card.addEventListener('click', () => {
                const animalId = card.dataset.id;
                const nextHewan = dataHewan.find(h => getAnimalUniqueId(h) === animalId);
                if (nextHewan) {
                    openModal(nextHewan);
                }
            });
        });
    }

    function handleEditClick(hewan) {
        modal.style.display = 'none';
        openEditModal(hewan);
    }

    function openEditModal(hewan) {
        currentEditingAnimal = hewan;
        const form = addAnimalForm;
        form.querySelector('[name="nama"]').value = hewan.nama || '';
        form.querySelector('[name="namaIlmiah"]').value = hewan.namaIlmiah || '';
        form.querySelector('[name="deskripsi"]').value = hewan.deskripsi || '';
        form.querySelector('[name="lokasi"]').value = Array.isArray(hewan.lokasi) ? hewan.lokasi.join(', ') : hewan.lokasi || '';
        form.querySelector('[name="statusKonservasi"]').value = hewan.statusKonservasi || '';
        form.querySelector('[name="populasi"]').value = hewan.populasi || '';
        form.querySelector('[name="tahunPencatatan"]').value = hewan.tahunPencatatan || '';
        form.querySelector('[name="makanan"]').value = hewan.makanan || '';
        form.querySelector('[name="tipeMakanan"]').value = hewan.tipeMakanan || '';
        form.querySelector('[name="hubunganMasyarakat"]').value = hewan.hubunganMasyarakat || '';
        form.querySelector('[name="gambar"]').value = hewan.gambar || '';

        addAnimalModal.querySelector('h1').textContent = 'Edit Hewan';
        addAnimalModal.style.display = 'flex';
        document.body.classList.add('modal-open');
    }

    function toggleMainContent(showLocationList) {
        mainContent.classList.toggle('hidden', showLocationList);
        locationListPage.classList.toggle('hidden', !showLocationList);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    function renderLocationAnimals(location, filterName = '', filterMakanan = '', filterLok = '', filterPop = '', filterFav = '') {
        currentFilteredLocation = location;

        if (location === 'Seluruh Nusantara' || location === 'Favorit') {
            filterLokasi.style.display = 'block';
        } else {
            filterLokasi.style.display = 'none';
        }
        
        locationListTitle.textContent = location === 'Seluruh Nusantara' 
            ? 'Seluruh Hewan Langka di Nusantara' 
            : (location === 'Favorit' 
                ? 'Hewan Favorit Anda' 
                : `Hewan Langka di ${location}`);
        
        let animalsToFilter = dataHewan;

        if (location !== 'Seluruh Nusantara' && location !== 'Favorit') {
            animalsToFilter = dataHewan.filter(hewan => 
                Array.isArray(hewan.lokasi) 
                ? hewan.lokasi.includes(location)
                : hewan.lokasi === location
            );
        }

        const animalsInLocation = animalsToFilter.filter(hewan => {
            const uniqueId = getAnimalUniqueId(hewan);
            const isFav = isFavorite(uniqueId);
            
            const matchLocation = (filterLok === '' || 
                (hewan.lokasi && 
                    (Array.isArray(hewan.lokasi) ? hewan.lokasi.includes(filterLok) : hewan.lokasi === filterLok)));
            
            const matchName = hewan.nama.toLowerCase().includes(filterName.toLowerCase());
            
            const matchMakanan = (filterMakanan === '' || hewan.tipeMakanan === filterMakanan);
            
            const matchPopulasi = (filterPop === '' 
                || (filterPop === 'Tidak Diketahui' && !hewan.statusKonservasi)
                || hewan.statusKonservasi === filterPop);
            
            const matchFavorite = (filterFav !== 'favorite' || isFav);

            const matchCurrentLocationView = (currentFilteredLocation !== 'Favorit' || isFav);
            
            return matchName && matchMakanan && matchLocation && matchPopulasi && matchFavorite && matchCurrentLocationView;
        });

        locationAnimalList.innerHTML = '';
        if (animalsInLocation.length === 0) {
            locationAnimalList.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Tidak ada data hewan yang ditemukan sesuai filter.</p>';
            return;
        }

        animalsInLocation.forEach(hewan => {
            const uniqueId = getAnimalUniqueId(hewan);
            let isFav = isFavorite(uniqueId);

            const card = document.createElement('div');
            card.className = 'location-card';
            card.dataset.id = uniqueId;
            
            const imageWrapper = document.createElement('div');
            imageWrapper.className = 'image-wrapper';
            const img = document.createElement('img');
            img.src = hewan.gambar || '';
            img.alt = hewan.nama || '';
            img.onerror = () => {
                imageWrapper.style.display = 'none';
            };
            imageWrapper.appendChild(img);

            const favBtn = document.createElement('button');
            favBtn.className = `favorite-btn card-favorite-btn-in-list ${isFav ? 'is-favorite' : ''}`;
            favBtn.dataset.id = uniqueId;
            favBtn.innerHTML = `
                <span class="material-icons star-icon">${isFav ? 'star' : 'star_border'}</span>
                <span class="favorite-tooltip">${isFav ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}</span>
            `;
            
            favBtn.onclick = (e) => {
                e.stopPropagation();
                const newStatus = toggleFavorite(uniqueId);
                isFav = newStatus;
                favBtn.classList.toggle('is-favorite', newStatus);
                favBtn.querySelector('.star-icon').textContent = newStatus ? 'star' : 'star_border';
                favBtn.querySelector('.favorite-tooltip').textContent = newStatus ? 'Hapus dari Favorit' : 'Tambah ke Favorit';
                if (filterFavorite.value === 'favorite' || currentFilteredLocation === 'Favorit') {
                    applyFilters();
                }
            };

            const cardContent = document.createElement('div');
            cardContent.className = 'card-content';
            
            const titleContainer = document.createElement('div');
            titleContainer.style.display = 'flex';
            titleContainer.style.alignItems = 'center';
            titleContainer.style.gap = '5px';
            titleContainer.style.marginBottom = '0.5rem';

            const h3 = document.createElement('h3');
            h3.textContent = hewan.nama || '';
            h3.style.margin = '0';
            
            titleContainer.appendChild(h3);
            titleContainer.appendChild(favBtn);

            const p1 = document.createElement('p');
            p1.className = 'short-desc';
            p1.textContent = `${(hewan.deskripsi || '').substring(0, 100)}...`;

            const badgeContainer = document.createElement('div');
            badgeContainer.className = 'badge-row';
            badgeContainer.innerHTML = `
                ${createStatusBadge(hewan.statusKonservasi)}
                <span class="status-badge location">${Array.isArray(hewan.lokasi) ? hewan.lokasi.join(', ') : hewan.lokasi || 'N/A'}</span>
            `;

            cardContent.appendChild(titleContainer);
            cardContent.appendChild(p1);
            cardContent.appendChild(badgeContainer);

            card.appendChild(imageWrapper);
            card.appendChild(cardContent);
            locationAnimalList.appendChild(card);
        });
        
        toggleMainContent(true);
    }
    
    function loadUniqueLocations() {
        const uniqueLocations = new Set();
        dataHewan.forEach(hewan => {
            if (hewan.lokasi) {
                if (Array.isArray(hewan.lokasi)) {
                    hewan.lokasi.forEach(loc => uniqueLocations.add(loc));
                } else if (typeof hewan.lokasi === 'string') {
                    hewan.lokasi.split(',').map(s => s.trim()).filter(s => s).forEach(loc => uniqueLocations.add(loc));
                }
            }
        });
        
        filterLokasi.innerHTML = '<option value="">Semua Lokasi</option>'; 
        Array.from(uniqueLocations).sort().forEach(loc => {
            const option = document.createElement('option');
            option.value = loc;
            option.textContent = loc;
            filterLokasi.appendChild(option);
        });
    }

    function renderAllAnimals() {
        loadUniqueLocations();
        filterNameInput.value = '';
        filterTipeMakanan.value = '';
        filterLokasi.value = ''; 
        filterPopulasi.value = '';
        filterFavorite.value = ''; 
        renderLocationAnimals('Seluruh Nusantara');
    }

    function applyFilters() {
        const name = filterNameInput.value.trim();
        const tipeMakanan = filterTipeMakanan.value;
        const lokasi = filterLokasi.value; 
        const populasi = filterPopulasi.value;
        const favorite = filterFavorite.value; 
        renderLocationAnimals(currentFilteredLocation, name, tipeMakanan, lokasi, populasi, favorite);
    }

    function resetAddAnimalForm() {
        addAnimalForm.reset();
        addAnimalModal.querySelector('h1').textContent = 'Tambah Hewan Baru';
        currentEditingAnimal = null;
    }

    addAnimalBtn.addEventListener('click', () => {
        resetAddAnimalForm(); 
        addAnimalModal.style.display = 'flex';
        document.body.classList.add('modal-open');
    });

    closeAddAnimalModalBtn.addEventListener('click', () => {
        addAnimalModal.style.display = 'none';
        resetAddAnimalForm();
        document.body.classList.remove('modal-open');
    });

    addAnimalModal.addEventListener('click', (e) => {
        if (e.target === addAnimalModal) {
            addAnimalModal.style.display = 'none';
            resetAddAnimalForm();
            document.body.classList.remove('modal-open');
        }
    });

    addAnimalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(addAnimalForm);
        const imageUrl = formData.get('gambar');
        const lokasiInput = formData.get('lokasi');

        const normalizedLokasi = lokasiInput.includes(',') ? 
                                 lokasiInput.split(',').map(s => s.trim()).filter(s => s) : 
                                 lokasiInput.trim();

        let imageToSave = imageUrl;

        if (currentEditingAnimal && !imageUrl) {
            imageToSave = currentEditingAnimal.gambar;
        }

        const newOrUpdatedData = {
            nama: formData.get('nama'),
            namaIlmiah: formData.get('namaIlmiah'),
            lokasi: normalizedLokasi, 
            statusKonservasi: formData.get('statusKonservasi'),
            deskripsi: formData.get('deskripsi'),
            populasi: formData.get('populasi'),
            tahunPencatatan: formData.get('tahunPencatatan'),
            kebiasaanUnik: "Data tidak tersedia", 
            makanan: formData.get('makanan'),
            tipeMakanan: formData.get('tipeMakanan'),
            hubunganMasyarakat: formData.get('hubunganMasyarakat'),
            gambar: imageToSave,
        };

        if (currentEditingAnimal) {
            const index = dataHewan.findIndex(h => h === currentEditingAnimal);
            if (index > -1) {
                dataHewan[index] = { ...dataHewan[index], ...newOrUpdatedData };
                alert('Data hewan berhasil diperbarui!');
            }
        } else {
            dataHewan.unshift(newOrUpdatedData);
            alert('Hewan baru berhasil ditambahkan!');
        }

        addAnimalModal.style.display = 'none';
        resetAddAnimalForm(); 
        document.body.classList.remove('modal-open');
        loadAllAnimals();
        loadUniqueLocations(); 
        if (!locationListPage.classList.contains('hidden')) {
            applyFilters();
        }
    });

    createHeroSlides();
    showHeroSlide(0);
    setInterval(nextHeroSlide, 7000); 
    loadAllAnimals();
    setInterval(showNextItem, 4000);
    generateQuestion();
    loadUniqueLocations(); 
    updateFavoriteCount();

    scrollToContentBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        scrollToAboutSection();
    });
    
    heroPrevBtn.addEventListener('click', prevHeroSlide);
    heroNextBtn.addEventListener('click', nextHeroSlide);
    prevBtn.addEventListener('click', showPrevItem);
    nextBtn.addEventListener('click', showNextItem);
    quizSubmitBtn.addEventListener('click', checkAnswer);
    quizShowAnswerBtn.addEventListener('click', showAnswer);
    quizHintBtn.addEventListener('click', showNextHint);
    quizNextBtn.addEventListener('click', generateQuestion);
    
    animalContainer.addEventListener('click', e => {
        const card = e.target.closest('.carousel-item');
        if (!card) return;
        const animalId = card.dataset.id;
        const hewan = dataHewan.find(h => getAnimalUniqueId(h) === animalId);
        if (hewan) openModal(hewan);
    });
    
    document.querySelectorAll('.map-waypoint').forEach(waypoint => {
        waypoint.addEventListener('click', (e) => {
            e.preventDefault();
            const location = waypoint.dataset.location;
            
            filterLokasi.value = ''; 
            filterNameInput.value = '';
            filterTipeMakanan.value = '';
            filterPopulasi.value = '';
            filterFavorite.value = ''; 
            renderLocationAnimals(location);
        });
    });

    viewAllLocationsBtn.addEventListener('click', renderAllAnimals);

    backToHomeBtn.addEventListener('click', () => {
        filterNameInput.value = '';
        filterTipeMakanan.value = '';
        filterLokasi.value = '';
        filterPopulasi.value = '';
        filterFavorite.value = '';

        toggleMainContent(false); 

        setTimeout(() => {
            const mapWrapper = document.getElementById('map-section-wrapper');
            if (mapWrapper) {
                const offsetPosition = mapWrapper.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        }, 100); 
    });
    
    filterNameInput.addEventListener('keyup', applyFilters);
    filterTipeMakanan.addEventListener('change', applyFilters);
    filterLokasi.addEventListener('change', applyFilters); 
    filterPopulasi.addEventListener('change', applyFilters);
    filterFavorite.addEventListener('change', applyFilters); 
    
    resetFilterBtn.addEventListener('click', () => {
        filterNameInput.value = '';
        filterTipeMakanan.value = '';
        filterLokasi.value = '';
        filterPopulasi.value = '';
        filterFavorite.value = '';
        applyFilters();
    });
    
    locationAnimalList.addEventListener('click', e => {
        const card = e.target.closest('.location-card');
        if (!card) return;
        const animalId = card.dataset.id;
        const hewan = dataHewan.find(h => getAnimalUniqueId(h) === animalId);
        if (hewan) openModal(hewan);
    });

    quizAnswerInput.addEventListener('keyup', e => { if (e.key === 'Enter') checkAnswer(); });
    
    window.addEventListener('click', e => { 
        if (e.target === modal) {
            modal.style.display = 'none'; 
        }
    });
    
    scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    scrollBottomBtn.addEventListener("click", () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }));

    let lastScrollTop = 0;
    const scrollThreshold = 100; 

    window.addEventListener('scroll', function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        
        if (st > lastScrollTop && st > scrollThreshold) {
            scrollBtnContainer.style.bottom = '20px'; 
        } else {
            scrollBtnContainer.style.bottom = '-100px'; 
        }
        
        lastScrollTop = st <= 0 ? 0 : st;
    });

});