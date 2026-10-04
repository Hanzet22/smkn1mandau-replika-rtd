/**
 * SMKN 1 Mandau — Replika
 * CSS Houdini Paint Worklet: "batik-rangkai"
 *
 * Melukis motif garis parang berulang (gelombang diagonal khas batik)
 * sebagai pembatas bagian, dipakai lewat: background: paint(batik-rangkai)
 *
 * Didaftarkan lewat registerPaint() — API Houdini CSS Paint (CSS-TAG, bukan canvas <img>).
 * Jika peramban tidak mendukung Houdini, CSS induk sudah menyediakan
 * jatuh-balik gradasi linear (lihat src/styles/global.css .batas-ukir).
 */
class BatikRangkaiPainter {
  static get inputProperties() {
    return ["--batik-warna-1", "--batik-warna-2", "--batik-warna-3", "--batik-skala"];
  }

  paint(ctx, size, properties) {
    const warna1 = properties.get("--batik-warna-1").toString().trim() || "#b85c14";
    const warna2 = properties.get("--batik-warna-2").toString().trim() || "#f6efe6";
    const warna3 = properties.get("--batik-warna-3").toString().trim() || "#1a4d2e";
    const skalaRaw = properties.get("--batik-skala").toString().trim();
    const skala = parseFloat(skalaRaw) || 36;

    const w = size.width;
    const h = size.height;

    // Latar dasar
    ctx.fillStyle = warna2;
    ctx.fillRect(0, 0, w, h);

    // Motif parang: garis diagonal berulang yang membentuk pola zig-zag khas batik
    const langkah = skala;
    ctx.strokeStyle = warna1;
    ctx.lineWidth = Math.max(2, skala * 0.12);
    ctx.lineCap = "round";

    for (let x = -h; x < w + h; x += langkah) {
      ctx.beginPath();
      ctx.moveTo(x, h);
      ctx.lineTo(x + h, 0);
      ctx.stroke();
    }

    // Lapisan kedua — garis tipis warna rimba, offset setengah langkah, arah berlawanan
    ctx.strokeStyle = warna3;
    ctx.lineWidth = Math.max(1, skala * 0.06);
    for (let x = -h; x < w + h; x += langkah) {
      ctx.beginPath();
      ctx.moveTo(x + langkah / 2, h);
      ctx.lineTo(x + langkah / 2 - h, 0);
      ctx.stroke();
    }

    // Titik-titik kecil di persilangan — aksen ukiran
    ctx.fillStyle = warna1;
    for (let x = 0; x < w; x += langkah) {
      for (let y = 0; y < h; y += langkah) {
        ctx.beginPath();
        ctx.arc(x, y, Math.max(1, skala * 0.045), 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}

registerPaint("batik-rangkai", BatikRangkaiPainter);
