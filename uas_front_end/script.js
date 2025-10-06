const heroSlidesData = [
    { video: 'videos/Gajah_Makan.mp4', judul: 'Gajah Sumatra', subjudul: 'Herbivora Lembut yang Terancam' },
    { video: 'videos/lumba_lumba.mp4', judul: 'Lumba-Lumba', subjudul: 'Kecerdasan di Kedalaman Biru' },
    { video: 'videos/Burung.mp4', judul: 'Cendrawasih Merah', subjudul: 'Cantik dan Indah' }
];

function scrollToCarousel() {
    const carouselWrapper = document.getElementById('animal-container-wrapper');
    const offsetPosition = carouselWrapper.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}

// Fungsi baru untuk menggulir ke About Section
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
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = modal.querySelector('.close-btn');
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
    const resetFilterBtn = document.getElementById('reset-filter-btn');
    const viewAllLocationsBtn = document.getElementById('view-all-locations-btn'); 
    const scrollToContentBtn = document.getElementById('scroll-to-content-btn'); // Dapatkan elemen panah
    const addAnimalBtn = document.getElementById('add-animal-btn');
    const addAnimalModal = document.getElementById('add-animal-modal');
    const addAnimalForm = document.getElementById('add-animal-form');
    const closeAddAnimalModalBtn = addAnimalModal.querySelector('.close-btn');
    const gambarFileInput = document.getElementById('gambarFile');
    const imagePreview = document.getElementById('image-preview');
    const uploadPlaceholder = document.getElementById('upload-placeholder');
    const deleteImageBtn = document.getElementById('delete-image-btn');
    let currentFilteredLocation = ''; 

    let currentIndex = 0;
    let currentlyDisplayedAnimals = [];
    let currentHeroIndex = 0;
    const itemsPerPage = 4; // for main carousel
    let currentQuizAnimal = null;
    let revealedIndexes = [];
    let usedHintTypes = [];

    // Variabel untuk carousel "Lihat Juga"
    let randomCarouselIndex = 0;
    const randomItemsPerView = 3; // Jumlah item yang terlihat di "Lihat Juga"

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
            const card = document.createElement('div');
            card.className = 'carousel-item';
            const uniqueId = hewan.namaIlmiah || `${hewan.nama}-${dataHewan.indexOf(hewan)}`;
            card.dataset.id = uniqueId;
            card.innerHTML = `
                <div class="image-wrapper"><img src="${hewan.gambar || ''}" alt="${hewan.nama || ''}" onerror="this.parentElement.style.display='none'"></div>
                <div class="card-content"><h3>${hewan.nama || ''}</h3><p>${(hewan.deskripsi || '').substring(0, 70)}...</p></div>`;
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
        const randomAnimals = dataHewan.filter(h => h.namaIlmiah !== hewan.namaIlmiah).sort(() => 0.5 - Math.random()).slice(0, 5);
        const uniqueId = hewan.namaIlmiah || `${hewan.nama}-${dataHewan.indexOf(hewan)}`;

        modalBody.innerHTML = `
            <div class="modal-header-controls">
                 <button id="delete-animal-btn" 
                    class="absolute top-4 right-20 bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors"
                    data-id="${uniqueId}">Hapus</button>
            </div>
            <img src="${hewan.gambar || 'images/placeholder.png'}" alt="${hewan.nama || ''}" class="modal-animal-image">
            <h2>${hewan.nama || 'N/A'}</h2>
            <p class="nama-ilmiah"><i>${hewan.namaIlmiah || 'N/A'}</i></p> 
            <p>${hewan.deskripsi || 'N/A'}</p>
            <div class="detail-grid-v2">
                <div class="detail-group-left">
                    <div class="detail-item-v2"><h4>Status</h4><p>${hewan.statusKonservasi || 'N/A'}</p></div>
                    <div class="detail-item-v2"><h4>Populasi</h4><p>${hewan.populasi || 'N/A'} (${hewan.tahunPencatatan || 'N/A'})</p></div>
                    <div class="detail-item-v2"><h4>Makanan</h4><p>${hewan.tipeMakanan || 'N/A'}</p></div>
                </div>
                <div class="detail-item-right">
                    <h4>Kearifan Lokal</h4>
                    <p>${hewan.hubunganMasyarakat || 'N/A'}</p>
                </div>
            </div>
            <div class="random-animals">
                <h3>Lihat Juga</h3>
                <div class="random-carousel-container">
                    <div class="random-grid">
                        ${randomAnimals.map(rand => `
                            <div class="random-card" data-id="${rand.namaIlmiah}">
                                <img src="${rand.gambar}" alt="${rand.nama}">
                                <p>${rand.nama}</p>
                            </div>
                        `).join('')}
                    </div>
                    <button class="random-nav-btn prev hidden">⮜</button>
                    <button class="random-nav-btn next hidden">⮞</button>
                </div>
                <div class="random-dots-container"></div>
            </div>
        `;
        modal.style.display = 'flex';

        document.getElementById('delete-animal-btn').addEventListener('click', function() {
            const animalIdToDelete = this.dataset.id;
            if (confirm(`Apakah Anda yakin ingin menghapus data ${hewan.nama}?`)) {
                const animalIndex = dataHewan.findIndex(h => (h.namaIlmiah || `${h.nama}-${dataHewan.indexOf(h)}`) === animalIdToDelete);
                if (animalIndex > -1) {
                    dataHewan.splice(animalIndex, 1);
                    modal.style.display = 'none';
                    loadAllAnimals();
                    if (!locationListPage.classList.contains('hidden')) {
                        applyFilters();
                    }
                    alert('Data hewan berhasil dihapus.');
                }
            }
        });

        if (randomAnimals.length > randomItemsPerView) {
            initRandomCarousel(randomAnimals);
        }
    }

    // Fungsi untuk menginisialisasi carousel "Lihat Juga"
    function initRandomCarousel(animals) {
        const randomGrid = modalBody.querySelector('.random-grid');
        const prevRandomBtn = modalBody.querySelector('.random-nav-btn.prev');
        const nextRandomBtn = modalBody.querySelector('.random-nav-btn.next');
        const dotsContainer = modalBody.querySelector('.random-dots-container');

        prevRandomBtn.classList.remove('hidden');
        nextRandomBtn.classList.remove('hidden');

        randomCarouselIndex = 0; // Reset index saat modal dibuka
        updateRandomCarousel(animals, randomGrid, prevRandomBtn, nextRandomBtn, dotsContainer);

        prevRandomBtn.onclick = () => {
            randomCarouselIndex = (randomCarouselIndex - 1 + animals.length) % animals.length;
            updateRandomCarousel(animals, randomGrid, prevRandomBtn, nextRandomBtn, dotsContainer);
        };

        nextRandomBtn.onclick = () => {
            randomCarouselIndex = (randomCarouselIndex + 1) % animals.length;
            updateRandomCarousel(animals, randomGrid, prevRandomBtn, nextRandomBtn, dotsContainer);
        };

        dotsContainer.innerHTML = '';
        for (let i = 0; i < animals.length; i++) {
            const dot = document.createElement('span');
            dot.className = 'random-dot';
            dot.dataset.index = i;
            dot.addEventListener('click', () => {
                randomCarouselIndex = i;
                updateRandomCarousel(animals, randomGrid, prevRandomBtn, nextRandomBtn, dotsContainer);
            });
            dotsContainer.appendChild(dot);
        }
    }

    // Fungsi untuk memperbarui tampilan carousel "Lihat Juga"
    function updateRandomCarousel(animals, randomGrid, prevBtn, nextBtn, dotsContainer) {
        const cardWidth = randomGrid.querySelector('.random-card') ? randomGrid.querySelector('.random-card').offsetWidth : 0;
        const gap = parseInt(window.getComputedStyle(randomGrid).marginRight); // Ambil nilai gap dari CSS

        // Hitung total lebar satu item (card + gap)
        const itemFullWidth = cardWidth + (cardWidth * 0.02 / 0.32); // 2% gap / 32% card width ratio
        
        // Geser grid
        // Gunakan transform: translateX untuk menggeser track carousel
        const offset = -randomCarouselIndex * (100 / randomItemsPerView); // Geser sebanyak persentase dari itemFullWidth
        randomGrid.style.transform = `translateX(${offset}%)`;

        // Update dots
        const dots = dotsContainer.querySelectorAll('.random-dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === randomCarouselIndex);
        });

        // Tampilkan/sembunyikan tombol navigasi jika diperlukan (untuk kasus sedikit item)
        if (animals.length <= randomItemsPerView) {
            prevBtn.classList.add('hidden');
            nextBtn.classList.add('hidden');
            dotsContainer.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
            dotsContainer.classList.remove('hidden');
        }
    }


    function toggleMainContent(showLocationList) {
        mainContent.classList.toggle('hidden', showLocationList);
        locationListPage.classList.toggle('hidden', !showLocationList);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    function renderLocationAnimals(location, filterName = '', filterMakanan = '', filterLok = '', filterPop = '') {
        currentFilteredLocation = location;

        // Kontrol Visibilitas Filter Lokasi
        if (location === 'Seluruh Nusantara') {
            filterLokasi.style.display = 'block';
        } else {
            filterLokasi.style.display = 'none';
        }

        locationListTitle.textContent = location === 'Seluruh Nusantara' 
            ? 'Seluruh Hewan Langka di Nusantara' 
            : `Hewan Langka di ${location}`;
        
        const animalsToFilter = location === 'Seluruh Nusantara' 
            ? dataHewan 
            : dataHewan.filter(hewan => hewan.lokasi.includes(location));

        const animalsInLocation = animalsToFilter.filter(hewan => 
            hewan.nama.toLowerCase().includes(filterName.toLowerCase())
            && (filterMakanan === '' || hewan.tipeMakanan === filterMakanan)
            && (filterLok === '' || hewan.lokasi.includes(filterLok)) 
            && (filterPop === '' 
                || (filterPop === 'Tidak Diketahui' && !hewan.statusKonservasi)
                || hewan.statusKonservasi === filterPop)
        );

        locationAnimalList.innerHTML = '';
        if (animalsInLocation.length === 0) {
            locationAnimalList.innerHTML = '<p style="text-align: center; grid-column: 1 / -1; color: var(--secondary-text);">Tidak ada data hewan yang ditemukan sesuai filter.</p>';
            return;
        }

        animalsInLocation.forEach(hewan => {
            const card = document.createElement('div');
            card.className = 'location-card';
            const uniqueId = hewan.namaIlmiah || `${hewan.nama}-${dataHewan.indexOf(hewan)}`;
            card.dataset.id = uniqueId;
            card.innerHTML = `
                <div class="image-wrapper"><img src="${hewan.gambar || ''}" alt="${hewan.nama || ''}" onerror="this.parentElement.style.display='none'"></div>
                <div class="card-content">
                    <h3>${hewan.nama || ''}</h3>
                    <p class="short-desc">${(hewan.deskripsi || '').substring(0, 100)}...</p>
                    <p class="short-desc"><strong>Status:</strong> ${hewan.statusKonservasi || 'N/A'}</p>
                    <p class="short-desc"><strong>Makanan:</strong> ${hewan.tipeMakanan || 'N/A'}</p>
                </div>
            `;
            locationAnimalList.appendChild(card);
        });
        
        toggleMainContent(true);
    }
    
    // Function to dynamically load unique locations into the filter
    function loadUniqueLocations() {
        const uniqueLocations = new Set();
        dataHewan.forEach(hewan => {
            // Logika untuk menangani lokasi sebagai string atau array
            if (hewan.lokasi && Array.isArray(hewan.lokasi)) {
                hewan.lokasi.forEach(loc => uniqueLocations.add(loc));
            } else if (hewan.lokasi) {
                uniqueLocations.add(hewan.lokasi);
            }
        });
        
        filterLokasi.innerHTML = '<option value="">Semua Lokasi</option>'; // Default option
        Array.from(uniqueLocations).sort().forEach(loc => {
            const option = document.createElement('option');
            option.value = loc;
            option.textContent = loc;
            filterLokasi.appendChild(option);
        });
    }

    // New function to render all animals (for the new button)
    function renderAllAnimals() {
        // 1. Load semua opsi lokasi ke filter
        loadUniqueLocations();
        // 2. Reset semua filter
        filterNameInput.value = '';
        filterTipeMakanan.value = '';
        filterLokasi.value = ''; 
        filterPopulasi.value = '';
        // 3. Render list
        renderLocationAnimals('Seluruh Nusantara');
    }

    function applyFilters() {
        const name = filterNameInput.value.trim();
        const tipeMakanan = filterTipeMakanan.value;
        const lokasi = filterLokasi.value; 
        const populasi = filterPopulasi.value;
        renderLocationAnimals(currentFilteredLocation, name, tipeMakanan, lokasi, populasi);
    }

    gambarFileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.classList.remove('hidden');
                uploadPlaceholder.classList.add('hidden');
                deleteImageBtn.classList.remove('hidden');
            }
            reader.readAsDataURL(file);
        } 
    });

    deleteImageBtn.addEventListener('click', (e) => {
        e.preventDefault();
        imagePreview.src = '#';
        imagePreview.classList.add('hidden');
        uploadPlaceholder.classList.remove('hidden');
        deleteImageBtn.classList.add('hidden');
        gambarFileInput.value = '';
    });

    function resetAddAnimalForm() {
        addAnimalForm.reset();
        imagePreview.src = '#';
        imagePreview.classList.add('hidden');
        uploadPlaceholder.classList.remove('hidden');
        deleteImageBtn.classList.add('hidden');
        gambarFileInput.value = '';
    }

    addAnimalBtn.addEventListener('click', () => {
        addAnimalModal.style.display = 'flex';
        document.body.classList.add('modal-open');
    });

    closeAddAnimalModalBtn.addEventListener('click', () => {
        addAnimalModal.style.display = 'none';
        resetAddAnimalForm();
        document.body.classList.remove('modal-open');
    });

    // Close modal on overlay click
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
        const imageFile = formData.get('gambarFile');
        const imageUrl = formData.get('gambar');

        const newAnimal = {
            nama: formData.get('nama'),
            namaIlmiah: formData.get('namaIlmiah'),
            lokasi: formData.get('lokasi'),
            statusKonservasi: formData.get('statusKonservasi'),
            deskripsi: formData.get('deskripsi'),
            populasi: formData.get('populasi'),
            tahunPencatatan: formData.get('tahunPencatatan'),
            kebiasaanUnik: "Data tidak tersedia",
            makanan: formData.get('makanan'),
            tipeMakanan: formData.get('tipeMakanan'),
            hubunganMasyarakat: formData.get('hubunganMasyarakat'),
            gambar: '',
        };

        const addAndRefresh = (animal) => {
            dataHewan.unshift(animal);
            addAnimalModal.style.display = 'none';
            resetAddAnimalForm();
            loadAllAnimals();
            loadUniqueLocations();
            if (!locationListPage.classList.contains('hidden')) {
                applyFilters();
            }
            alert('Hewan baru berhasil ditambahkan!');
        };

        if (imageFile && imageFile.size > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                newAnimal.gambar = reader.result;
                addAndRefresh(newAnimal);
            };
            reader.readAsDataURL(imageFile);
        } else if (imageUrl) {
            newAnimal.gambar = imageUrl;
            addAndRefresh(newAnimal);
        } else {
            addAndRefresh(newAnimal);
        }
    });


    createHeroSlides();
    showHeroSlide(0);
    setInterval(nextHeroSlide, 7000); 
    loadAllAnimals();
    setInterval(showNextItem, 4000);
    generateQuestion();

    // Event listener untuk panah ke bawah (scroll-down-indicator)
    scrollToContentBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah perilaku default dari tag <a>
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
        const hewan = dataHewan.find(h => (h.namaIlmiah || `${h.nama}-${dataHewan.indexOf(h)}`) === animalId);
        if (hewan) openModal(hewan);
    });
    
    document.querySelectorAll('.map-waypoint').forEach(waypoint => {
        waypoint.addEventListener('click', (e) => {
            e.preventDefault();
            const location = waypoint.dataset.location;
            // Reset filter saat klik lokasi spesifik
            filterLokasi.value = ''; 
            filterNameInput.value = '';
            filterTipeMakanan.value = '';
            filterPopulasi.value = '';
            renderLocationAnimals(location);
        });
    });

    viewAllLocationsBtn.addEventListener('click', renderAllAnimals);

    backToHomeBtn.addEventListener('click', () => {
        // 1. Reset semua filter
        filterNameInput.value = '';
        filterTipeMakanan.value = '';
        filterLokasi.value = '';
        filterPopulasi.value = '';

        // 2. Switch back to main content (This calls window.scrollTo({ top: 0 }))
        toggleMainContent(false); 

        // 3. Gulir ke bagian "Jelajahi Habitat" (dengan sedikit delay agar DOM sempat di-render)
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
    resetFilterBtn.addEventListener('click', () => {
        filterNameInput.value = '';
        filterTipeMakanan.value = '';
        filterLokasi.value = '';
        filterPopulasi.value = '';
        applyFilters();
    });
    
    locationAnimalList.addEventListener('click', e => {
        const card = e.target.closest('.location-card');
        if (!card) return;
        const animalId = card.dataset.id;
        const hewan = dataHewan.find(h => (h.namaIlmiah || `${h.nama}-${dataHewan.indexOf(h)}`) === animalId);
        if (hewan) openModal(hewan);
    });

    modalBody.addEventListener('click', e => {
        const randomCard = e.target.closest('.random-card');
        if (randomCard) {
            const animalId = randomCard.dataset.id;
            const hewan = dataHewan.find(h => h.namaIlmiah === animalId);
            if (hewan) {
                openModal(hewan); 
            }
        }
    });


    quizAnswerInput.addEventListener('keyup', e => { if (e.key === 'Enter') checkAnswer(); });
    closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => { 
        if (e.target === modal) {
            modal.style.display = 'none'; 
        }
    });
    scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    scrollBottomBtn.addEventListener("click", () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }));
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollBtnContainer = document.querySelector('.scroll-buttons');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            // Scroll ke bawah
            scrollBtnContainer.style.bottom = '20px'; // Tampilkan
        } else {
            // Scroll ke atas
            scrollBtnContainer.style.bottom = '-100px'; // Sembunyikan
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
});
