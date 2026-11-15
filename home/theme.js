(function () {
  const storageKey = 'theme';
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function getStoredTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function applyTheme(theme) {
    const resolvedTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;
  }

  function applyInitialTheme() {
    const storedTheme = getStoredTheme();
    applyTheme(storedTheme || (mediaQuery.matches ? 'dark' : 'light'));
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      // Continue with the in-memory theme when storage is unavailable.
    }
  }

  applyInitialTheme();

  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    const updateToggle = () => {
      const isDark = document.documentElement.dataset.theme === 'dark';
      if (!themeToggle) return;
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      themeToggle.setAttribute('aria-pressed', String(isDark));
      const icon = themeToggle.querySelector('.theme-icon');
      if (icon) {
        icon.classList.toggle('fa-moon', !isDark);
        icon.classList.toggle('fa-sun', isDark);
      }
    };

    updateToggle();

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        saveTheme(nextTheme);
        applyTheme(nextTheme);
        updateToggle();
      });
    }

    mediaQuery.addEventListener?.('change', (event) => {
      if (!getStoredTheme()) applyTheme(event.matches ? 'dark' : 'light');
      updateToggle();
    });
  });
})();
