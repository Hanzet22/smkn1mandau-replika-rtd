/**
 * SMKN 1 Mandau — Replika
 * Deteksi dukungan perangkat: CSS Houdini Paint API & WebGPU.
 * Menambahkan kelas pada <html> supaya CSS/komponen bisa menyesuaikan
 * tanpa memblokir render (progressive enhancement, bukan gatekeeping).
 */
(function () {
  const root = document.documentElement;

  // --- Houdini Paint Worklet ---
  if ("paintWorklet" in CSS) {
    try {
      CSS.paintWorklet.addModule("/houdini/batik-paint-worklet.js");
      root.classList.add("dukung-houdini");
    } catch (err) {
      root.classList.add("tanpa-houdini");
    }
  } else {
    root.classList.add("tanpa-houdini");
  }

  // --- WebGPU ---
  async function periksaWebGPU() {
    if (!("gpu" in navigator)) {
      root.classList.add("tanpa-webgpu");
      return;
    }
    try {
      const adapter = await navigator.gpu.requestAdapter();
      if (adapter) {
        root.classList.add("dukung-webgpu");
      } else {
        root.classList.add("tanpa-webgpu");
      }
    } catch (err) {
      root.classList.add("tanpa-webgpu");
    }
  }
  periksaWebGPU();

  // --- Siarkan status ke elemen penampung status perangkat (opsional, dipakai Footer) ---
  window.addEventListener("DOMContentLoaded", () => {
    const penampung = document.querySelector("[data-status-perangkat]");
    if (!penampung) return;
    requestAnimationFrame(() => {
      setTimeout(() => {
        const webgpuOk = root.classList.contains("dukung-webgpu");
        const houdiniOk = root.classList.contains("dukung-houdini");
        penampung.textContent = `Perangkat Anda ${webgpuOk ? "mendukung" : "belum mendukung"} WebGPU · ${houdiniOk ? "mendukung" : "memakai cadangan"} efek Houdini`;
      }, 150);
    });
  });
})();
