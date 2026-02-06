# SDIT Al-Hikmah - Website Profil Sekolah

Website profil Sekolah Dasar Islam Terpadu Al-Hikmah. Website ini dibangun dengan teknologi modern dan responsif untuk menampilkan informasi lengkap tentang sekolah.

## Fitur Utama

- **Responsive Design** - Tampilan optimal di desktop, tablet, dan mobile
- **Modern UI/UX** - Desain clean dengan Tailwind CSS
- **Interactive Components** - Animasi dan interaktivitas dengan Alpine.js
- **No Database Required** - Pure HTML/CSS/JS static website
- **SEO Friendly** - Meta tags dan struktur semantic HTML
- **Fast Loading** - Optimized assets dan CDN

## Halaman Website

1. **Beranda (index.html)** - Hero section, sambutan kepala sekolah, keunggulan, statistik, berita terbaru
2. **Profil (profil.html)** - Sejarah sekolah, visi & misi, struktur organisasi
3. **Program (program.html)** - Kurikulum Islam terpadu, ekstrakurikuler, jadwal pembelajaran
4. **Fasilitas (fasilitas.html)** - Sarana dan prasarana lengkap dengan gambar
5. **Guru & Staff (tenaga-pendidik.html)** - Profil tenaga pendidik dengan filter
6. **Galeri (galeri.html)** - Dokumentasi foto kegiatan dengan lightbox
7. **Berita (berita.html)** - Daftar berita dan kegiatan terbaru
8. **Detail Berita (berita-detail.html)** - Halaman detail artikel berita
9. **Kontak (kontak.html)** - Informasi kontak, peta lokasi, form WhatsApp

## Teknologi yang Digunakan

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Alpine.js** - Lightweight JavaScript framework (via CDN)
- **Font Awesome** - Icons library
- **Google Fonts** - Poppins & Inter fonts

## Struktur Folder

```
sdit/
├── index.html                # Halaman beranda
├── profil.html               # Halaman profil
├── program.html              # Halaman program
├── fasilitas.html            # Halaman fasilitas
├── tenaga-pendidik.html      # Halaman guru & staff
├── galeri.html               # Halaman galeri
├── berita.html               # Halaman daftar berita
├── berita-detail.html        # Halaman detail berita
├── kontak.html               # Halaman kontak
├── css/
│   └── custom.css            # Custom styles
├── js/
│   └── app.js                # JavaScript components
└── assets/
    └── images/
        ├── hero/             # Gambar hero section
        ├── profil/           # Gambar profil
        ├── fasilitas/        # Gambar fasilitas
        ├── galeri/           # Gambar galeri (12 foto)
        ├── guru/             # Foto guru & staff
        └── berita/           # Gambar berita
```

## Kustomisasi

### Mengubah Warna

Edit file `index.html` (dan halaman lainnya), cari bagian:

```
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: '#059669',    // Ubah warna utama
                    secondary: '#F59E0B',  // Ubah warna sekunder
                    dark: '#1F2937',
                }
            }
        }
    }
</script>
```

### Mengubah Konten

- **Text/Copy**: Edit langsung di file HTML
- **Gambar**: Ganti file di folder `assets/images/`
- **Informasi Kontak**: Edit di `kontak.html`
- **Data Guru**: Edit di `tenaga-pendidik.html`

### Mengubah Nomor WhatsApp

Edit di file `js/app.js`, cari:

```
Alpine.data('whatsappForm', () => ({
    // ...
    phone: '6281234567890', // Ganti dengan nomor WhatsApp Anda
    // ...
}));
```

## 📱 Fitur Interaktif

- **Mobile Menu** - Hamburger menu dengan animasi
- **Sticky Header** - Navbar yang menempel saat scroll
- **Counter Animation** - Animasi angka di section statistik
- **Filter Gallery** - Filter foto berdasarkan kategori
- **Lightbox** - Preview foto besar dengan navigasi
- **Filter Teacher** - Filter guru/karyawan
- **Scroll to Top** - Tombol kembali ke atas
- **WhatsApp Integration** - Form kontak ke WhatsApp
- **Smooth Scroll** - Navigasi halus antar section

## Assets Gambar

Website ini menggunakan gambar dari:
- **Unsplash** (https://unsplash.com) - Free stock photos
