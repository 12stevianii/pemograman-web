document.getElementById('formPendaftaran').addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    nama: document.getElementById('nama').value,
    nik: document.getElementById('nik').value,
    tempat: document.getElementById('tempat').value,
    tanggal: document.getElementById('tanggal').value,
    jk: document.getElementById('jk').value,
    alamat: document.getElementById('alamat').value,
    hp: document.getElementById('hp').value,
    email: document.getElementById('email').value,
    sekolah: document.getElementById('sekolah').value,
    tahun: document.getElementById('tahun').value,
    jurusan: document.getElementById('jurusan').value
  };

  sessionStorage.setItem('dataPendaftaran', JSON.stringify(data));
  window.location.href = "hasil.html";
});

// Fungsi tombol keluar
const keluarBtn = document.getElementById('keluarBtn');
if (keluarBtn) {
  keluarBtn.addEventListener('click', function () {
    sessionStorage.clear();
    window.location.href = "index.html"; // atau "formulir.html" tergantung kamu
  });
}