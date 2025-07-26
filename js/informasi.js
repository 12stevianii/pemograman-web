document.addEventListener('DOMContentLoaded', () => {
  const btnPengumuman = document.getElementById('btn-pengumuman');
  const btnBerita = document.getElementById('btn-berita');
  const sectionPengumuman = document.getElementById('section-pengumuman');
  const sectionBerita = document.getElementById('section-berita');

  btnPengumuman.addEventListener('click', () => {
    sectionPengumuman.classList.remove('d-none');
    sectionBerita.classList.add('d-none');
    btnPengumuman.classList.replace('btn-outline-primary', 'btn-primary');
    btnBerita.classList.replace('btn-primary', 'btn-outline-primary');
  });

  btnBerita.addEventListener('click', () => {
    sectionBerita.classList.remove('d-none');
    sectionPengumuman.classList.add('d-none');
    btnBerita.classList.replace('btn-outline-primary', 'btn-primary');
    btnPengumuman.classList.replace('btn-primary', 'btn-outline-primary');
  });
});
