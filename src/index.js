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


// ------ Page Narkup------------------------------
const menuMarkup = createMenu(menuElement);

function createMenu(menuElement) {
    return menuElement.map(menuTemplate).join('');

};

refs.menu.insertAdjacentHTML('beforeend', menuMarkup);
refs.body.classList.add(Theme.LIGHT);

// ----- Switch click-------------------------------

refs.switch.addEventListener("change", onThemeChange);

function onThemeChange() {
    refs.body.classList.toggle(Theme.DARK);

}