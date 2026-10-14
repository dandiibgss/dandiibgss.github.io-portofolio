/* ==========================================================
   DATA PORTOFOLIO — edit file ini saja untuk mengganti isi web.
   ========================================================== */

/* ---------- Data pribadi (ganti semua yang berkurung siku) ---------- */
const PROFILE = {
  name: "Dandi Bagus Setiawan",
  nickname: "Dandi",
  campus: "PENS (Politeknik Elektronika Negeri Surabaya)",
  major: "Teknik Rekayasa Multimedia",
  semester: "5",
  // Judul besar di bagian Home (hero) — ganti sesukamu
  heroTitle: "Multimedia Engineering Technology",
  target: "web dev / desain / motion / video",
  // Quotes di bagian About — ganti dengan kutipan favoritmu
  quote: "Karya yang baik lahir dari rasa ingin tahu dan kebiasaan mencoba lagi.",
  // Bio singkat di bagian About
  bio: "Mahasiswa Teknologi Rekayasa Multimedia di PENS dengan keterampilan di bidang desain grafis, UI/UX, dan pengembangan web. Berpengalaman mengerjakan proyek berbasis web, aplikasi augmented reality, dan visual novel interaktif. Disiplin, mudah beradaptasi, dan siap belajar hal baru di lingkungan kerja profesional.",
  // Skill badges di About. abbr = singkatan di ikon, color = warna ikon.
  skills: [
    { name: "HTML", abbr: "H", color: "#E34F26" },
    { name: "CSS", abbr: "C", color: "#1572B6" },
    { name: "JavaScript", abbr: "JS", color: "#F7DF1E", dark: true },
  ],
  // Tools di About. file = nama file di assets/tolkit
  tools: [
    { name: "Figma", file: "Download Figma Logo Icon Figma App Editable Transparent Background Premium Social Media Design for Digital Download_.jpg" },
    { name: "VS Code", file: "Visual Studio Code - Download and install on Windows _ Microsoft Store.jpg" },
    { name: "Illustrator", file: "illustrator.png" },
  ],
  contact: {
    email: "dandiisetiawan32@gmail.com",
    github: "https://github.com/dandiibgss",
    instagram: "https://www.instagram.com/dandiibgs",
  },
};

/* ---------- Daftar proyek ----------
   Tambah proyek baru = tambah satu objek di array ini.
   - category : "Desain" | "Video" | "Animasi" | "Web"
   - semester : angka (tidak ditampilkan di halaman)
   - media    : { type: "image" | "video", src: "...", alt: "..." }
                (untuk beberapa foto: tambahkan images: [{ src, alt }, ...] di dalam media)
                (video boleh pakai poster: "path/gambar.jpg")
   - link     : URL proyek, atau "" bila tidak ada
   - details  : (opsional) info tambahan di jendela detail:
                features (daftar), tech (grup teknologi), typefaces, palette
*/
const PROJECTS = [
  {
    id: "lokalreads",
    title: "LokalReads",
    category: "Web",
    semester: 5,
    role: "Programmer",
    tools: ["HTML5", "CSS3", "JavaScript", "Web API Browser"],
    thumbnail: "assets/images/work/website.png",
    media: { type: "image", src: "assets/images/work/website.png", alt: "Tampilan beranda website LokalReads" },
    description:
      "LokalReads merupakan platform e-book berbasis web yang memudahkan pengguna untuk membaca berbagai karya dari penulis lokal Indonesia. Platform ini hadir sebagai wadah modern dan interaktif yang menghimpun ribuan karya literasi digital dalam satu tempat, sekaligus menjembatani para pembaca dengan koleksi buku-buku populer. Dilengkapi dengan sistem akses pengguna (fitur Masuk dan Daftar), LokalReads dirancang untuk memberikan pengalaman membaca yang nyaman serta mendukung kemajuan ekosistem literasi karya anak bangsa.",
    link: "https://dandiibgss.github.io/frontend-LokalReads/",
    details: {
      myRole: {
        title: "Programmer",
        text:
          "LokalReads dikerjakan oleh tim berisi lima orang: dua programmer dan tiga anggota kreatif. Dalam tim ini saya berperan sebagai programmer. Bersama satu programmer lainnya, saya bertanggung jawab mengubah rancangan dan konsep dari tim kreatif menjadi website yang berfungsi, mulai dari struktur halaman, tampilan, hingga interaktivitasnya. Kolaborasi yang erat dengan tim kreatif membuat hasil akhirnya tetap sejalan dengan desain yang sudah dirancang.",
      },
      features: [
        "Personalisasi Pendaftaran: pengguna wajib memilih 3 genre favorit di awal.",
        "Katalog Buku Lokal: akses mudah ke daftar karya-karya buku.",
        "Detail Komprehensif: menampilkan sampul, sinopsis lengkap, dan info penulis.",
        "Ulasan Komunitas: fitur interaktif untuk memberi rating bintang (1-5) dan komentar.",
      ],
      tech: [
        {
          group: "Frontend",
          items: [
            ["HTML5", "Struktur halaman"],
            ["CSS3", "Styling & layout"],
            ["JavaScript", "Interaktivitas"],
            ["Web API Browser", "Menyimpan data aplikasi"],
          ],
        },
      ],
      typefaces: [
        {
          name: "PP Writer Bold",
          notes: ["Untuk headline dan call-to-action", "Font logotype LokalReads", "Memberi kesan klasik"],
        },
        {
          name: "SF Pro Display",
          notes: [
            "Digunakan untuk keseluruhan tampilan UI",
            "Menggunakan semua family font (Regular, Medium, Bold)",
            "Mudah dibaca, keterbacaannya bagus",
          ],
        },
      ],
      palette: {
        colors: [
          { hex: "#FFFCF2", name: "Floral White" },
          { hex: "#CCC5B9", name: "Dust Grey" },
          { hex: "#403D39", name: "Charcoal Brown" },
          { hex: "#252422", name: "Carbon Black" },
        ],
        note: "LokalReads mengusung palet monokromatik untuk menciptakan tampilan yang clean dan minimalis bagi pembaca.",
      },
    },
  },
  {
    id: "surabaya-stride",
    title: "Surabaya Stride",
    category: "Desain",
    semester: 4,
    role: "UI/UX Designer",
    tools: ["Figma"],
    thumbnail: "assets/images/work/surabaya-stride.png",
    // type "embed" = prototype Figma interaktif di jendela detail
    media: {
      type: "embed",
      src: "https://embed.figma.com/proto/UTsT1Hbg41Xc7M3A5NgDOA/web-ku?node-id=1-45&starting-point-node-id=1%3A45&scaling=scale-down-width&content-scaling=fixed&embed-host=share",
      alt: "Prototype interaktif website Surabaya Stride",
    },
    description:
      "Surabaya Stride adalah rancangan website komunitas lari untuk kota Surabaya, dengan slogan \"Run Your City, Define Your Stride\". Website ini dirancang sebagai wadah yang menghubungkan para pelari, komunitas, acara lari, dan inspirasi gaya hidup aktif di satu tempat.\n\n" +
      "Project ini adalah tugas mata kuliah Desain UI/UX di semester 4. Seluruh rancangan dibuat di Figma dan berupa prototype interaktif: navigasi terdiri dari Home, Runner, Lifestyle, Fit, dan Planner, lengkap dengan alur Log in dan Daftar. Coba prototype-nya langsung di atas.",
    link: "https://www.figma.com/proto/UTsT1Hbg41Xc7M3A5NgDOA/web-ku?node-id=1-45&starting-point-node-id=1%3A45&scaling=scale-down-width&content-scaling=fixed",
  },
  {
    id: "pensight",
    title: "PENSIGHT",
    category: "Web",
    semester: 5,
    thumbnail: "assets/images/work/AR%20PENSIGHT%20(Info%20ruangan%20di%20kampus%20PENS).png",
    // images = beberapa foto: di jendela detail tampil sebagai slide (geser / tombol panah)
    media: {
      type: "image",
      src: "assets/images/work/AR%20PENSIGHT%20(Info%20ruangan%20di%20kampus%20PENS).png",
      alt: "Halaman awal PENSIGHT: Information Room PENS",
      images: [
        { src: "assets/images/work/AR%20PENSIGHT%20(Info%20ruangan%20di%20kampus%20PENS).png", alt: "Halaman awal PENSIGHT: Information Room PENS" },
        { src: "assets/images/work/pensigt2.jpeg", alt: "Papan info AR Auditorium muncul di atas marker, dengan tombol Lihat info" },
        { src: "assets/images/work/pensigt3.jpeg", alt: "Panel info ruangan Auditorium: nama, deskripsi, dan fasilitas" },
      ],
    },
    description:
      "PENSIGHT adalah platform informasi ruangan berbasis Augmented Reality (AR) untuk kampus PENS. Cukup arahkan kamera HP ke marker di depan ruangan, lalu papan info virtual muncul melayang di atas marker, lengkap dengan nama ruangan, fungsi, dan fasilitasnya.\n\n" +
      "Aplikasinya berjalan langsung di browser (WebAR), jadi mahasiswa, dosen, maupun pengunjung bisa memakainya tanpa menginstal aplikasi. Project ini dibuat sebagai tugas kuliah oleh tim mahasiswa TRM A 2024 PENS.",
    tools: ["HTML", "CSS", "JavaScript", "A-Frame", "MindAR"],
    link: "https://rzainurtanto.met.student.pens.ac.id/PENSIGHT/",
    details: {
      features: [
        "23 marker untuk 17 lokasi kampus: lab multimedia, ruang dosen, auditorium, perpustakaan, mushola, mini teater, data center, cafetaria, dan lainnya",
        "Saat marker terdeteksi, papan info AR muncul melayang dan tombol \"Lihat info\" tampil otomatis",
        "Panel info ruangan (kode ruang, nama, deskripsi, fasilitas) yang tetap terbaca walau kamera digeser",
        "Halaman tutorial dengan video cara menggunakan",
        "Berjalan di browser HP tanpa perlu instalasi aplikasi",
      ],
      tech: [
        {
          group: "Frontend",
          items: [
            ["HTML, CSS, dan JavaScript", "Struktur halaman, tampilan, dan interaktivitas"],
          ],
        },
        {
          group: "Augmented Reality di browser",
          items: [
            ["A-Frame", "Framework WebXR"],
            ["MindAR", "Image tracking"],
          ],
        },
      ],
    },
  },
  {
    id: "m2convert",
    title: "M2Convert",
    category: "Web",
    semester: 5,
    tools: ["FFmpeg", "Node.js", "HTML", "CSS", "JavaScript"],
    thumbnail: "assets/images/work/m2convert.png",
    media: { type: "image", src: "assets/images/work/m2convert.png", alt: "Tampilan aplikasi M2Convert: Video Converter" },
    description:
      "Dengan bangga saya membagikan hasil proyek individu untuk mata kuliah Jaringan Multimedia. Saya mengembangkan M2Convert, sebuah platform berbasis web yang dirancang untuk mempermudah proses konversi, kompresi, serta penggabungan file media secara efisien.\n\n" +
      "Mengusung slogan \"Convert. Merge. Done.\", M2Convert menghadirkan solusi serba ada dalam satu tampilan intuitif. Melalui platform ini, pengguna dapat dengan mudah mengubah format video dan audio, mengompres ukuran file, menggabungkan video dengan audio, hingga melihat informasi detail dari file media secara praktis.",
    link: "",
    details: {
      steps: [
        { title: "Upload Media", text: "Pengguna mengunggah file video/audio (drag & drop atau browse file) ke dalam platform." },
        { title: "Konfigurasi Parameter", text: "Pengguna memilih opsi aksi (konversi, kompresi, atau merge), menentukan format keluaran, serta mengatur tingkat kualitas/codec yang diinginkan." },
        { title: "Pemrosesan Sisi Server (Backend)", text: "File diolah di balik layar menggunakan kombinasi teknologi Node.js dan utilitas FFmpeg untuk mengeksekusi konversi serta kompresi media." },
        { title: "Unduh Hasil", text: "Setelah proses selesai, pengguna dapat langsung mengunduh file media yang sudah diproses dengan ukuran dan format baru." },
      ],
      features: [
        "Video Convert: mengubah video ke berbagai format (MP4, MKV, AVI, WebM, MOV, 3GP) dengan opsi kompresi AV1.",
        "Unggah mudah: tarik dan lepas (drag & drop) file atau pilih lewat tombol browse, hingga maksimal 2 GB.",
        "Quality Preset: slider kualitas dari Low, Medium, sampai High untuk menyeimbangkan ukuran dan hasil.",
        "AV1 Compression: opsi kompresi dengan codec AV1 agar ukuran file lebih kecil dengan kualitas tetap terjaga.",
        "Audio Convert: konversi format file audio.",
        "Merge V+A: menggabungkan video dan audio menjadi satu file.",
        "Media Info: melihat informasi detail dari file media.",
        "Indikator status backend: menunjukkan apakah server pemrosesan sedang aktif atau offline.",
      ],
    },
  },
  {
    id: "desain-portofolio",
    title: "Desain Website Portofolio",
    category: "Desain",
    semester: 4,
    role: "UI/UX Designer",
    tools: ["Figma"],
    thumbnail: "assets/images/work/desain-portofolio.png",
    media: {
      type: "embed",
      src: "https://embed.figma.com/proto/PeC83yq7vijcXC8mGBs3Bw/Portofolio?node-id=1-2&starting-point-node-id=1%3A2&embed-host=share",
      alt: "Prototype interaktif desain website portofolio",
    },
    description:
      "Rancangan UI/UX untuk website portofolio pribadi, dibuat sebagai tugas mata kuliah Desain UI/UX di semester 4. Desain ini disusun di Figma sebagai prototype interaktif yang bisa dicoba langsung di atas.\n\n" +
      "Desainnya bertema gelap dengan aksen merah. Halaman utamanya membuka dengan headline \"Membangun Pengalaman Digital yang Fungsional & Imersif\", perkenalan singkat sebagai mahasiswa Teknologi Rekayasa Multimedia, dan foto saya mengenakan headset VR untuk menonjolkan sisi multimedia. Navigasinya sederhana, dengan menu Karya dan Profil.",
    link: "https://www.figma.com/proto/PeC83yq7vijcXC8mGBs3Bw/Portofolio?node-id=1-2&starting-point-node-id=1%3A2",
  },
  {
    id: "asal-usul-kediri",
    title: "Asal Usul Kediri",
    category: "Visual Novel Interaktif",
    semester: 2,
    role: "Sound Designer & Programmer Pendukung",
    tools: ["VS Code", "Ren'Py"],
    thumbnail: "assets/images/work/asal-usul-kediri.png",
    media: { type: "image", src: "assets/images/work/asal-usul-kediri.png", alt: "Menu utama game visual novel Asal Usul Kediri: gerbang kerajaan dan arca penjaga" },
    description:
      "Asal Usul Kediri adalah game visual novel interaktif yang mengangkat sejarah dan asal-usul Kota Kediri lewat cerita bergambar. Pemain mengikuti alur cerita dan menjelajahi latar kerajaan dengan menu Mulai, Muat, Setting, Tentang, dan Bantuan. Game ini dikerjakan secara berkelompok pada semester 2 dan dipublikasikan di itch.io.\n\n" +
      "Apa itu visual novel interaktif? Visual novel interaktif adalah jenis game berbasis cerita yang menyajikan narasi dalam bentuk teks, gambar (biasanya ilustrasi bergaya anime atau komik), musik, dan kadang suara pengisi suara. Pemain \"membaca\" cerita seperti novel, tetapi dengan dukungan visual dan audio yang membangun suasana.\n\n" +
      "Berbeda dengan visual novel kinetik yang hanya dibaca dari awal sampai akhir tanpa pilihan, visual novel interaktif memberi pemain kendali atas jalannya cerita. Di titik-titik tertentu pemain memilih dialog, tindakan, atau keputusan, dan pilihan itu bisa memengaruhi hubungan dengan karakter lain, arah plot, bahkan ending yang didapat.",
    link: "https://argusknight10.itch.io/asal-usul-kota-kediri",
    details: {
      myRole: {
        title: "Sound Designer & Programmer Pendukung",
        text:
          "Di tim ini saya bertugas mengatur SFX dan BGM, yaitu memilih dan memasang musik latar serta efek suara agar suasana tiap adegan terasa hidup. Saya juga membantu programmer dalam pengerjaan game.",
      },
    },
  },
];
