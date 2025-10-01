/* file: script.js - KODE AKHIR YANG HANYA MEMPERBAIKI TOMBOL */

// Mendefinisikan fungsi di luar event listener agar bisa diakses oleh onclick di index.html
function scrollToFilter() {
    const filterContainer = document.getElementById('filter-container');
    // TINGGI HEADER FIXED Anda sekitar 4rem (1rem padding top/bottom + tinggi konten)
    // 4rem * 16px (default) = 64px. Kita gunakan 64px.
    const headerHeight = 64; 

    // Hitung posisi filter container relatif terhadap viewport
    const filterPosition = filterContainer.getBoundingClientRect().top;
    
    // Hitung posisi yang seharusnya: Posisi filter + scroll saat ini - tinggi header fixed
    const offsetPosition = filterPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Script is running and DOM is loaded!'); 

    // === DOM ELEMENTS ===
    const animalContainer = document.getElementById('animal-container');
    const searchBox = document.getElementById('search-box');
    const sortBox = document.getElementById('sort-box');
    const filterContainer = document.getElementById('filter-container');
    const filterFavoritBtn = document.getElementById('filter-favorit');
    const modal = document.getElementById('detail-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = modal.querySelector('.close-btn');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeStatus = document.getElementById('theme-status');
    const addAnimalBtn = document.getElementById('add-animal-btn');
    const createModal = document.getElementById('create-modal');
    const createModalCloseBtn = createModal.querySelector('.close-btn');
    const createForm = document.getElementById('create-form');

    const editModal = document.getElementById('edit-modal');
    const editModalCloseBtn = editModal.querySelector('.close-btn');
    const editForm = document.getElementById('edit-form');
    console.log({ editForm }); 

    // SCROLL BUTTONS
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const scrollBottomBtn = document.getElementById("scrollBottomBtn");

    // === APP STATE ===
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let currentTheme = localStorage.getItem('theme') || 'dark';
    let filters = { lokasi: 'semua', tipeMakanan: 'semua', status: 'semua', populasi: 'semua' };
    let isShowingFavorites = false;

    // === THEME LOGIC ===
    function applyTheme() {
        document.body.className = currentTheme === 'light' ? 'light-mode' : '';
        themeToggleBtn.textContent = currentTheme === 'light' ? '🌙' : '☀️';
        if (themeStatus) {
            themeStatus.textContent = currentTheme === 'light' ? 'Light Mode' : 'Dark Mode';
        }
        localStorage.setItem('theme', currentTheme);
    }

    function toggleTheme() {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme();
    }

    // === DATA HELPERS, FAVORITES LOGIC, UI, FILTERING, CRUD LOGIC (TETAP SAMA) ===
    const saveFavorites = () => localStorage.setItem('favorites', JSON.stringify(favorites));

    function getPopulationCategory(hewan) {
        if (!hewan.populasi || hewan.populasi.toLowerCase().includes('tidak diketahui')) {
            return 'Tidak Diketahui';
        }
        const match = hewan.populasi.replace(/\./g, '').match(/\d+/);
        if (!match) {
            return 'Tidak Diketahui';
        }
        const popNumber = parseInt(match[0], 10);
        if (popNumber < 100) return 'Sangat Langka (< 100)';
        if (popNumber >= 100 && popNumber <= 1000) return 'Langka (100 - 1.000)';
        if (popNumber > 1000 && popNumber <= 10000) return 'Rentan (1.001 - 10.000)';
        if (popNumber > 10000) return 'Aman (> 10.000)';
        return 'Tidak Diketahui';
    }

    function toggleFavorite(animalId, button) {
        const favIndex = favorites.indexOf(animalId);
        if (favIndex > -1) {
            favorites.splice(favIndex, 1);
            if(button) button.classList.remove('favorited');
        } else {
            favorites.push(animalId);
            if(button) button.classList.add('favorited');
        }
        saveFavorites();
        if (isShowingFavorites) {
            filterAndSearch();
        }
    }

    function displayAnimals(hewanArray) {
        animalContainer.innerHTML = '';
        if (hewanArray.length === 0) {
            animalContainer.innerHTML = '<p class="not-found">Data tidak ditemukan.</p>';
            return;
        }

        hewanArray.forEach((hewan, index) => {
            if (!hewan) return;

            const card = document.createElement('div');
            card.className = 'animal-card';
            const uniqueId = hewan.namaIlmiah || `${hewan.nama}-${index}`;
            card.dataset.id = uniqueId;
            card.style.animationDelay = `${index * 50}ms`;

            const isFavorited = favorites.includes(uniqueId);
            const nama = hewan.nama || 'Nama Tidak Tersedia';
            const gambar = hewan.gambar || 'images/placeholder.png';
            const namaIlmiah = hewan.namaIlmiah || 'N/A';
            const deskripsi = (hewan.deskripsi || '').substring(0, 100) + '...';
            const lokasi = hewan.lokasi || 'N/A';
            const status = hewan.statusKonservasi || 'N/A';

            card.innerHTML = `
                <div class="image-wrapper"><img src="${gambar}" alt="${nama}" onerror="this.onerror=null;this.src='images/placeholder.png';"></div>
                <div class="card-content">
                    <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" data-id="${uniqueId}" title="Tambah ke Favorit">★</button>
                    <h2>${nama}</h2>
                    <span class="nama-ilmiah">${namaIlmiah}</span>
                    <p>${deskripsi}</p>
                    <p class="hubungan-masyarakat-card">${(hewan.hubunganMasyarakat || '').substring(0, 100) + ((hewan.hubunganMasyarakat || '').length > 100 ? '...' : '')}</p>
                    <span class="info-tag lokasi">${lokasi}</span>
                    <span class="info-tag status">${status}</span>
                    <button class="delete-btn" data-id="${uniqueId}" title="Hapus Hewan">Hapus</button>
                    <button class="edit-btn" data-id="${uniqueId}" title="Edit Hewan">Edit</button>
                </div>
            `;
            animalContainer.appendChild(card);
        });
    }

    function createCustomDropdown(id, placeholder, options) {
        const wrapper = document.createElement('div');
        wrapper.className = 'custom-select-wrapper';
        wrapper.innerHTML = `
            <div class="custom-select" data-filter-id="${id}">
                <div class="custom-select-trigger"><span>${placeholder}</span></div>
                <div class="custom-options">
                    <div class="custom-option" data-value="semua">${placeholder}</div>
                    ${options.map(opt => `<div class="custom-option" data-value="${opt}">${opt}</div>`).join('')}
                </div>
            </div>
        `;
        filterContainer.insertBefore(wrapper, filterFavoritBtn);
    }

    function populateFilters() {
        filterContainer.querySelectorAll('.custom-select-wrapper').forEach(el => el.remove());

        const lokasiUnik = [...new Set(dataHewan.map(h => h.lokasi).filter(Boolean))].sort();
        createCustomDropdown('lokasi', 'Semua Lokasi', lokasiUnik);

        const tipeMakananOptions = ['Herbivora', 'Karnivora', 'Omnivora'];
        createCustomDropdown('tipeMakanan', 'Semua Tipe Makanan', tipeMakananOptions);

        const statusOrder = ['Kritis', 'Terancam', 'Rentan', 'Hampir Terancam'];
        const statusUnik = [...new Set(dataHewan.map(h => h.statusKonservasi).filter(Boolean))]
            .sort((a, b) => {
                const indexA = statusOrder.indexOf(a);
                const indexB = statusOrder.indexOf(b);
                if (indexA > -1 && indexB > -1) return indexA - indexB;
                if (indexA > -1) return -1;
                if (indexB > -1) return 1;
                return a.localeCompare(b);
            });
        createCustomDropdown('status', 'Semua Status', statusUnik);

        const populasiOptions = [
            'Sangat Langka (< 100)',
            'Langka (100 - 1.000)',
            'Rentan (1.001 - 10.000)',
            'Aman (> 10.000)',
            'Tidak Diketahui'
        ];
        createCustomDropdown('populasi', 'Semua Populasi', populasiOptions);
    }

    function getPopulationNumber(hewan) {
        if (!hewan || !hewan.populasi) return 0;
        const match = hewan.populasi.replace(/\./g, '').match(/\d+/);
        return match ? parseInt(match[0], 10) : 0;
    }

    function filterAndSearch() {
        const searchTerm = searchBox.value.toLowerCase();
        const sortValue = sortBox.value;
        let filteredHewan = [...dataHewan];

        if (isShowingFavorites) {
            filteredHewan = dataHewan.filter(h => h && favorites.includes(h.namaIlmiah || `${h.nama}-${dataHewan.indexOf(h)}`));
        }

        if (filters.lokasi !== 'semua') filteredHewan = filteredHewan.filter(h => h && h.lokasi === filters.lokasi);
        if (filters.tipeMakanan !== 'semua') filteredHewan = filteredHewan.filter(h => h && h.tipeMakanan === filters.tipeMakanan);
        if (filters.status !== 'semua') filteredHewan = filteredHewan.filter(h => h && h.statusKonservasi === filters.status);
        if (filters.populasi !== 'semua') {
            filteredHewan = filteredHewan.filter(h => h && getPopulationCategory(h) === filters.populasi);
        }
        if (searchTerm) filteredHewan = filteredHewan.filter(h => h && h.nama && h.nama.toLowerCase().includes(searchTerm));

        if (sortValue !== 'default') {
            filteredHewan.sort((a, b) => {
                switch (sortValue) {
                    case 'nama-asc':
                        return a.nama.localeCompare(b.nama);
                    case 'nama-desc':
                        return b.nama.localeCompare(a.nama);
                    case 'populasi-asc':
                        return getPopulationNumber(a) - getPopulationNumber(b);
                    case 'populasi-desc':
                        return getPopulationNumber(b) - getPopulationNumber(a);
                    case 'tahun-desc':
                        return (b.tahunPencatatan || 0) - (a.tahunPencatatan || 0);
                    case 'tahun-asc':
                        return (a.tahunPencatatan || 0) - (b.tahunPencatatan || 0);
                    default:
                        return 0;
                }
            });
        }

        displayAnimals(filteredHewan);
    }

    function openModal(hewan) {
        const uniqueId = hewan.namaIlmiah || `${hewan.nama}-${dataHewan.indexOf(hewan)}`;
        const randomAnimals = dataHewan.filter(h => (h.namaIlmiah || `${h.nama}-${dataHewan.indexOf(h)}`) !== uniqueId).sort(() => 0.5 - Math.random()).slice(0, 3);
        modalBody.innerHTML = `
            <img src="${hewan.gambar || 'images/placeholder.png'}" alt="${hewan.nama || ''}" onerror="this.onerror=null;this.src='images/placeholder.png';">
            <h2>${hewan.nama || 'Nama Tidak Tersedia'}</h2>
            <p class="nama-ilmiah">${hewan.namaIlmiah || 'N/A'}</p>
            <p>${hewan.deskripsi || 'Deskripsi tidak tersedia.'}</p>
            <div class="detail-grid">
                <div class="detail-item"><h4>Status Konservasi</h4><p>${hewan.statusKonservasi || 'N/A'}</p></div>
                <div class="detail-item"><h4>Populasi</h4><p>${hewan.populasi || 'N/A'} (Tercatat ${hewan.tahunPencatatan || 'N/A'})</p></div>
                <div class="detail-item"><h4>Tipe Makanan</h4><p>${hewan.tipeMakanan || 'N/A'}</p></div>
                <div class="detail-item"><h4>Makanan Utama</h4><p>${hewan.makanan || 'N/A'}</p></div>
                <div class="detail-item"><h4>Kebiasaan Unik</h4><p>${hewan.kebiasaanUnik || 'N/A'}</p></div>
                <div class="detail-item"><h4>Hubungan dengan kearifan lokal</h4><p>${hewan.hubunganMasyarakat || 'Tidak ada informasi terkait.'}</p></div>
            </div>
            <div class="random-animals">
                <h3>Lihat Juga</h3>
                <div class="random-grid">
                    ${randomAnimals.map(rand => {
                        const randId = rand.namaIlmiah || `${rand.nama}-${dataHewan.indexOf(rand)}`;
                        return `<div class="random-card" data-id="${randId}"><img src="${rand.gambar || 'images/placeholder.png'}" alt="${rand.nama || ''}"><p>${rand.nama || 'N/A'}</p></div>`
                    }).join('')}
                </div>
            </div>
        `;
        modal.style.display = 'flex';
    }

    function readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }

    async function handleCreate(e) { 
        e.preventDefault();
        const formData = new FormData(createForm);
        const newAnimal = Object.fromEntries(formData.entries());
        
        if (!newAnimal.nama || !newAnimal.namaIlmiah) {
            alert('Nama dan Nama Ilmiah wajib diisi!');
            return;
        }

        if (dataHewan.some(h => h.namaIlmiah === newAnimal.namaIlmiah)) {
            alert('Nama Ilmiah sudah ada. Harap gunakan nama yang unik.');
            return;
        }

        let imageUrl = 'images/placeholder.png'; // Default placeholder
        const imageFile = createForm.querySelector('input[name="gambarFile"]').files[0]; 

        if (imageFile) {
            try {
                imageUrl = await readFileAsDataURL(imageFile);
            } catch (error) {
                console.error("Error reading file:", error);
                alert("Gagal membaca file gambar. Menggunakan placeholder.");
            }
        } else if (newAnimal.gambarUrl) {
            imageUrl = newAnimal.gambarUrl;
        }
        newAnimal.gambar = imageUrl; 

        newAnimal.tahunPencatatan = parseInt(newAnimal.tahunPencatatan, 10) || new Date().getFullYear();
        dataHewan.unshift(newAnimal);
        
        createForm.reset();
        createModal.style.display = 'none';
        
        populateFilters();
        filterAndSearch();
    }

    async function handleUpdate(e) {
        e.preventDefault();
        const formData = new FormData(editForm);
        const updatedAnimalData = Object.fromEntries(formData.entries());
        const originalId = updatedAnimalData.originalNamaIlmiah;

        if (!updatedAnimalData.nama || !updatedAnimalData.namaIlmiah) {
            alert('Nama dan Nama Ilmiah wajib diisi!');
            return;
        }

        if (dataHewan.some(h => h.namaIlmiah === updatedAnimalData.namaIlmiah && (h.namaIlmiah || `${h.nama}-${dataHewan.indexOf(h)}`) !== originalId)) {
            alert('Nama Ilmiah sudah ada untuk hewan lain. Harap gunakan nama yang unik.');
            return;
        }

        const indexToUpdate = dataHewan.findIndex(hewan => (hewan.namaIlmiah || `${hewan.nama}-${dataHewan.indexOf(hewan)}`) === originalId);

        if (indexToUpdate > -1) {
            let imageUrl = dataHewan[indexToUpdate].gambar;
            const imageFile = editForm.querySelector('input[name="gambarFile"]').files[0];

            if (imageFile) {
                try {
                    imageUrl = await readFileAsDataURL(imageFile);
                } catch (error) {
                    console.error("Error reading file for update:", error);
                    alert("Gagal membaca file gambar. Menggunakan gambar sebelumnya.");
                }
            } else if (updatedAnimalData.gambarUrl) {
                imageUrl = updatedAnimalData.gambarUrl;
            } else if (updatedAnimalData.gambarUrl === '') { 
                imageUrl = 'images/placeholder.png';
            }

            dataHewan[indexToUpdate] = {
                ...dataHewan[indexToUpdate],
                ...updatedAnimalData,
                gambar: imageUrl,
                tahunPencatatan: parseInt(updatedAnimalData.tahunPencatatan, 10) || new Date().getFullYear()
            };

            delete dataHewan[indexToUpdate].gambarUrl;
            delete dataHewan[indexToUpdate].gambarFile;
            delete dataHewan[indexToUpdate].originalNamaIlmiah;

            editForm.reset();
            editModal.style.display = 'none';
            populateFilters();
            filterAndSearch();
        } else {
            alert('Hewan tidak ditemukan untuk diperbarui.');
        }
    }

    function handleDelete(animalId) {
        const indexToDelete = dataHewan.findIndex(h => (h.namaIlmiah || `${h.nama}-${dataHewan.indexOf(h)}`) === animalId);
        if (indexToDelete > -1) {
            dataHewan.splice(indexToDelete, 1);
            
            const favIndex = favorites.indexOf(animalId);
            if (favIndex > -1) {
                favorites.splice(favIndex, 1);
                saveFavorites();
            }

            populateFilters();
            filterAndSearch();
        }
    }

    function openEditModal(hewan) {
        const originalNamaIlmiahInput = editForm ? editForm.querySelector('input[name="originalNamaIlmiah"]') : null; 

        for (const key in hewan) {
            const input = editForm.querySelector(`[name="${key}"]`);
            if (input) {
                if (input.type === 'file') {
                    input.value = ''; 
                } else if (input.tagName === 'SELECT') {
                    input.value = hewan[key];
                } else {
                    input.value = hewan[key];
                }
            }
        }
        if (originalNamaIlmiahInput) { 
            originalNamaIlmiahInput.value = hewan.namaIlmiah || `${hewan.nama}-${dataHewan.indexOf(hewan)}`;
        }
        const gambarUrlInput = editForm.querySelector('input[name="gambarUrl"]');
        if (gambarUrlInput && hewan.gambar && !hewan.gambar.startsWith('data:image')) {
            gambarUrlInput.value = hewan.gambar;
        } else if (gambarUrlInput) {
            gambarUrlInput.value = ''; 
        }

        editModal.style.display = 'flex';
    }

    // === EVENT LISTENERS ===
    themeToggleBtn.addEventListener('click', toggleTheme);

    addAnimalBtn.addEventListener('click', () => {
        createForm.reset(); // Clear form when opening
        createModal.style.display = 'flex';
    });

    filterFavoritBtn.addEventListener('click', () => {
        isShowingFavorites = !isShowingFavorites;
        filterFavoritBtn.classList.toggle('active', isShowingFavorites);
        filterAndSearch();
    });

    searchBox.addEventListener('input', () => { 
        isShowingFavorites = false; 
        filterFavoritBtn.classList.remove('active'); 
        filterAndSearch(); 
    });

    sortBox.addEventListener('change', () => {
        filterAndSearch();
    });

    filterContainer.addEventListener('click', e => {
        const option = e.target.closest('.custom-option');
        if (option) {
            const select = option.closest('.custom-select');
            select.querySelector('.custom-select-trigger span').textContent = option.textContent;
            select.classList.remove('is-open');
            filters[select.dataset.filterId] = option.dataset.value;
            isShowingFavorites = false; 
            filterFavoritBtn.classList.remove('active');
            filterAndSearch();
        }
        const trigger = e.target.closest('.custom-select-trigger');
        if (trigger) {
            const select = trigger.closest('.custom-select');
            document.querySelectorAll('.custom-select').forEach(sel => { if (sel !== select) sel.classList.remove('is-open'); });
            select.classList.toggle('is-open');
        }
    });

    animalContainer.addEventListener('click', e => {
        const target = e.target;
        const card = target.closest('.animal-card');
        if (!card) return;

        const animalId = card.dataset.id;

        if (target.closest('.favorite-btn')) {
            e.stopPropagation();
            toggleFavorite(animalId, target.closest('.favorite-btn'));
        } else if (target.closest('.delete-btn')) {
            e.stopPropagation();
            if (confirm('Apakah Anda yakin ingin menghapus hewan ini?')) {
                handleDelete(animalId);
            }
        } else if (target.closest('.edit-btn')) { 
            e.stopPropagation();
            const hewan = dataHewan.find(h => (h.namaIlmiah || `${h.nama}-${dataHewan.indexOf(h)}`) === animalId);
            if (hewan) openEditModal(hewan);
        } else {
            const hewan = dataHewan.find(h => (h.namaIlmiah || `${h.nama}-${dataHewan.indexOf(h)}`) === animalId);
            if (hewan) openModal(hewan);
        }
    });

    window.addEventListener('click', e => {
        if (!e.target.closest('.custom-select-wrapper')) {
            document.querySelectorAll('.custom-select').forEach(sel => sel.classList.remove('is-open'));
        }
        if (e.target === modal) modal.style.display = 'none';
        if (e.target === createModal) createModal.style.display = 'none';
        if (e.target === editModal) editModal.style.display = 'none'; 
    });

    closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    createModalCloseBtn.addEventListener('click', () => createModal.style.display = 'none');
    editModalCloseBtn.addEventListener('click', () => editModal.style.display = 'none'); 
    
    createForm.addEventListener('submit', handleCreate);
    editForm.addEventListener('submit', handleUpdate); 

    modal.addEventListener('click', e => {
        const randomCard = e.target.closest('.random-card');
        if (randomCard) {
            const animalId = randomCard.dataset.id;
            const hewan = dataHewan.find(h => (h.namaIlmiah || `${h.nama}-${dataHewan.indexOf(h)}`) === animalId);
            if (hewan) openModal(hewan);
        }
    });


    // === SCROLL BUTTONS LOGIC ===
    function checkScrollButtons() {
        const scrollY = window.scrollY; 
        const docHeight = document.documentElement.scrollHeight; 
        const winHeight = window.innerHeight; 

        if (scrollY > 100) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }

        if (scrollY + winHeight < docHeight - 100) {
            scrollBottomBtn.classList.add("show");
        } else {
            scrollBottomBtn.classList.remove("show");
        }
    }

    const mainHeader = document.querySelector('.main-header');
    const heroSection = document.querySelector('.hero-section');

    function handleHeaderVisibility() {
        if (!mainHeader || !heroSection) return;

        const heroHeight = heroSection.offsetHeight;

        if (window.scrollY > heroHeight) {
            mainHeader.classList.add('hidden');
        } else {
            mainHeader.classList.remove('hidden');
        }
    }

    const scrollToContentBtn = document.getElementById('scroll-to-content-btn');

    if (scrollToContentBtn) {
        scrollToContentBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = 64; // From scrollToFilter function
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    function handleScrollDownIndicator() {
        if (scrollToContentBtn) {
            if (window.scrollY > 50) {
                scrollToContentBtn.classList.add('hidden');
            } else {
                scrollToContentBtn.classList.remove('hidden');
            }
        }
    }

    // SCROLL LISTENERS
    window.addEventListener("scroll", () => {
        checkScrollButtons();
        handleHeaderVisibility();
        handleScrollDownIndicator();
    }); 

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    scrollBottomBtn.addEventListener("click", () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });

    // === INITIALIZATION ===
    try {
        applyTheme();
        populateFilters();
        filterAndSearch();
        checkScrollButtons(); 
        handleHeaderVisibility();
    } catch (error) {
        console.error("Initialization failed:", error);
        animalContainer.innerHTML = '<p class="not-found">Terjadi kesalahan kritis. Coba reset data aplikasi atau periksa konsol.</p>';
    }
});