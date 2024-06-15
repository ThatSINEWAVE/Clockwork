function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}

function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('clockworkTheme', theme);
}

function initTheme() {
    const savedTheme = localStorage.getItem('clockworkTheme');
    if (savedTheme) {
        setTheme(savedTheme);
        document.getElementById('themeSelector').value = savedTheme;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('themeSelector').addEventListener('change', (e) => {
        setTheme(e.target.value);
    });

    // Update clock every second
    setInterval(updateClock, 1000);

    // Initial clock update
    updateClock();

    // Initialize theme
    initTheme();
});