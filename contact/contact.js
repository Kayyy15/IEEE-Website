document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('i');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Show sending state
        btnText.textContent = "ENCRYPTING & SENDING...";
        btnIcon.className = "fa-solid fa-spinner fa-spin";
        submitBtn.style.background = "var(--accent-primary, #3b82f6)";
        submitBtn.style.color = "#fff";
        submitBtn.style.borderColor = "var(--accent-primary, #3b82f6)";
        submitBtn.disabled = true;

        const formData = new FormData(form);

        // Add readable inquiry type
        const inquirySelect = document.getElementById('contactInquiry');
        const inquiryText = inquirySelect.options[inquirySelect.selectedIndex].text;
        formData.set('Inquiry Type', inquiryText);

        // Set reply-to so replies go to the user
        formData.set('replyto', document.getElementById('contactEmail').value);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // ACTUAL SUCCESS — API confirmed email was sent
                btnText.textContent = "TRANSMISSION SUCCESS";
                btnIcon.className = "fa-solid fa-check";
                submitBtn.style.background = "#10b981";
                submitBtn.style.borderColor = "#10b981";

                setTimeout(() => {
                    resetButton();
                    form.reset();
                }, 3000);
            } else {
                throw new Error(data.message || 'Submission failed');
            }

        } catch (error) {
            console.error('Form submission error:', error);

            btnText.textContent = "TRANSMISSION FAILED";
            btnIcon.className = "fa-solid fa-exclamation-triangle";
            submitBtn.style.background = "#ef4444";
            submitBtn.style.borderColor = "#ef4444";

            setTimeout(() => {
                resetButton();
            }, 3000);
        }
    });

    function resetButton() {
        btnText.textContent = "SEND";
        btnIcon.className = "fa-solid fa-paper-plane";
        submitBtn.style.background = "transparent";
        submitBtn.style.color = "var(--accent-primary, #3b82f6)";
        submitBtn.style.borderColor = "var(--accent-primary, #3b82f6)";
        submitBtn.disabled = false;
    }

    // --- Mobile Navigation Menu ---
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