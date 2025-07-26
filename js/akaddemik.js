const ctx = document.getElementById('chartAktif').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [{
            label: 'Mahasiswa Aktif',
            data: [3, 4, 1, 51, 163, 667, 1483, 1266, 1001, 1549, 9, 1, 1, 1, 28, 1, 1, 1],
            borderColor: 'blue',
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            borderWidth: 2,
            pointRadius: 5,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Jika ingin efek klik untuk menu dropdown (bukan hover)
document.querySelectorAll('.dropdown').forEach(item => {
  item.addEventListener('click', () => {
    const submenu = item.querySelector('.submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  });
});

