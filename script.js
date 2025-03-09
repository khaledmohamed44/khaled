document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const id = link.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
