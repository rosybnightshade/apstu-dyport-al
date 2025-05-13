const themeBtn = document.getElementById('themeBtn');
const body = document.body;
const span = document.getElementById('welcome');
const accent = document.getElementById('accent');

function setDarkTheme() {
    body.style.backgroundColor = 'var(--inverse-color)';

    styleElements('h1, h2, h3, h4, label,a', elements => {
        elements.style.color = 'var(--inverse-accent)';
    });

    styleElements('input, button', elements => {
        elements.style.border = '1px solid var(--inverse-color)';
    });

    accent.style.backgroundColor = 'var(--inverse-accent)';
    accent.style.color = 'var(--inverse-color)'
    
}

function setLightTheme() {
   body.style.backgroundColor = 'var(--inverse-accent)';

    styleElements('h1, h2, h3, h4, label, a', elements => {
        elements.style.color = 'var(--inverse-color)';
    });

    styleElements('input, button', elements => {
        elements.style.border = '1px solid var(--inverse-color)';
    });

    accent.style.backgroundColor = 'var(--inverse-color)';
    accent.style.color = 'var(--inverse-accent)'
}

function styleElements(selector, callback) {
    document.querySelectorAll(selector).forEach(callback);
}

function invertTheme(pageTheme) {
    if (pageTheme === 'dark') {
        setDarkTheme();
    } else {
        setLightTheme();
    }

    localStorage.setItem('preference', pageTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('preference') || 'light';
    invertTheme(saved);
});

themeBtn.addEventListener('click', () => {
    const current = localStorage.getItem('preference') || 'light';
    const newTheme = current === 'dark' ? 'light' : 'dark';
    invertTheme(newTheme);
    alert(`Theme set to ${newTheme.toUpperCase()} ✨`);
});

function createThemeButton() {
    const button = document.createElement('div');
    button.innerHTML = `<img src='studypages/class icons/changetheme.svg'`
    document.body.appendChild('button');
}