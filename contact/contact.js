document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('i');

    // --- Reset button ---
    function resetButton() {
        btnText.textContent = "SEND";
        btnIcon.className = "fa-solid fa-paper-plane";
        submitBtn.style.background = "transparent";
        submitBtn.style.color = "var(--accent-primary, #3b82f6)";
        submitBtn.style.borderColor = "var(--accent-primary, #3b82f6)";
        submitBtn.disabled = false;
    }

    // --- Show error ---
    function showError(message) {
        btnText.textContent = message;
        btnIcon.className = "fa-solid fa-exclamation-triangle";
        submitBtn.style.background = "#ef4444";
        submitBtn.style.borderColor = "#ef4444";
        submitBtn.style.color = "#fff";
        submitBtn.disabled = false;
        setTimeout(() => resetButton(), 3000);
    }

    // ============================================================
    // AUTOFILL FIX
    // ============================================================
    const allInputs = document.querySelectorAll('.input-group input, .input-group textarea');

    function checkInputValue(input) {
        if (input.value && input.value.trim() !== '') {
            input.classList.add('has-value');
        } else {
            input.classList.remove('has-value');
        }
    }

    // 1. Check immediately on page load
    allInputs.forEach(input => checkInputValue(input));

    // 2. Aggressive polling — every 100ms for 10 seconds
    const pollInterval = setInterval(() => {
        allInputs.forEach(input => checkInputValue(input));
    }, 100);
    setTimeout(() => clearInterval(pollInterval), 10000);

    // 3. Listen to all relevant events
    allInputs.forEach(input => {
        ['input', 'change', 'blur', 'focus', 'keyup', 'paste'].forEach(event => {
            input.addEventListener(event, () => checkInputValue(input));
        });
    });

    // 4. Chrome autofill animation detection
    const autofillStyle = document.createElement('style');
    autofillStyle.textContent = `
        @keyframes onAutoFillStart { from { opacity: 1; } to { opacity: 1; } }
        @keyframes onAutoFillCancel { from { opacity: 1; } to { opacity: 1; } }
        input:-webkit-autofill { animation-name: onAutoFillStart; animation-duration: 0.001s; }
        input:not(:-webkit-autofill) { animation-name: onAutoFillCancel; animation-duration: 0.001s; }
    `;
    document.head.appendChild(autofillStyle);

    allInputs.forEach(input => {
        input.addEventListener('animationstart', (e) => {
            if (e.animationName === 'onAutoFillStart') {
                checkInputValue(input);
            }
        });
    });

    // 5. Check on any user interaction
    document.addEventListener('click', () => {
        allInputs.forEach(input => checkInputValue(input));
    });

    // 6. Double-check on window load (catch late autofill)
    window.addEventListener('load', () => {
        setTimeout(() => {
            allInputs.forEach(input => checkInputValue(input));
        }, 100);
    });

    // ============================================================
    // FORM SUBMISSION — Web3Forms
    // ============================================================
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        btnText.textContent = "ENCRYPTING & SENDING...";
        btnIcon.className = "fa-solid fa-spinner fa-spin";
        submitBtn.style.background = "var(--accent-primary, #3b82f6)";
        submitBtn.style.color = "#fff";
        submitBtn.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            });

            const result = await response.json();

            if (response.ok && result.success) {
                btnText.textContent = "TRANSMISSION SUCCESS";
                btnIcon.className = "fa-solid fa-check";
                submitBtn.style.background = "#10b981";
                submitBtn.style.borderColor = "#10b981";

                form.reset();
                allInputs.forEach(input => input.classList.remove('has-value'));

                setTimeout(() => resetButton(), 3000);
            } else {
                console.error("Web3Forms Error:", result);
                showError("TRANSMISSION FAILED");
            }
        } catch (error) {
            console.error("Network Error:", error);
            showError("NETWORK ERROR");
        }
    });

    // --- Mobile Navigation ---
    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-menu');
    const navLinks = document.getElementById('nav-links');

    if (openMenu && closeMenu && navLinks) {
        openMenu.addEventListener('click', () => navLinks.classList.add('active'));
        closeMenu.addEventListener('click', () => navLinks.classList.remove('active'));
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('active'));
        });
    }
});