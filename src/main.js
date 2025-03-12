import './ui/style.css';
import Header from './components/Header';

const body = document.querySelector('body')
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);

Header(header);


