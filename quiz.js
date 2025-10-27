// Kelas induk
class Karyawan {
  constructor(nama, gaji) {
    this.nama = nama;
    this.gaji = gaji;
  }

  hitungBonus() {
    // Akan dioverride oleh subclass
    return 0;
  }
}

// Kelas turunan untuk Karyawan Tetap
class KaryawanTetap extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.10; // 10% dari gaji
  }
}

// Kelas turunan untuk Karyawan Kontrak
class KaryawanKontrak extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.05; // 5% dari gaji
  }
}

// Membuat objek karyawan
const karyawan1 = new KaryawanTetap("Budi", 8000000);
const karyawan2 = new KaryawanKontrak("Sita", 6000000);

// Daftar karyawan
const daftarKaryawan = [karyawan1, karyawan2];

// Hitung total bonus secara dinamis (polymorphism)
let totalBonus = 0;
daftarKaryawan.forEach(karyawan => {
  const bonus = karyawan.hitungBonus();
  console.log(`${karyawan.nama} mendapatkan bonus: Rp${bonus.toLocaleString()}`);
  totalBonus += bonus;
});

console.log(`\nTotal bonus semua karyawan: Rp${totalBonus.toLocaleString()}`);
