function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const dateStr = now.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('date').textContent = dateStr;
}

function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('clockworkTheme', theme);
}

function initTheme() {
    const savedTheme = localStorage.getItem('clockworkTheme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
}

function handleThemeMenu() {
    const themeButton = document.getElementById('themeButton');
    const themeMenu = document.getElementById('themeMenu');

    themeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        themeMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!themeMenu.contains(e.target)) {
            themeMenu.classList.remove('active');
        }
    });

    themeMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            setTheme(e.target.dataset.theme);
            themeMenu.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme menu
    handleThemeMenu();

    // Update clock every second
    setInterval(updateClock, 1000);

    // Initial clock update
    updateClock();

    // Initialize theme
    initTheme();
});