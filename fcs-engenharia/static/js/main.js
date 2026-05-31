// Navbar com sombra ao rolar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.25)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    }
});

// Animação de entrada dos cards ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .mvv-card, .stat-box, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
