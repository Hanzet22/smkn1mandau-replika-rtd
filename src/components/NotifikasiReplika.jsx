import { useState, useEffect } from "react";

const KUNCI_SIMPAN = "smkn1mandau-replika-notifikasi-dilihat";

export default function NotifikasiReplika() {
  const [tampil, setTampil] = useState(false);

  useEffect(() => {
    try {
      const sudahLihat = sessionStorage.getItem(KUNCI_SIMPAN);
      if (!sudahLihat) {
        setTampil(true);
      }
    } catch {
      // Jika sessionStorage diblokir (mode privat ketat), tetap tampilkan sekali
      setTampil(true);
    }
  }, []);

  function tutup() {
    setTampil(false);
    try {
      sessionStorage.setItem(KUNCI_SIMPAN, "1");
    } catch {
      /* diamkan */
    }
  }

  if (!tampil) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className="relative z-[200] bg-malam-deep text-kapas border-b-2 border-ukir"
    >
      <div className="kontainer-laman flex items-center gap-3 py-3 text-sm flex-wrap">
        <span aria-hidden="true" className="text-ukir-light text-base leading-none">●</span>
        <p className="flex-1 min-w-[240px]">
          Ini adalah situs replika dan bukan situs resmi. Untuk situs asli, kunjungi{" "}
          <a
            href="https://www.smkn1mandau.sch.id/?m=1"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-ukir-light underline-offset-2 text-ukir-light hover:text-white"
          >
            smkn1mandau.sch.id
          </a>
          .
        </p>
        <button
          onClick={tutup}
          aria-label="Tutup pemberitahuan"
          className="shrink-0 w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10 transition-colors text-lg leading-none"
        >
          ×
        </button>
      </div>
    </div>
  );
}
