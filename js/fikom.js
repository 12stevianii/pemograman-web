const jurusanData = [
  { kode: 'TI01', nama: 'Teknik Informatika', mahasiswa: 1200, dosen: 45, akreditasi: 'A' },
  { kode: 'SI02', nama: 'Sistem Informasi', mahasiswa: 500, dosen: 25, akreditasi: 'B' },
  { kode: 'MI03', nama: 'Manajemen Informatika', mahasiswa: 220, dosen: 10, akreditasi: 'B' },
  { kode: 'TK04', nama: 'Teknologi Komputer', mahasiswa: 145, dosen: 8, akreditasi: 'C' },
];

let totalMahasiswa = 0;
let totalDosen = 0;

const jurusanList = document.getElementById('jurusanList');

jurusanData.forEach(jurusan => {
  totalMahasiswa += jurusan.mahasiswa;
  totalDosen += jurusan.dosen;

  const card = document.createElement('div');
  card.className = 'jurusan-card';
  card.innerHTML = `
    <h3>${jurusan.nama} (${jurusan.kode})</h3>
    <p>Mahasiswa: ${jurusan.mahasiswa}</p>
    <p>Dosen: ${jurusan.dosen}</p>
    <p>Akreditasi: ${jurusan.akreditasi}</p>
    <button onclick="alert('Lihat detail jurusan: ${jurusan.nama}')">Lihat Detail</button>
  `;
  jurusanList.appendChild(card);
});

document.getElementById('totalJurusan').textContent = jurusanData.length;
document.getElementById('totalMahasiswa').textContent = totalMahasiswa;
document.getElementById('totalDosen').textContent = totalDosen;
