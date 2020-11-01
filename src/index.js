import './styles.css';
import menuTemplate from './template.hbs';
import menuElement from './menu.json';

const refs = {
    menu: document.querySelector('.js-menu')
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