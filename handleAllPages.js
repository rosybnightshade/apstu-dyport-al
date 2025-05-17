const themeBtn = document.getElementsByClassName('themeBtn');
const body = document.body;
const span = document.getElementById('welcome');
const accent = document.getElementById('accent');
const courses = document.getElementsByClassName('class');

for (let btn of themeBtn){ 
    btn.addEventListener('click', () => {
        const current = getCookie('preference') || 'light';
        const newTheme = current === 'dark' ? 'light' : 'dark';
        invertTheme(newTheme);
        alert(`Theme is now: ${newTheme.toUpperCase()} `);
});}

function setDarkTheme() {
    body.style.backgroundColor = 'var(--inverse-color)';

    styleElements('h1, h2, h3, h4, label, a', elements => {
        elements.style.color = 'var(--inverse-accent)';
    });

    styleElements('input, button', elements => {
        elements.style.border = '1px solid var(--inverse-color)';
    });

    if (accent == true) {
    accent.style.backgroundColor = 'var(--inverse-accent)';
    accent.style.color = 'var(--inverse-color)';
    }

    const courses = document.querySelectorAll('.class');

    courses.forEach(course => {
        course.style.border = '1px solid var(--major-color)'; 
        course.style.color = 'var(--major-color)'; 
    });

}

function setLightTheme() {
    body.style.backgroundColor = 'var(--inverse-accent)';

    styleElements('h1, h2, h3, h4, label, a', elements => {
        elements.style.color = 'var(--inverse-color)';
    });

    styleElements('input, button', elements => {
        elements.style.border = '1px solid var(--inverse-color)';
    });

    if (accent == true) {
    accent.style.backgroundColor = 'var(--inverse-color)';
    accent.style.color = 'var(--inverse-accent)';
    }

    const courses = document.querySelectorAll('.class');

    courses.forEach(course => {
        course.style.color = 'var(--major-color)'; 
    });
}

function styleElements(selector, callback) {
    document.querySelectorAll(selector).forEach(callback);
}

function setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const c of cookies) {
        const [key, val] = c.split('=');
        if (key === name) return val;
    }
    return "";
}

function invertTheme(pageTheme) {
    if (pageTheme === 'dark') {
        setDarkTheme();
    } else {
        setLightTheme();
    }

    setCookie('preference', pageTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = getCookie('preference') || 'light';
    invertTheme(saved);
});
