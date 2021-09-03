/* ----------------------------------------- pseudocode ----------------------------------------- */
// GET "jari_jari" from the input
// STORE "phi" to 3.14
// STORE "luas" without any value
// STORE "keliling" without any value

// CALCULATE "luas" as "phi" times "jari_jari" times "jari_jari"
// CALCULATE "keliling" as "phi" times "jari_jari" times "2"

// DISPLAY "luas" and "keliling"

/* ------------------------------------------- program ------------------------------------------ */
function luasKelilingLingkaran(jari_jari) {
  // deklarasi
  const PHI = 3.14;
  let luas, keliling;

  // proses
  luas = PHI * jari_jari ** 2;
  keliling = PHI * (jari_jari * 2);

  // output
  console.log(`Luas: ${luas}, Keliling: ${keliling}`);
}

luasKelilingLingkaran(10);
