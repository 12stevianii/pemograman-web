document.getElementById('daftarUlangForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const nim = document.getElementById('nim').value.trim();
  const prodi = document.getElementById('prodi').value;
  const tanggal = document.getElementById('tanggal').value;

  if (!nama || !nim || !prodi || !semester || !tanggal) {
    alert('Harap lengkapi semua data.');
    return;
  }

  // Simulasi kirim data
  alert(`Pendaftaran ulang berhasil!\nNama: ${nama}\nNIM: ${nim}\nProdi: ${prodi}\nSemester: ${semester}\nTanggal: ${tanggal}`);
  
  // Reset form
  this.reset();
});
