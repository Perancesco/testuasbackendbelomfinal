const dataHewan = [
  {
    nama: "Harimau Sumatra",
    namaIlmiah: "Panthera tigris sumatrae",
    lokasi: "Sumatra",
    statusKonservasi: "Kritis",
    deskripsi: "Subspesies harimau terakhir yang masih bertahan di Indonesia. Populasinya terancam oleh perburuan dan hilangnya habitat.",
    gambar: "images/harimau_sumatra.jpg",
    populasi: "Kurang dari 400",
    tahunPencatatan: 2022,
    kebiasaanUnik: "Merupakan perenang yang andal dan sering berburu di dekat air.",
    makanan: "Rusa, babi hutan, kijang.",
    tipeMakanan: "Karnivora",
    hubunganMasyarakat: "Di Sumatra, harimau dihormati sebagai 'Inyiak' atau 'Datuak' (kakek/tetua). Dipercaya sebagai penjaga hutan dan penegak keadilan adat. Kemunculannya bisa menjadi pertanda pelanggaran adat. Mitos manusia harimau (Cindaku) juga berkembang sebagai penjaga hutan. Ada ritual khusus jika harimau mati dan pantangan untuk tidak menyebut namanya di hutan."
  },
  {
    nama: "Orangutan Sumatra",
    namaIlmiah: "Pongo abelii",
    lokasi: "Sumatra",
    statusKonservasi: "Kritis",
    deskripsi: "Spesies kera besar yang hanya ditemukan di hutan tropis Sumatra. Sangat cerdas dan memiliki 97% DNA yang sama dengan manusia.",
    gambar: "images/orangutan_sumatra.jpg",
    populasi: "Sekitar 14.000",
    tahunPencatatan: 2021,
    kebiasaanUnik: "Menggunakan alat sederhana dari ranting untuk mencari serangga di lubang pohon.",
    makanan: "Buah-buahan (terutama durian dan nangka), daun muda, serangga.",
    tipeMakanan: "Omnivora",
    hubunganMasyarakat: "Secara harfiah berarti 'manusia dari hutan', orangutan dianggap sebagai kerabat oleh beberapa komunitas adat di Sumatra. Ada kepercayaan yang melarang perburuan mereka, dan cerita rakyat sering menggambarkan hubungan emosional yang mendalam. Namun, di beberapa daerah lain, mereka juga bisa dianggap sebagai hama perkebunan."
  },
  {
    nama: "Gajah Sumatra",
    namaIlmiah: "Elephas maximus sumatranus",
    lokasi: "Sumatra",
    statusKonservasi: "Kritis",
    deskripsi: "Salah satu subspesies gajah Asia yang ukurannya lebih kecil. Terancam oleh konflik dengan manusia dan perburuan gading.",
    gambar: "images/gajah_sumatra.jpg",
    populasi: "Antara 2.400 - 2.800",
    tahunPencatatan: 2020,
    kebiasaanUnik: "Memiliki ingatan yang sangat kuat dan dapat mengingat lokasi sumber air.",
    makanan: "Rumput, daun, kulit kayu, buah-buahan.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Gajah Sumatra memiliki peran sejarah dan budaya yang mendalam. Mereka menjadi simbol status, kendaraan perang di masa kerajaan, dan inspirasi dalam kesenian seperti Tari Guel. Arca megalitikum juga menunjukkan penghormatan terhadap gajah. Banyak daerah dinamai berdasarkan gajah. Upaya konservasi modern melibatkan festival gajah dan upacara adat untuk menjaga hubungan harmonis."
  },
  {
    nama: "Badak Jawa",
    namaIlmiah: "Rhinoceros sondaicus",
    lokasi: "Jawa",
    statusKonservasi: "Kritis",
    deskripsi: "Dikenal sebagai badak bercula satu. Salah satu mamalia paling langka di dunia, hanya tersisa di Taman Nasional Ujung Kulon.",
    gambar: "images/badak_jawa.jpg",
    populasi: "Sekitar 75",
    tahunPencatatan: 2023,
    kebiasaanUnik: "Sangat pemalu dan jarang terlihat oleh manusia.",
    makanan: "Tunas, ranting, daun muda.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Secara historis, Badak Jawa pernah dianggap hama perkebunan. Tidak banyak tradisi langsung yang melibatkan badak ini, namun kini menjadi simbol kebanggaan nasional dan fokus utama upaya konservasi. Mitos khasiat cula badak lebih banyak beredar dalam pengobatan tradisional Tiongkok, bukan tradisi spesifik masyarakat Jawa."
  },
  {
    nama: "Elang Jawa",
    namaIlmiah: "Nisaetus bartelsi",
    lokasi: "Jawa",
    statusKonservasi: "Terancam",
    deskripsi: "Burung pemangsa endemik Pulau Jawa yang sering diidentikkan dengan lambang negara Garuda. Terancam oleh deforestasi.",
    gambar: "images/elang_jawa.jpg",
    populasi: "Sekitar 300 - 500",
    tahunPencatatan: 2019,
    kebiasaanUnik: "Setia pada satu pasangan seumur hidupnya.",
    makanan: "Mamalia kecil (tupai, kalong), burung, reptil.",
    tipeMakanan: "Karnivora",
    hubunganMasyarakat: "Elang Jawa diyakini sebagai inspirasi lambang negara Garuda, melambangkan kekuatan, keberanian, dan kebijaksanaan. Mitos Bromodedali, elang api mitologis, juga terkait. Masyarakat di lereng Merapi menyebutnya 'wulung' atau 'bido'. Elang Jawa telah ditetapkan sebagai maskot satwa langka Indonesia sejak 1992."
  },
  {
    nama: "Macan Tutul Jawa",
    namaIlmiah: "Panthera pardus melas",
    lokasi: "Jawa",
    statusKonservasi: "Kritis",
    deskripsi: "Kucing besar pemangsa yang mendiami hutan-hutan di Pulau Jawa. Populasinya menurun drastis akibat perburuan dan fragmentasi habitat.",
    gambar: "images/macan_tutul_jawa.jpg",
    populasi: "Kurang dari 250",
    tahunPencatatan: 2021,
    kebiasaanUnik: "Memiliki varian warna hitam yang sering disebut Macan Kumbang.",
    makanan: "Monyet, kijang, babi hutan.",
    tipeMakanan: "Karnivora",
    hubunganMasyarakat: "Secara tradisional, Macan Tutul Jawa dipandang sebagai simbol kemakmuran dan penjaga hutan. Hubungan ini terekam dalam relief Candi Penataran. Namun, hilangnya habitat dan perburuan menyebabkan konflik. Kini, macan tutul Jawa menjadi fauna identitas Jawa Barat dan upaya pelestariannya melibatkan pendekatan budaya dan ilmiah."
  },
  {
    nama: "Orangutan Kalimantan",
    namaIlmiah: "Pongo pygmaeus",
    lokasi: "Kalimantan",
    statusKonservasi: "Kritis",
    deskripsi: "Spesies orangutan yang ditemukan di Kalimantan (Borneo). Wajahnya lebih lebar dibandingkan kerabatnya di Sumatra.",
    gambar: "images/orangutan_kalimantan.jpg",
    populasi: "Sekitar 57.000",
    tahunPencatatan: 2020,
    kebiasaanUnik: "Lebih sering beraktivitas di tanah dibandingkan Orangutan Sumatra.",
    makanan: "Buah-buahan, kulit kayu, bunga.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Dalam budaya Dayak, orangutan sering dianggap sebagai 'orang hutan' yang memiliki jiwa dan perasaan. Terdapat banyak cerita rakyat yang melarang menyakiti orangutan karena dipercaya dapat membawa sial. Beberapa suku bahkan memandang orangutan sebagai nenek moyang atau kerabat jauh yang harus dihormati."
  },
  {
    nama: "Bekantan",
    namaIlmiah: "Nasalis larvatus",
    lokasi: "Kalimantan",
    statusKonservasi: "Terancam",
    deskripsi: "Monyet dengan hidung panjang yang khas dan perut buncit. Merupakan hewan endemik hutan bakau dan rawa di Pulau Kalimantan.",
    gambar: "images/bekantan.jpg",
    populasi: "Tidak diketahui pasti, terus menurun.",
    tahunPencatatan: 2018,
    kebiasaanUnik: "Hidung pejantan akan membengkak dan berwarna merah saat bersemangat atau marah.",
    makanan: "Daun-daunan, biji-bijian, dan buah mentah.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Bekantan adalah maskot provinsi Kalimantan Selatan. Masyarakat lokal sering menyebutnya 'Monyet Belanda' karena hidung mancung dan perut buncitnya. Meskipun tidak ada mitos mendalam, Bekantan menjadi simbol kebanggaan daerah dan ikon pariwisata, terutama di kawasan konservasi seperti Pulau Kaget."
  },
    {
    nama: "Pesut Mahakam",
    namaIlmiah: "Orcaella brevirostris",
    lokasi: "Kalimantan",
    statusKonservasi: "Kritis",
    deskripsi: "Lumba-lumba air tawar yang hidup di Sungai Mahakam. Terancam oleh polusi, lalu lintas kapal, dan jaring ikan.",
    gambar: "images/pesut_mahakam.jpg",
    populasi: "Sekitar 80",
    tahunPencatatan: 2022,
    kebiasaanUnik: "Memiliki kepala bulat dan tidak memiliki moncong seperti lumba-lumba laut.",
    makanan: "Ikan dan udang.",
    tipeMakanan: "Karnivora",
    hubunganMasyarakat: "Dalam legenda masyarakat Kutai, pesut dianggap sebagai penjelmaan anak-anak dari sebuah keluarga yang durhaka dan melompat ke sungai. Kemunculannya sering dikaitkan dengan pertanda atau pesan dari alam. Pesut sangat dihormati dan ada kepercayaan bahwa mengganggu atau membunuh pesut akan mendatangkan musibah."
  },
  {
    nama: "Komodo",
    namaIlmiah: "Varanus komodoensis",
    lokasi: "Nusa Tenggara",
    statusKonservasi: "Terancam",
    deskripsi: "Kadal terbesar di dunia yang hanya ditemukan di beberapa pulau di Nusa Tenggara Timur. Air liurnya mengandung bakteri mematikan.",
    gambar: "images/komodo.jpg",
    populasi: "Sekitar 3.300",
    tahunPencatatan: 2022,
    kebiasaanUnik: "Dapat memakan mangsa yang sangat besar, seperti kerbau.",
    makanan: "Rusa, babi, kerbau, bangkai.",
    tipeMakanan: "Karnivora",
    hubunganMasyarakat: "Masyarakat Nusa Tenggara, khususnya suku Komodo dan Modo, memiliki tradisi kuat yang menganggap komodo sebagai saudara kembar, berdasarkan legenda Putri Naga yang melahirkan anak kembar manusia dan komodo (Orah). Ada ritual makan berbagi dan Festival Budaya Komodo untuk melestarikan tradisi ini. Komodo dihormati dan dilindungi, dengan folklore yang diwariskan secara lisan."
  },
  {
    nama: "Anoa",
    namaIlmiah: "Bubalus depressicornis",
    lokasi: "Sulawesi",
    statusKonservasi: "Terancam",
    deskripsi: "Kerbau kerdil endemik dari Pulau Sulawesi. Sering disebut sebagai kerbau terkecil di dunia.",
    gambar: "images/anoa.jpg",
    populasi: "Kurang dari 2.500",
    tahunPencatatan: 2019,
    kebiasaanUnik: "Merupakan hewan soliter dan sangat agresif jika merasa terancam.",
    makanan: "Tumbuhan air, pakis, rumput.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Anoa menjadi simbol kekuatan, ketekunan, dan kegigihan bagi masyarakat Sulawesi. Hewan ini dijadikan logo provinsi Sulawesi Tenggara, lambang Kodam XIII/Merdeka, dan maskot universitas. Meski menjadi simbol kebanggaan, perburuan liar masih menjadi ancaman utama bagi populasinya di alam."
  },
  {
    nama: "Maleo",
    namaIlmiah: "Macrocephalon maleo",
    lokasi: "Sulawesi",
    statusKonservasi: "Kritis",
    deskripsi: "Burung endemik Sulawesi yang unik karena mengubur telurnya di pasir panas untuk dierami oleh panas bumi atau matahari.",
    gambar: "images/maleo.jpg",
    populasi: "Antara 8.000 - 14.000",
    tahunPencatatan: 2021,
    kebiasaanUnik: "Telur Maleo berukuran 5 kali lebih besar dari telur ayam.",
    makanan: "Biji-bijian, semut, kumbang, dan invertebrata kecil lainnya.",
    tipeMakanan: "Omnivora",
    hubunganMasyarakat: "Maleo dianggap sebagai simbol kesetiaan karena hidup berpasangan seumur hidup. Masyarakat lokal menghormati perilakunya yang mandiri sejak menetas. Telurnya dahulu sering diambil untuk konsumsi atau sebagai hadiah, namun praktik ini kini dilarang karena mengancam populasi. Maleo juga menjadi inspirasi dalam tarian dan kesenian lokal."
  },
    {
    nama: "Monyet Hitam Sulawesi",
    namaIlmiah: "Macaca nigra",
    lokasi: "Sulawesi",
    statusKonservasi: "Kritis",
    deskripsi: "Dikenal juga sebagai Yaki. Monyet dengan rambut hitam legam dan jambul di atas kepala. Terancam karena perburuan untuk dikonsumsi.",
    gambar: "images/yaki.jpg",
    populasi: "Kurang dari 5.000",
    tahunPencatatan: 2020,
    kebiasaanUnik: "Memiliki pantat berwarna merah muda atau merah yang menonjol.",
    makanan: "Buah-buahan, daun, serangga, dan kadal kecil.",
    tipeMakanan: "Omnivora",
    hubunganMasyarakat: "Di Minahasa, Yaki sayangnya sering menjadi bagian dari kuliner ekstrem. Namun, kini kesadaran konservasi meningkat. Yaki dianggap sebagai 'petani hutan' karena perannya menyebarkan biji. Upaya pelestarian sering melibatkan kampanye budaya untuk mengubah persepsi dari satwa konsumsi menjadi aset alam yang harus dilindungi."
  },
  {
    nama: "Cendrawasih Merah",
    namaIlmiah: "Paradisaea rubra",
    lokasi: "Papua",
    statusKonservasi: "Hampir Terancam",
    deskripsi: "Salah satu spesies burung cendrawasih yang terkenal dengan bulu hiasan jantan yang sangat indah berwarna merah dan kuning.",
    gambar: "images/cendrawasih_merah.jpg",
    populasi: "Tidak diketahui pasti.",
    tahunPencatatan: 2017,
    kebiasaanUnik: "Pejantan melakukan tarian yang rumit untuk menarik perhatian betina.",
    makanan: "Buah-buahan dan serangga.",
    tipeMakanan: "Omnivora",
    hubunganMasyarakat: "Cendrawasih adalah 'burung surga' yang sakral bagi banyak suku di Papua. Bulunya menjadi hiasan kepala yang sangat berharga dan hanya digunakan dalam upacara adat penting oleh kepala suku atau penari. Ada mitos bahwa burung ini tidak pernah turun ke tanah. Perburuan untuk bulunya kini dilarang keras, dan burung ini menjadi simbol keindahan dan kekayaan alam Papua."
  },
  {
    nama: "Badak Sumatra",
    namaIlmiah: "Dicerorhinus sumatrensis",
    lokasi: "Sumatra",
    statusKonservasi: "Kritis",
    deskripsi: "Spesies badak terkecil dan satu-satunya badak Asia dengan dua cula. Sangat terancam punah dengan populasi yang sangat sedikit.",
    gambar: "images/badak_sumatra.jpg",
    populasi: "Kurang dari 80",
    tahunPencatatan: 2023,
    kebiasaanUnik: "Berkomunikasi menggunakan suara-suara unik yang mirip siulan atau lengkingan.",
    makanan: "Daun, buah, ranting.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Dalam budaya kuno Sumatra, badak dianggap sebagai hewan kuat dan simbolis. Namun, tidak seperti harimau, mitosnya tidak begitu meluas. Fokus utama saat ini adalah pada nilai konservasinya yang sangat tinggi. Perburuan cula untuk pengobatan tradisional (yang tidak terbukti secara ilmiah) menjadi ancaman utama yang mendorongnya ke ambang kepunahan."
  },
  {
    nama: "Penyu Hijau",
    namaIlmiah: "Chelonia mydas",
    lokasi: "Perairan Indonesia",
    statusKonservasi: "Terancam",
    deskripsi: "Penyu laut yang tersebar luas di perairan tropis. Terancam oleh perburuan, hilangnya tempat bertelur, dan polusi plastik.",
    gambar: "images/penyu_hijau.jpg",
    populasi: "Tidak diketahui pasti.",
    tahunPencatatan: 2020,
    kebiasaanUnik: "Dapat bermigrasi ribuan kilometer antara tempat makan dan tempat bertelur.",
    makanan: "Rumput laut dan alga (dewasa), invertebrata kecil (saat muda).",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Di Bali, penyu memegang peran penting dalam upacara keagamaan Hindu, terutama sebagai simbol dari Bedawang Nala, kura-kura raksasa yang menopang dunia. Meskipun secara tradisional dagingnya dikonsumsi, kini ada larangan ketat. Pelepasan tukik (anak penyu) ke laut telah menjadi kegiatan edukasi dan ritual populer yang mendukung konservasi."
  },
  {
    nama: "Tarsius Kerdil",
    namaIlmiah: "Tarsius pumilus",
    lokasi: "Sulawesi",
    statusKonservasi: "Kritis",
    deskripsi: "Salah satu primata terkecil di dunia, sempat dikira punah selama 80 tahun sebelum ditemukan kembali pada tahun 2008.",
    gambar: "images/tarsius.jpg",
    populasi: "Sangat sedikit, tidak diketahui pasti.",
    tahunPencatatan: 2018,
    kebiasaanUnik: "Matanya lebih besar dari otaknya. Dapat memutar kepala hingga 180 derajat.",
    makanan: "Serangga.",
    tipeMakanan: "Karnivora",
    hubunganMasyarakat: "Masyarakat lokal di Sulawesi sering menganggap Tarsius (secara umum) sebagai hewan pembawa pertanda atau bahkan jelmaan roh nenek moyang. Ada kepercayaan bahwa mengganggu atau menangkap Tarsius dapat membawa nasib buruk. Ukurannya yang kecil dan matanya yang besar menambah kesan mistis pada hewan nokturnal ini."
  },
  {
    nama: "Dugong",
    namaIlmiah: "Dugong dugon",
    lokasi: "Perairan Indonesia",
    statusKonservasi: "Rentan",
    deskripsi: "Mamalia laut herbivora yang sering disebut 'sapi laut'. Terancam oleh hilangnya padang lamun, habitat utamanya.",
    gambar: "images/dugong.jpg",
    populasi: "Tidak diketahui pasti, diperkirakan sekitar 1.000 di Indonesia.",
    tahunPencatatan: 2019,
    kebiasaanUnik: "Sangat pemalu dan seringkali hanya terlihat dari jejak makan di dasar laut.",
    makanan: "Lamun (rumput laut).",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Dugong adalah inspirasi utama dari legenda 'ikan duyung' atau 'putri duyung' di banyak budaya pesisir Indonesia. Ada mitos bahwa air mata dugong memiliki kekuatan magis. Sayangnya, kepercayaan ini juga memicu perburuan di masa lalu. Kini, dugong menjadi ikon konservasi laut dan pentingnya ekosistem padang lamun."
  },
  {
    nama: "Banteng Jawa",
    namaIlmiah: "Bos javanicus",
    lokasi: "Jawa",
    statusKonservasi: "Terancam",
    deskripsi: "Sapi liar asli Asia Tenggara. Banteng domestik di Bali merupakan salah satu keturunannya. Terancam oleh perburuan dan hilangnya habitat.",
    gambar: "images/banteng.jpg",
    populasi: "Kurang dari 8.000",
    tahunPencatatan: 2018,
    kebiasaanUnik: "Pejantan dan betina memiliki warna kulit yang berbeda; pejantan hitam, betina coklat kemerahan.",
    makanan: "Rumput, bambu, buah-buahan, dan dedaunan.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Banteng adalah simbol kekuatan, kerja keras, dan vitalitas. Sosoknya sering digunakan sebagai lambang partai politik, klub olahraga, dan berbagai institusi di Indonesia. Dalam budaya agraris, banteng melambangkan kemakmuran. Sapi Bali, yang merupakan keturunan domestik banteng, memegang peran penting dalam pertanian dan upacara adat."
  },
  {
    nama: "Jalak Bali",
    namaIlmiah: "Leucopsar rothschildi",
    lokasi: "Bali",
    statusKonservasi: "Kritis",
    deskripsi: "Burung endemik Bali yang terkenal dengan bulu putih bersih dan 'topeng' biru di sekitar mata. Sangat terancam oleh perdagangan ilegal.",
    gambar: "images/jalak_bali.jpg",
    populasi: "Kurang dari 50 di alam liar",
    tahunPencatatan: 2023,
    kebiasaanUnik: "Sangat cerewet dan suka berkumpul dalam kelompok.",
    makanan: "Buah, biji-bijian, dan serangga.",
    tipeMakanan: "Omnivora",
    hubunganMasyarakat: "Jalak Bali, atau Curik Bali, adalah fauna identitas Pulau Bali. Burung ini dianggap sebagai simbol keindahan dan kesucian. Keberadaannya sangat dihargai dalam budaya Bali. Upaya konservasinya seringkali melibatkan masyarakat adat (awig-awig) yang turut menjaga kelestarian burung ini di habitat aslinya."
  },
  {
    nama: "Trenggiling Sunda",
    namaIlmiah: "Manis javanica",
    lokasi: "Sumatra",
    statusKonservasi: "Kritis",
    deskripsi: "Mamalia unik yang seluruh tubuhnya tertutup sisik. Paling banyak diburu di dunia untuk sisik dan dagingnya.",
    gambar: "images/trenggiling.jpg",
    populasi: "Tidak diketahui pasti, sangat menurun.",
    tahunPencatatan: 2022,
    kebiasaanUnik: "Akan menggulung seperti bola saat terancam. Tidak memiliki gigi.",
    makanan: "Semut dan rayap.",
    tipeMakanan: "Karnivora",
    hubunganMasyarakat: "Dalam beberapa cerita rakyat, trenggiling dianggap sebagai hewan yang pemalu dan bijaksana. Namun, hubungan utamanya dengan masyarakat saat ini sangat tragis. Kepercayaan (yang salah) bahwa sisiknya memiliki khasiat obat telah menjadikannya mamalia yang paling banyak diperdagangkan secara ilegal di dunia, mendorongnya ke ambang kepunahan."
  },
  {
    nama: "Kakatua-kecil Jambul Kuning",
    namaIlmiah: "Cacatua sulphurea",
    lokasi: "Sulawesi",
    statusKonservasi: "Kritis",
    deskripsi: "Burung kakatua putih dengan jambul kuning yang khas. Populasinya anjlok akibat penangkapan liar untuk perdagangan.",
    gambar: "images/kakatua_jambul_kuning.jpg",
    populasi: "Kurang dari 7.000",
    tahunPencatatan: 2018,
    kebiasaanUnik: "Sangat cerdas dan dapat meniru berbagai macam suara.",
    makanan: "Biji-bijian, kacang, buah, dan bunga.",
    tipeMakanan: "Herbivora",
    suara: "sounds/kakatua_jambul_kuning.mp3",
    hubunganMasyarakat: "Kakatua sering menjadi simbol kecerdasan dan keindahan. Popularitasnya sebagai burung peliharaan justru menjadi ancaman terbesarnya. Dalam budaya populer, burung ini sering digambarkan sebagai teman yang setia, seperti dalam lagu anak-anak 'Burung Kakatua'. Upaya konservasi kini berfokus pada edukasi untuk tidak memelihara satwa liar."
  },
  {
    nama: "Owa Jawa",
    namaIlmiah: "Hylobates moloch",
    lokasi: "Jawa",
    statusKonservasi: "Terancam",
    deskripsi: "Kera kecil tak berekor yang endemik di Pulau Jawa. Dikenal dengan nyanyiannya yang khas di pagi hari.",
    gambar: "images/owa_jawa.jpg",
    populasi: "Kurang dari 2.500",
    tahunPencatatan: 2019,
    kebiasaanUnik: "Bergerak dengan cara berayun dari pohon ke pohon (brachiation) dengan sangat cepat.",
    makanan: "Buah-buahan matang, daun, dan bunga.",
    tipeMakanan: "Herbivora",
    suara: "sounds/owa_jawa.mp3",
    hubunganMasyarakat: "Suara nyanyian Owa Jawa yang khas sering dianggap sebagai 'suara hutan' oleh masyarakat di sekitar habitatnya. Kehadirannya menjadi penanda bahwa hutan masih sehat. Dalam beberapa cerita rakyat Sunda, kera (termasuk Owa) sering muncul sebagai tokoh yang lincah dan cerdik."
  },
  {
    nama: "Rusa Bawean",
    namaIlmiah: "Axis kuhlii",
    lokasi: "Jawa",
    statusKonservasi: "Kritis",
    deskripsi: "Spesies rusa yang hanya ditemukan di Pulau Bawean, Jawa Timur. Ukurannya relatif kecil.",
    gambar: "images/rusa_bawean.jpg",
    populasi: "Sekitar 300 - 400",
    tahunPencatatan: 2021,
    kebiasaanUnik: "Merupakan hewan nokturnal (aktif di malam hari) untuk menghindari predator.",
    makanan: "Rumput, dedaunan, dan tunas muda.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Bagi masyarakat Pulau Bawean, rusa ini adalah ikon dan kebanggaan yang tak ternilai. Keberadaannya menyatu dengan identitas pulau tersebut. Meskipun tidak ada mitologi yang kuat, rusa ini menjadi simbol keunikan dan pentingnya menjaga kelestarian alam pulau Bawean yang kecil."
  },
  {
    nama: "Babi Rusa",
    namaIlmiah: "Babyrousa babyrussa",
    lokasi: "Sulawesi",
    statusKonservasi: "Rentan",
    deskripsi: "Babi liar dengan taring atas yang tumbuh mencuat ke atas, menembus moncongnya. Hanya ditemukan di Sulawesi dan sekitarnya.",
    gambar: "images/babirusa.jpg",
    populasi: "Sekitar 10.000",
    tahunPencatatan: 2016,
    kebiasaanUnik: "Taring pejantan bisa tumbuh melengkung ke belakang hingga menembus tengkoraknya sendiri jika tidak diasah.",
    makanan: "Buah-buahan, akar, dan larva serangga.",
    tipeMakanan: "Omnivora",
    hubunganMasyarakat: "Bentuk taring Babirusa yang unik menjadikannya inspirasi dalam seni dan ukiran tradisional, terutama di Toraja. Hewan ini dianggap memiliki kekuatan mistis. Sayangnya, Babirusa juga sering diburu untuk diambil taringnya sebagai suvenir atau untuk dikonsumsi, yang menjadi ancaman serius bagi kelestariannya."
  },
  {
    nama: "Kura-kura Leher Ular Rote",
    namaIlmiah: "Chelodina mccordi",
    lokasi: "Nusa Tenggara",
    statusKonservasi: "Kritis",
    deskripsi: "Kura-kura air tawar dengan leher yang sangat panjang, menyerupai ular. Hampir punah di alam liar akibat perdagangan.",
    gambar: "images/kuraleherular.jpg",
    populasi: "Hampir punah di alam liar, tersisa di penangkaran.",
    tahunPencatatan: 2020,
    kebiasaanUnik: "Tidak bisa menarik kepalanya ke dalam tempurung, melainkan melipatnya ke samping.",
    makanan: "Ikan kecil, serangga air, dan cacing.",
    tipeMakanan: "Karnivora",
    hubunganMasyarakat: "Bagi masyarakat Pulau Rote, kura-kura ini adalah bagian dari kekayaan alam khas mereka. Namun, tingginya permintaan dalam perdagangan hewan peliharaan eksotis telah menghancurkan populasinya. Statusnya yang sangat langka kini menjadikannya simbol tragis dari dampak perdagangan satwa liar."
  },
  {
    nama: "Hiu Paus",
    namaIlmiah: "Rhincodon typus",
    lokasi: "Perairan Indonesia",
    statusKonservasi: "Terancam",
    deskripsi: "Ikan terbesar di dunia. Meskipun berukuran raksasa, hiu ini adalah pemakan plankton yang jinak dan bergerak lambat.",
    gambar: "images/hiupaus.jpg",
    populasi: "Tidak diketahui pasti.",
    tahunPencatatan: 2021,
    kebiasaanUnik: "Setiap individu memiliki pola bintik unik di tubuhnya, mirip seperti sidik jari manusia.",
    makanan: "Plankton, ikan kecil, dan telur ikan.",
    tipeMakanan: "Omnivora",
    hubunganMasyarakat: "Di beberapa komunitas nelayan, seperti di Gorontalo atau Papua, kemunculan hiu paus dianggap sebagai pertanda baik atau pembawa rezeki. Para nelayan sering berbagi sebagian hasil tangkapan mereka dengan hiu paus. Sifatnya yang jinak membuat interaksi ini menjadi atraksi ekowisata yang penting bagi ekonomi lokal."
  },
  {
    nama: "Kucing Merah Kalimantan",
    namaIlmiah: "Catopuma badia",
    lokasi: "Kalimantan",
    statusKonservasi: "Terancam",
    deskripsi: "Salah satu kucing liar paling misterius dan paling jarang dipelajari di dunia. Endemik Kalimantan.",
    gambar: "images/kucingmerah.jpg",
    populasi: "Diperkirakan kurang dari 2.200",
    tahunPencatatan: 2015,
    kebiasaanUnik: "Sangat pemalu dan aktif di malam hari, membuatnya sangat sulit untuk diamati.",
    makanan: "Burung, tikus, dan mamalia kecil lainnya.",
    tipeMakanan: "Karnivora",
    hubunganMasyarakat: "Karena sifatnya yang sangat misterius dan jarang terlihat, tidak banyak folklor spesifik yang tercatat tentang Kucing Merah. Bagi masyarakat adat di pedalaman Kalimantan, ia adalah bagian dari roh hutan yang tak terlihat. Keberadaannya lebih menjadi legenda di antara para peneliti dan konservasionis itu sendiri."
  },
  {
    nama: "Lutung Jawa",
    namaIlmiah: "Trachypithecus auratus",
    lokasi: "Jawa",
    statusKonservasi: "Rentan",
    deskripsi: "Monyet pemakan daun dengan rambut hitam legam. Anaknya lahir dengan warna oranye keemasan yang kontras.",
    gambar: "images/lutungjawa.jpg",
    populasi: "Tidak diketahui pasti.",
    tahunPencatatan: 2017,
    kebiasaanUnik: "Warna anak yang cerah diperkirakan untuk menarik perhatian dan perlindungan dari anggota kelompok lain.",
    makanan: "Daun muda, buah-buahan, dan kuncup bunga.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Lutung Jawa adalah tokoh sentral dalam legenda terkenal 'Lutung Kasarung' dari Jawa Barat. Dalam cerita tersebut, seekor lutung sebenarnya adalah pangeran titisan dewa yang membantu seorang putri. Kisah ini memberikan citra positif pada lutung sebagai makhluk yang bijaksana dan penolong."
  },
  {
    nama: "Arwana Asia",
    namaIlmiah: "Scleropages formosus",
    lokasi: "Kalimantan",
    statusKonservasi: "Terancam",
    deskripsi: "Ikan air tawar purba yang sangat dihargai dalam perdagangan ikan hias. Terancam karena penangkapan berlebihan.",
    gambar: "images/arwana.jpg",
    populasi: "Tidak diketahui pasti di alam liar.",
    tahunPencatatan: 2019,
    kebiasaanUnik: "Merupakan 'mouthbrooder', di mana pejantan akan menyimpan telur dan anak-anaknya di dalam mulut.",
    makanan: "Serangga, ikan kecil, dan krustasea.",
    tipeMakanan: "Karnivora",
    hubunganMasyarakat: "Arwana, atau 'Ikan Naga', dipercaya membawa keberuntungan, kemakmuran, dan kesehatan bagi pemiliknya, terutama dalam budaya Tionghoa dan praktik Feng Shui. Harganya yang sangat mahal menjadikannya simbol status. Sayangnya, kepercayaan ini juga mendorong penangkapan liar yang mengancam populasinya di alam."
  },
  {
    nama: "Siamang",
    namaIlmiah: "Symphalangus syndactylus",
    lokasi: "Sumatra",
    statusKonservasi: "Terancam",
    deskripsi: "Kera hitam berlengan panjang, terkenal dengan kantung tenggorokan yang dapat mengembang untuk menghasilkan panggilan keras.",
    gambar: "images/siamang.jpg",
    populasi: "Tidak diketahui pasti, menurun.",
    tahunPencatatan: 2018,
    kebiasaanUnik: "Menghasilkan 'duet' panggilan yang kompleks antara pasangan jantan dan betina.",
    makanan: "Terutama buah-buahan dan daun.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Suara Siamang yang keras dan bergema di pagi hari menjadi penanda waktu bagi masyarakat yang tinggal di dekat hutan. Suaranya yang khas sering dianggap sebagai 'musik alam'. Dalam beberapa cerita rakyat Melayu, Siamang muncul sebagai karakter yang hidup di puncak pohon tinggi, menjadi penjaga atau penghuni kanopi hutan."
  },
  {
    nama: "Merak Hijau",
    namaIlmiah: "Pavo muticus",
    lokasi: "Jawa",
    statusKonservasi: "Terancam",
    deskripsi: "Burung besar yang indah dengan bulu berwarna hijau metalik. Pejantan memiliki ekor yang sangat panjang dan dapat dikembangkan.",
    gambar: "images/merak_hijau.jpg",
    populasi: "Antara 10.000 - 20.000",
    tahunPencatatan: 2016,
    kebiasaanUnik: "Meskipun besar, merak hijau adalah penerbang yang kuat, tidak seperti kerabatnya merak biru.",
    makanan: "Biji-bijian, pucuk rumput, serangga, dan hewan kecil.",
    tipeMakanan: "Omnivora",
    hubunganMasyarakat: "Merak Hijau sering diasosiasikan dengan keindahan, keabadian, dan kebangsawanan dalam budaya Jawa. Bulunya digunakan dalam kostum tarian Reog Ponorogo, melambangkan kekuatan magis. Merak juga muncul dalam relief candi dan menjadi inspirasi dalam motif batik, sebagai simbol kemewahan dan keanggunan."
  },
  {
    nama: "Rangkong Gading",
    namaIlmiah: "Rhinoplax vigil",
    lokasi: "Kalimantan",
    statusKonservasi: "Kritis",
    deskripsi: "Burung rangkong besar yang diburu untuk 'gading' merahnya, yaitu balung padat di atas paruhnya.",
    gambar: "images/rangkong_gading.jpg",
    populasi: "Tidak diketahui pasti, sangat terancam.",
    tahunPencatatan: 2021,
    kebiasaanUnik: "Menghasilkan suara panggilan yang aneh, seperti tawa terbahak-bahak yang keras.",
    makanan: "Buah-buahan, terutama buah ara.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Bagi Suku Dayak, Rangkong Gading (Enggang) adalah 'Panglima Burung'. Dianggap sebagai jelmaan panglima perang dan utusan dari dunia atas. Hampir seluruh bagian tubuhnya digunakan dalam atribut upacara adat. Kepakan sayapnya yang keras dipercaya sebagai tanda kehadiran para dewa. Ia adalah simbol kepemimpinan, kepahlawanan, dan kesetiaan."
  },
  {
    nama: "Kuskus Beruang Sulawesi",
    namaIlmiah: "Ailurops ursinus",
    lokasi: "Sulawesi",
    statusKonservasi: "Rentan",
    deskripsi: "Salah satu marsupial terbesar di Asia, dengan bulu tebal seperti beruang dan ekor prehensil (dapat memegang).",
    gambar: "images/kuskus_beruang.jpg",
    populasi: "Tidak diketahui pasti.",
    tahunPencatatan: 2017,
    kebiasaanUnik: "Bergerak sangat lambat dan menghabiskan sebagian besar hidupnya di atas pohon.",
    makanan: "Dedaunan, terutama daun muda.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Kuskus secara umum sering masuk dalam cerita rakyat sebagai hewan yang lamban namun cerdik. Bagi masyarakat lokal, hewan ini adalah bagian dari ekosistem hutan yang penting. Sayangnya, kuskus juga sering diburu untuk dijadikan hewan peliharaan atau dikonsumsi, meskipun praktik ini ilegal dan mengancam populasinya."
  },
  {
    nama: "Kanguru Pohon Wondiwoi",
    namaIlmiah: "Dendrolagus mayri",
    lokasi: "Papua",
    statusKonservasi: "Kritis",
    deskripsi: "Salah satu mamalia paling langka di dunia, hanya diketahui dari satu spesimen pada tahun 1928 hingga terlihat lagi pada tahun 2018.",
    gambar: "images/kanguru_pohon.jpg",
    populasi: "Diperkirakan kurang dari 50 individu.",
    tahunPencatatan: 2018,
    kebiasaanUnik: "Menghabiskan sebagian besar hidupnya di puncak pohon di hutan pegunungan terpencil.",
    makanan: "Daun, buah, dan bunga.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Bagi suku-suku di Pegunungan Arfak dan Wondiwoi, Kanguru Pohon adalah sumber protein penting dan bagian dari tradisi berburu. Namun, perburuan ini biasanya diatur oleh hukum adat. Statusnya yang sangat langka membuat keberadaannya kini lebih mirip legenda, dan menjadi simbol keterancaman ekosistem hutan pegunungan Papua."
  },
  {
    nama: "Penyu Belimbing",
    namaIlmiah: "Dermochelys coriacea",
    lokasi: "Perairan Indonesia",
    statusKonservasi: "Rentan",
    deskripsi: "Penyu terbesar di dunia, dengan karapas (cangkang) yang lunak dan kenyal seperti kulit, bukan sisik keras.",
    gambar: "images/penyu_belimbing.jpg",
    populasi: "Tidak diketahui pasti, menurun secara global.",
    tahunPencatatan: 2020,
    kebiasaanUnik: "Dapat menyelam sangat dalam, hingga kedalaman lebih dari 1.200 meter.",
    makanan: "Ubur-ubur.",
    tipeMakanan: "Karnivora",
    hubunganMasyarakat: "Di Kepulauan Kei, Maluku, ada tradisi berburu Penyu Belimbing yang diatur oleh hukum adat 'Sasi'. Namun, praktik ini semakin berkurang seiring meningkatnya kesadaran konservasi. Penyu ini dihormati karena ukurannya yang raksasa dan kekuatannya, sering dianggap sebagai 'raja' lautan oleh masyarakat pesisir."
  },
  {
    nama: "Elang Flores",
    namaIlmiah: "Nisaetus floris",
    lokasi: "Nusa Tenggara",
    statusKonservasi: "Kritis",
    deskripsi: "Burung pemangsa yang sangat langka, endemik di kepulauan Sunda Kecil (Flores, Lombok, Sumbawa).",
    gambar: "images/elang_flores.jpg",
    populasi: "Diperkirakan antara 100 - 240 individu dewasa.",
    tahunPencatatan: 2018,
    kebiasaanUnik: "Memiliki jambul yang khas dan sering berburu dari tenggeran tersembunyi di dalam hutan.",
    makanan: "Reptil, burung, dan mamalia kecil.",
    tipeMakanan: "Karnivora",
    hubunganMasyarakat: "Seperti elang lainnya, Elang Flores adalah simbol kekuatan dan keperkasaan. Bagi masyarakat di Flores dan sekitarnya, burung ini adalah penguasa langit yang agung. Kelangkaannya menjadikannya simbol kerapuhan ekosistem pulau-pulau di Nusa Tenggara dan menjadi fokus utama program konservasi lokal."
  },
  {
    nama: "Kambing Hutan Sumatra",
    namaIlmiah: "Capricornis sumatraensis",
    lokasi: "Sumatra",
    statusKonservasi: "Rentan",
    deskripsi: "Mamalia yang mirip kambing namun lebih kekar, hidup di hutan pegunungan yang terjal dan berbatu.",
    gambar: "images/kambing_hutan.jpg",
    populasi: "Tidak diketahui pasti.",
    tahunPencatatan: 2017,
    kebiasaanUnik: "Sangat lincah di medan berbatu dan dapat melompat dari tebing ke tebing.",
    makanan: "Rumput, lumut, dan dedaunan.",
    tipeMakanan: "Herbivora",
    hubunganMasyarakat: "Tidak banyak folklor yang tercatat, namun bagi para pendaki dan masyarakat di sekitar pegunungan seperti Kerinci, Kambing Hutan adalah simbol kelihaian dan daya tahan. Kemampuannya bertahan hidup di medan yang ekstrem membuatnya dihormati. Sayangnya, hewan ini juga menjadi target perburuan liar."
  },
  {
    nama: "Cendrawasih Botak",
    namaIlmiah: "Cicinnurus respublica",
    lokasi: "Papua",
    statusKonservasi: "Hampir Terancam",
    deskripsi: "Burung cendrawasih yang sangat berwarna-warni dengan 'mahkota' biru cerah di kepalanya yang sebenarnya adalah kulit telanjang.",
    gambar: "images/cendrawasih_botak.jpg",
    populasi: "Tidak diketahui pasti.",
    tahunPencatatan: 2016,
    kebiasaanUnik: "Pejantan akan membersihkan 'lantai dansa' di hutan untuk melakukan pertunjukan kawin.",
    makanan: "Buah-buahan dan artropoda kecil.",
    tipeMakanan: "Omnivora",
    hubunganMasyarakat: "Sama seperti Cendrawasih lainnya, spesies ini sangat dihargai oleh masyarakat lokal di Raja Ampat (habitat endemiknya). Burung ini adalah bagian penting dari kekayaan dan keindahan alam yang menjadi daya tarik utama pariwisata. Keunikannya melambangkan keajaiban evolusi dan pentingnya menjaga hutan Papua yang masih asli."
  },
  {
    nama: "Beruk Mentawai",
    namaIlmiah: "Macaca pagensis",
    lokasi: "Sumatra",
    statusKonservasi: "Kritis",
    deskripsi: "Monyet endemik Kepulauan Mentawai. Berbeda dari beruk lain karena memiliki rambut pipi yang lebih gelap dan ekor yang lebih pendek.",
    gambar: "images/beruk_mentawai.jpg",
    populasi: "Antara 2.100 - 3.700",
    tahunPencatatan: 2015,
    kebiasaanUnik: "Memiliki sistem sosial yang kompleks dan sering mencari makan di dekat pemukiman manusia.",
    makanan: "Buah-buahan, biji-bijian, dan invertebrata.",
    tipeMakanan: "Omnivora",
    hubunganMasyarakat: "Bagi masyarakat Mentawai, primata (termasuk Beruk dan Siamang Kerdil) adalah bagian tak terpisahkan dari 'Arat Sabulungan', kepercayaan tradisional mereka. Hewan-hewan ini dianggap memiliki jiwa. Perburuan diatur oleh ritual yang ketat untuk meminta izin dari roh hutan. Namun, modernisasi telah mengikis tradisi ini."
  }
];

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