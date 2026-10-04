# SMK Negeri 1 Mandau — Replika (Starter Project)

Starter project ini dibangun dengan **Astro + React + Tailwind CSS + CSS Houdini**, untuk dipakai sebagai titik awal pengembangan internal tim developer sekolah. Ini **bukan** situs resmi SMK Negeri 1 Mandau — setiap halaman menampilkan pemberitahuan replika dan tautan ke situs asli.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:4321`.

## Build untuk produksi

```bash
npm run build
npm run preview   # opsional, untuk pratinjau hasil build
```

Hasil build statis ada di folder `dist/`.

## Deploy ke Vercel

Project ini sudah menyertakan `vercel.json`. Cara paling cepat:

1. Push folder ini ke sebuah repository Git (GitHub/GitLab/Bitbucket).
2. Import repository tersebut di [vercel.com/new](https://vercel.com/new).
3. Vercel otomatis mendeteksi framework Astro — tidak perlu konfigurasi tambahan.

Atau lewat Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Struktur folder

```
src/
  components/     Komponen React (.jsx) dan Astro (.astro)
  layouts/        Layout bersama (header, footer, notifikasi replika)
  pages/          Satu file = satu halaman/route
  styles/         CSS global, token desain, setup Houdini
public/
  houdini/        Paint worklet (motif batik)
  scripts/        Deteksi fitur (WebGPU, Houdini)
  fonts/          (kosongkan — font dimuat dari Google Fonts via <link>)
```

## ⚠️ Yang WAJIB diisi sebelum publikasi

Seluruh konten teks di bawah ini adalah **placeholder**, ditandai dengan tanda kurung siku `[...]`. Cari dan ganti sebelum deploy ke publik:

| Halaman | Yang perlu diisi |
|---|---|
| `src/pages/profil.astro` | Sejarah, visi, misi, akreditasi, alamat, kontak |
| `src/pages/program.astro` → `DaftarProgram.jsx` | Nama program keahlian, rumpun, deskripsi, kompetensi |
| `src/pages/pengumuman.astro` | Daftar pengumuman nyata (atau hubungkan ke CMS/API) |
| `src/components/StatistikSingkat.astro` | Jumlah program, guru, siswa, mitra industri |
| `src/components/PratinjauProgram.astro` | Nama & deskripsi 3 program unggulan di beranda |

Disarankan memindahkan data program/pengumuman ke file JSON/CMS terpisah begitu sudah ada sumber data resmi, supaya tidak hardcode di komponen.

## Tentang implementasi teknis

- **Astro** — routing berbasis file, output statis (`output: "static"`), ringan dan cepat.
- **React** — dipakai hanya pada bagian yang butuh interaktivitas (notifikasi replika, hero reveal, filter program), lewat `client:load`. Sisanya murni `.astro` (server-rendered, nol JS tambahan).
- **Tailwind CSS** — token warna/font custom didefinisikan di `tailwind.config.mjs`.
- **CSS Houdini** — `public/houdini/batik-paint-worklet.js` melukis motif garis parang sebagai pembatas bagian (`background: paint(batik-rangkai)`), didaftarkan lewat `CSS.paintWorklet.addModule()`. Peramban tanpa dukungan Houdini otomatis memakai cadangan gradasi linear (lihat `.batas-ukir` di `src/styles/global.css`).
- **Deteksi WebGPU** — `public/scripts/deteksi-fitur.js` memeriksa `navigator.gpu` dan menambahkan kelas `dukung-webgpu` / `tanpa-webgpu` pada `<html>`, serta menampilkan status di footer. Ini murni deteksi kemampuan perangkat, bukan gatekeeping — situs tetap berfungsi penuh tanpa WebGPU.
- **Aksesibilitas** — fokus keyboard terlihat jelas, `prefers-reduced-motion` dihormati, kontras warna disesuaikan standar WCAG AA, struktur heading semantik.

## Lisensi font

Josefin Sans, Paprika, dan Pragati Narrow — ketiganya tersedia bebas lewat Google Fonts di bawah SIL Open Font License, dimuat langsung lewat tag `<link>` di `src/layouts/LayoutUtama.astro`.
