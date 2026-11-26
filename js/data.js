/**
 * PUSAT DATA KONTEN & PATH GAMBAR MUSEUM SETU BABAKAN
 * Mengganti path gambar atau teks di file ini akan otomatis memperbarui
 * bagian Koleksi dan Galeri di seluruh website.
 */

const MUSEUM_DATA = {
  collections: [
    {
      id: "col-01",
      category: "acara-adat",
      categoryLabel: "Acara Adat",
      /* ASSET_ACARA_ADAT_01: Ganti path foto dokumentasi acara adat */
      image: "assets/images/acara-adat/REPLACE_ACARA_01.jpg",
      placeholderLabel: "ASSET_ACARA_ADAT_01 (3:4)",
      /* TEXT_COLLECTION_01: Ganti judul, periode, dan deskripsi koleksi */
      title: "[Judul Dokumentasi Acara Adat 01]",
      period: "[Periode / Kategori Tradisi]",
      description: "Deskripsi singkat mengenai prosesi adat Betawi, makna simbolis, serta konteks pelestariannya di kawasan Setu Babakan."
    },
    {
      id: "col-02",
      category: "pakaian-adat",
      categoryLabel: "Pakaian Adat",
      /* ASSET_PAKAIAN_ADAT_01: Ganti path foto pakaian adat Betawi */
      image: "assets/images/pakaian-adat/REPLACE_PAKAIAN_01.jpg",
      placeholderLabel: "ASSET_PAKAIAN_ADAT_01 (3:4)",
      /* TEXT_COLLECTION_02: Ganti judul, periode, dan deskripsi koleksi */
      title: "[Judul Koleksi Pakaian Adat 01]",
      period: "[Periode / Jenis Busana]",
      description: "Dokumentasi busana tradisional Betawi lengkap dengan detail motif kain, aksesori, dan fungsi sosial dalam upacara."
    },
    {
      id: "col-03",
      category: "tarian",
      categoryLabel: "Seni Tari",
      /* ASSET_TARIAN_01: Ganti path foto tarian Betawi */
      image: "assets/images/tarian/REPLACE_TARIAN_01.jpg",
      placeholderLabel: "ASSET_TARIAN_01 (3:4)",
      /* TEXT_COLLECTION_03: Ganti judul, periode, dan deskripsi koleksi */
      title: "[Judul Dokumentasi Tarian 01]",
      period: "[Jenis Tari Tradisional]",
      description: "Arsip pertunjukan tari tradisional Betawi yang merefleksikan akulturasi gerak, musik pengiring, dan ekspresi masyarakat."
    },
    {
      id: "col-04",
      category: "makanan",
      categoryLabel: "Kuliner Betawi",
      /* ASSET_MAKANAN_01: Ganti path foto kuliner Betawi */
      image: "assets/images/makanan/REPLACE_MAKANAN_01.jpg",
      placeholderLabel: "ASSET_MAKANAN_01 (3:4)",
      /* TEXT_COLLECTION_04: Ganti judul, periode, dan deskripsi koleksi */
      title: "[Judul Kuliner Tradisional 01]",
      period: "[Kategori Hidangan]",
      description: "Dokumentasi warisan gastronomi Betawi, bahan rempah khas, serta nilai kebersamaan dalam penyajiannya."
    },
    {
      id: "col-05",
      category: "museum",
      categoryLabel: "Arsitektur & Artefak",
      /* ASSET_MUSEUM_01: Ganti path foto artefak / interior museum */
      image: "assets/images/museum/REPLACE_MUSEUM_01.jpg",
      placeholderLabel: "ASSET_MUSEUM_01 (3:4)",
      /* TEXT_COLLECTION_05: Ganti judul, periode, dan deskripsi koleksi */
      title: "[Judul Artefak / Ruang Museum 01]",
      period: "[Tahun / Koleksi Tetap]",
      description: "Artefak bersejarah dan elemen arsitektur rumah tradisional Betawi yang terdokumentasi di ruang pamer museum."
    },
    {
      id: "col-06",
      category: "acara-adat",
      categoryLabel: "Acara Adat",
      /* ASSET_ACARA_ADAT_02: Ganti path foto acara adat kedua */
      image: "assets/images/acara-adat/REPLACE_ACARA_02.jpg",
      placeholderLabel: "ASSET_ACARA_ADAT_02 (3:4)",
      /* TEXT_COLLECTION_06: Ganti judul, periode, dan deskripsi koleksi */
      title: "[Judul Dokumentasi Acara Adat 02]",
      period: "[Periode / Kategori Tradisi]",
      description: "Catatan visual rangkaian tradisi siklus hidup masyarakat Betawi yang dirawat lintas generasi."
    }
  ],

  gallery: [
    {
      id: "gal-01",
      category: "museum",
      categoryLabel: "Museum",
      /* ASSET_MUSEUM_GALERI_01: Ganti foto kawasan atau gedung museum */
      image: "assets/images/museum/REPLACE_GALERI_MUSEUM_01.jpg",
      placeholderLabel: "ASSET_MUSEUM_GALERI_01",
      /* TEXT_GALLERY_01: Ganti judul & keterangan foto galeri */
      title: "[Kawasan & Bangunan Museum Setu Babakan]",
      caption: "Dokumentasi area utama museum dan lingkungan cagar budaya Betawi."
    },
    {
      id: "gal-02",
      category: "acara-adat",
      categoryLabel: "Acara Adat",
      /* ASSET_ACARA_ADAT_GALERI_01: Ganti foto acara adat */
      image: "assets/images/acara-adat/REPLACE_GALERI_ACARA_01.jpg",
      placeholderLabel: "ASSET_ACARA_ADAT_GALERI_01",
      /* TEXT_GALLERY_02: Ganti judul & keterangan foto galeri */
      title: "[Prosesi Tradisi & Acara Adat]",
      caption: "Dokumentasi pelaksanaan upacara adat Betawi di area terbuka."
    },
    {
      id: "gal-03",
      category: "tarian",
      categoryLabel: "Tarian",
      /* ASSET_TARIAN_GALERI_01: Ganti foto pertunjukan tari */
      image: "assets/images/tarian/REPLACE_GALERI_TARIAN_01.jpg",
      placeholderLabel: "ASSET_TARIAN_GALERI_01",
      /* TEXT_GALLERY_03: Ganti judul & keterangan foto galeri */
      title: "[Pementasan Seni Tari Betawi]",
      caption: "Penampilan penari tradisional dengan busana dan iringan musik khas."
    },
    {
      id: "gal-04",
      category: "pakaian-adat",
      categoryLabel: "Pakaian Adat",
      /* ASSET_PAKAIAN_ADAT_GALERI_01: Ganti foto detail busana adat */
      image: "assets/images/pakaian-adat/REPLACE_GALERI_PAKAIAN_01.jpg",
      placeholderLabel: "ASSET_PAKAIAN_ADAT_GALERI_01",
      /* TEXT_GALLERY_04: Ganti judul & keterangan foto galeri */
      title: "[Detail Busana & Aksesori Adat]",
      caption: "Ragam pakaian adat Betawi yang dipamerkan sebagai koleksi edukasi."
    },
    {
      id: "gal-05",
      category: "makanan",
      categoryLabel: "Makanan",
      /* ASSET_MAKANAN_GALERI_01: Ganti foto kuliner khas Betawi */
      image: "assets/images/makanan/REPLACE_GALERI_MAKANAN_01.jpg",
      placeholderLabel: "ASSET_MAKANAN_GALERI_01",
      /* TEXT_GALLERY_05: Ganti judul & keterangan foto galeri */
      title: "[Sajian Kuliner Tradisional Betawi]",
      caption: "Dokumentasi ragam makanan dan minuman tradisional khas Setu Babakan."
    },
    {
      id: "gal-06",
      category: "museum",
      categoryLabel: "Museum",
      /* ASSET_MUSEUM_GALERI_02: Ganti foto ruang pamer museum */
      image: "assets/images/museum/REPLACE_GALERI_MUSEUM_02.jpg",
      placeholderLabel: "ASSET_MUSEUM_GALERI_02",
      /* TEXT_GALLERY_06: Ganti judul & keterangan foto galeri */
      title: "[Ruang Pamer & Tata Koleksi]",
      caption: "Suasana interior ruang informasi dan edukasi sejarah Betawi."
    }
  ]
};