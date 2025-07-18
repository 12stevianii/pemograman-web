document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email === '' || password === '') {
    alert('Email dan password wajib diisi.');
    return;
  }

  // Simulasi login (ganti ini dengan AJAX atau fetch untuk real login)
  if (email === 'admin@uhm.ac.id' && password === 'admin123') {
    alert('Login berhasil!');
    window.location.href = 'dashboard.html'; // arahkan ke dashboard
  } else {
    alert('Email atau password salah.');
  }
});
