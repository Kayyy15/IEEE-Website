document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('i');

    form.addEventListener('submit', (e) => {
        if (form.checkValidity()) {
            e.preventDefault();

            btnText.textContent = "ENCRYPTING & SENDING...";
            btnIcon.className = "fa-solid fa-spinner fa-spin";
            submitBtn.style.background = "var(--accent-primary, #3b82f6)";
            submitBtn.style.color = "#fff";

            setTimeout(() => {
                btnText.textContent = "TRANSMISSION SUCCESS";
                btnIcon.className = "fa-solid fa-check";
                submitBtn.style.background = "#10b981";
                submitBtn.style.borderColor = "#10b981";

                HTMLFormElement.prototype.submit.call(form);

                setTimeout(() => {
                    btnText.textContent = "SEND";
                    btnIcon.className = "fa-solid fa-paper-plane";
                    submitBtn.style.background = "transparent";
                    submitBtn.style.color = "var(--accent-primary, #3b82f6)";
                    submitBtn.style.borderColor = "var(--accent-primary, #3b82f6)";
                    form.reset();
                }, 3000);

            }, 1500);
        }
    });

    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-menu');
    const navLinks = document.getElementById('nav-links');

    if (openMenu && closeMenu && navLinks) {
        openMenu.addEventListener('click', () => {
            navLinks.classList.add('active');
        });

        closeMenu.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});