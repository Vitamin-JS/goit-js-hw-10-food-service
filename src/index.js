import './styles.css';
import menuTemplate from './template.hbs';
import menuElement from './menu.json';

const refs = {
    menu: document.querySelector('.js-menu'),
    switch: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body')
};

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

// ------ Page Markup-----------------------------------------------------
const menuMarkup = createMenu(menuElement);

refs.menu.insertAdjacentHTML('beforeend', menuMarkup);
refs.body.classList.add(Theme.LIGHT);

// ----- Change Theme & LocalStorage--------------------------------------

refs.switch.addEventListener("change", onThemeChange);
refs.switch.addEventListener("change", setLocalStorage);
document.addEventListener('DOMContentLoaded', getThemeLocalStorage);

// ------  Functions   ---------------------------------------------------

function createMenu(menuElement) {
    return menuElement.map(menuTemplate).join('');
};

function onThemeChange() {
    refs.body.classList.toggle(Theme.DARK);
}

function setLocalStorage() {
    const checkedTheme = refs.switch.checked;

    if (checkedTheme) { localStorage.setItem('theme', Theme.DARK) } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT)
    }
}

function getThemeLocalStorage() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === Theme.DARK) {
        refs.body.classList.add(Theme.DARK);
        refs.switch.checked = true;
    }
}