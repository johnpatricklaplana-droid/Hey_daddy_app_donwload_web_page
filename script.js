(function () {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });

    const toast = document.getElementById('toast');
    const toastClose = document.getElementById('toastClose');
    let toastTimer;

    function showToast() {
        clearTimeout(toastTimer);
        toast.classList.add('show');
        toastTimer = setTimeout(() => toast.classList.remove('show'), 4500);
    }

    function hideToast() {
        clearTimeout(toastTimer);
        toast.classList.remove('show');
    }

    document.querySelectorAll('#mainDownload, #navDownload').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            showToast();
        });
    });

    toastClose.addEventListener('click', hideToast);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in').forEach((el, i) => {
        el.style.transitionDelay = (i * 0.06) + 's';
        observer.observe(el);
    });
})();