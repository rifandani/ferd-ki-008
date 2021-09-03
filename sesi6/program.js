function luasKelilingLingkaran(jari_jari) {
  // deklarasi
  const PHI = 3.14;
  let luas, keliling;

  // proses
  luas = PHI * jari_jari ** 2;
  keliling = PHI * (jari_jari * 2);

  // output
  console.log(`Luas: ${luas}, Keliling: ${keliling}`);
  // atau bisa di return
  // return [luas, keliling]
}

luasKelilingLingkaran(10);
