import { useMemo, useState } from "react";

// Placeholder struktur program — tim dev: ganti dengan daftar jurusan resmi,
// termasuk kategori rumpun keahlian yang sesuai (mis. Teknologi, Bisnis, dll).
const DATA_PROGRAM = [
  {
    id: "p1",
    nama: "[Nama Program Keahlian 1]",
    rumpun: "Teknologi",
    deskripsi: "[Ringkasan kompetensi inti dan peluang karier lulusan.]",
    kompetensi: ["[Kompetensi A]", "[Kompetensi B]", "[Kompetensi C]"]
  },
  {
    id: "p2",
    nama: "[Nama Program Keahlian 2]",
    rumpun: "Teknologi",
    deskripsi: "[Ringkasan kompetensi inti dan peluang karier lulusan.]",
    kompetensi: ["[Kompetensi A]", "[Kompetensi B]"]
  },
  {
    id: "p3",
    nama: "[Nama Program Keahlian 3]",
    rumpun: "Bisnis",
    deskripsi: "[Ringkasan kompetensi inti dan peluang karier lulusan.]",
    kompetensi: ["[Kompetensi A]", "[Kompetensi B]", "[Kompetensi C]"]
  },
  {
    id: "p4",
    nama: "[Nama Program Keahlian 4]",
    rumpun: "Bisnis",
    deskripsi: "[Ringkasan kompetensi inti dan peluang karier lulusan.]",
    kompetensi: ["[Kompetensi A]", "[Kompetensi B]"]
  }
];

const RUMPUN = ["Semua", "Teknologi", "Bisnis"];

export default function DaftarProgram() {
  const [rumpunAktif, setRumpunAktif] = useState("Semua");

  const programTersaring = useMemo(() => {
    if (rumpunAktif === "Semua") return DATA_PROGRAM;
    return DATA_PROGRAM.filter((p) => p.rumpun === rumpunAktif);
  }, [rumpunAktif]);

  return (
    <div>
      <div
        role="group"
        aria-label="Saring berdasarkan rumpun keahlian"
        className="flex flex-wrap gap-2 mb-10"
      >
        {RUMPUN.map((r) => {
          const aktif = r === rumpunAktif;
          return (
            <button
              key={r}
              onClick={() => setRumpunAktif(r)}
              aria-pressed={aktif}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                aktif
                  ? "bg-malam text-white border-malam"
                  : "bg-transparent text-malam border-malam/25 hover:border-malam/60"
              }`}
            >
              {r}
            </button>
          );
        })}
      </div>

      <p className="text-sm text-tinta-pudar/70 mb-6" aria-live="polite">
        Menampilkan {programTersaring.length} program keahlian
        {rumpunAktif !== "Semua" ? ` dalam rumpun ${rumpunAktif}` : ""}.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {programTersaring.map((p) => (
          <article key={p.id} className="kartu">
            <p className="font-rapat text-xs text-ukir mb-2">{p.rumpun}</p>
            <h3 className="font-judul text-xl text-malam mb-2">{p.nama}</h3>
            <p className="text-sm text-tinta-pudar leading-relaxed mb-4">{p.deskripsi}</p>
            <ul className="flex flex-wrap gap-2">
              {p.kompetensi.map((k) => (
                <li
                  key={k}
                  className="text-xs bg-gading text-malam px-3 py-1.5 rounded-full border border-malam/10"
                >
                  {k}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
