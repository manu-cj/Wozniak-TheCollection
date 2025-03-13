import './assets/style.css';
import Header from './components/Header';
import Card from './components/Card';
import games from './utils/games';
import ErrorMeesage from './utils/errorMessage';
import FilterNav from './components/FilterNav';

const body = document.querySelector('body')
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');
const filterSection = document.createElement('section');
const gamesSection = document.createElement('section');

filterSection.className = 'filterSection';
gamesSection.className = 'gamesSection';


body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);
main.appendChild(filterSection);
main.appendChild(gamesSection);


Header(header);
FilterNav();

ErrorMeesage(games);


games.map(game => {
    Card(gamesSection, games, game.id, game.image, game.nom, game.description, game.genres);
});

