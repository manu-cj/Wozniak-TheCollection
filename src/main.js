import './assets/style.css';
import Header from './components/Header';
import Card from './components/Card';
import games from './utils/games';
import ErrorMeesage from './utils/errorMessage';

const body = document.querySelector('body')
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');


body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);


Header(header);

ErrorMeesage(games);


games.map(game => {
    Card(main, games, game.id, game.image, game.nom, game.description, game.genres);
});

