document.addEventListener("DOMContentLoaded", function() {
    // Inisialisasi animasi teks menggunakan GSAP atau metode lain
    const heroText = document.querySelector('.hero .hero-content h2');
    const subText = document.querySelector('.hero .hero-content p');
    const ctaButton = document.querySelector('.cta');

    // Animasi teks muncul menggunakan animasi CSS atau JavaScript (GSAP bisa digunakan)
    heroText.classList.add('animate-text');
    subText.classList.add('animate-subtext');

    // Animasi tombol CTA
    ctaButton.addEventListener('mouseenter', function() {
        ctaButton.style.transform = 'scale(1.1)';
        ctaButton.style.transition = 'transform 0.3s ease';
    });

    ctaButton.addEventListener('mouseleave', function() {
        ctaButton.style.transform = 'scale(1)';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tiktokButton = document.querySelector('.tiktok-button');
    
    // Menampilkan tombol TikTok setelah 3 detik
    setTimeout(() => {
        tiktokButton.style.display = 'block';
    }, 3000); // 3000 ms = 3 detik
    
    // Menyembunyikan tombol TikTok pada awalnya
    tiktokButton.style.display = 'none';
});
