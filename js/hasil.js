const data = JSON.parse(sessionStorage.getItem('dataPendaftaran'));

if (data) {
  document.getElementById('outputData').innerHTML = `
    <h2>Selamat! Pendaftaran Anda Berhasil 🎉</h2>
    <p>Terima kasih, <strong>${data.nama}</strong>, telah mendaftar di <strong>Universitas Handayani</strong>.</p>
    <p>Mohon menunggu informasi pengumuman seleksi berikutnya.</p>
    <p>Semoga sukses dan selamat bergabung bersama keluarga besar Universitas Handayani! 💙</p>
    <hr>
    <h3>Rangkuman Data Anda:</h3>
    <p><strong>Nama:</strong> ${data.nama}</p>
    <p><strong>NIK:</strong> ${data.nik}</p>
    <p><strong>Tempat, Tanggal Lahir:</strong> ${data.tempat}, ${data.tanggal}</p>
    <p><strong>Jenis Kelamin:</strong> ${data.jk}</p>
    <p><strong>Alamat:</strong> ${data.alamat}</p>
    <p><strong>No HP:</strong> ${data.hp}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Asal Sekolah:</strong> ${data.sekolah}</p>
    <p><strong>Tahun Lulus:</strong> ${data.tahun}</p>
    <p><strong>Jurusan Diminati:</strong> ${data.jurusan}</p>
  `;
} else {
  document.getElementById('outputData').innerHTML = `
    <p style="color:red;">Data tidak ditemukan. Silakan kembali ke halaman formulir.</p>
  `;
}

// Fungsi tombol keluar
const keluarBtn = document.getElementById('keluarBtn');
if (keluarBtn) {
  keluarBtn.addEventListener('click', function () {
    sessionStorage.clear();
    window.location.href = "index.html"; // atau "formulir.html" tergantung kamu
  });
}