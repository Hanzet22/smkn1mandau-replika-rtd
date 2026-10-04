import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [tampil, setTampil] = useState(false);
  const acuan = useRef(null);

  useEffect(() => {
    // Satu urutan reveal terorkestrasi saat halaman dimuat — bukan animasi berulang
    const waktu = requestAnimationFrame(() => setTampil(true));
    return () => cancelAnimationFrame(waktu);
  }, []);

  return (
    <section
      ref={acuan}
      aria-label="Perkenalan SMK Negeri 1 Mandau"
      className="relative overflow-hidden bg-gradient-to-br from-malam-deep via-malam to-rimba-dark text-white"
    >
      <div
        aria-hidden="true"
        className="batas-ukir absolute top-0 left-0 right-0 h-2"
        style={{
          "--batik-warna-1": "#b85c14",
          "--batik-warna-2": "#f6efe6",
          "--batik-warna-3": "#1a4d2e",
          "--batik-skala": "22"
        }}
      />

      <div className="kontainer-laman relative py-24 md:py-32">
        <div className="max-w-[640px]">
          <p
            className={`font-rapat text-sm tracking-wide text-ukir-light mb-5 transition-all duration-700 ${
              tampil ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            Sekolah Menengah Kejuruan Negeri · Kabupaten Bengkalis, Riau
          </p>

          <h1
            className={`font-judul text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.08] mb-6 transition-all duration-700 delay-100 ${
              tampil ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            Kejuruan yang menyiapkan tangan, bukan hanya nilai rapor.
          </h1>

          <p
            className={`text-lg text-gading/85 leading-relaxed mb-10 transition-all duration-700 delay-200 ${
              tampil ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            SMK Negeri 1 Mandau membekali siswa dengan keahlian praktik industri,
            bimbingan guru produktif, dan jalur langsung menuju dunia kerja maupun
            pendidikan lanjutan.
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
              tampil ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <a href="/program" className="tombol tombol-ukir">
              Lihat program keahlian
            </a>
            <a href="/pengumuman" className="tombol tombol-garis !text-white !border-white/40 hover:!bg-white/10">
              Pengumuman terbaru
            </a>
          </div>
        </div>
      </div>

      {/* Motif batik dekoratif di sisi kanan — hanya terlihat pada layar lebar, tidak mengganggu konten */}
      <div
        aria-hidden="true"
        className="hidden lg:block batas-ukir absolute top-0 right-0 bottom-0 w-[180px] opacity-20"
        style={{
          "--batik-warna-1": "#d9843f",
          "--batik-warna-2": "transparent",
          "--batik-warna-3": "#2d6b45",
          "--batik-skala": "40"
        }}
      />
    </section>
  );
}
