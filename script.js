document.addEventListener("DOMContentLoaded", function() {
    // Inisialisasi SplitText pada elemen teks
    const headline = new SplitText(".animate-text", { type: "chars" });
    const subtext = new SplitText(".animate-subtext", { type: "chars" });

    // Animasi teks muncul per huruf
    gsap.from(headline.chars, {
        opacity: 0,
        x: -50,
        stagger: 0.1,
        duration: 1.5,
        ease: "power2.out"
    });

    // Animasi subteks muncul setelah teks utama
    gsap.from(subtext.chars, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 1.5,
        delay: 1.5,
        ease: "power2.out"
    });

    // Animasi tombol CTA dengan efek zoom-in
    gsap.from(".cta", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 2,
        ease: "back.out(1.7)"
    });

    // Animasi ScrollTrigger untuk efek scroll pada elemen tentang saya
    gsap.from(".about", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out"
    });

    // Animasi proyek muncul saat menggulir
    gsap.from(".projects .project-item", {
        scrollTrigger: {
            trigger: ".projects",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        },
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out"
    });

    // Animasi dengan Lottie
    lottie.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets2.lottiefiles.com/packages/lf20_KaW9xe.json' // Ganti dengan path animasi Anda
    });

    // Tambahkan class "show" pada tombol CTA setelah halaman dimuat
    const ctaButton = document.querySelector(".cta");
    setTimeout(() => {
        ctaButton.classList.add("show");
    }, 2500); // Tombol muncul setelah animasi teks selesai
});
