import FilterNavUi from "../ui/FilterNavUi";
import filterCategory from "../utils/filterCategory";
import games from "../utils/games";
import Card from "./Card";

const FilterNav = () => {
    const filterSection = document.querySelector('.filterSection');
    const filterNav = document.createElement('nav');
    const filterNavContent = document.createElement('div');
    const filterNavTitle = document.createElement('h2');
    const filterNavList = document.createElement('ul');
    const filterNavItems = ['Action RPG', 'Fantasy', 'MMORPG', 'Horror', 'Survival', 'Dark Fantasy', 'Open World', 'Sci-Fi', 'Co-op', 'Adventure', 'Action', 'Challenging'];
    filterNav.className = 'filter-nav';

    filterNavTitle.textContent = 'Filtres';
    filterNavList.className = 'filter-nav-list';        

    filterSection.appendChild(filterNav);
    filterNav.appendChild(filterNavContent);
    filterNavContent.appendChild(filterNavTitle);
    filterNavContent.appendChild(filterNavList);
    filterNavItems.forEach(item => {
        const filterNavItem = document.createElement('li');
        filterNavItem.textContent = item;
        filterNavList.appendChild(filterNavItem);
        filterNavItem.style.cursor = 'pointer';
        filterNavItem.style.padding = '0.5rem';
        filterNavItem.style.listStyleType = 'none';
        
        
        filterNavItem.addEventListener('click', () => {
            if (filterCategory.includes(item)) {
                filterCategory.splice(filterCategory.indexOf(item), 1);
                filterNavItem.style.backgroundColor = 'white';
                filterNavItem.style.color = 'black';
                console.log(filterCategory);

                const gamesSection = document.querySelector('.gamesSection');
                gamesSection.innerHTML = '';

                const filteredGames = games.filter(game => 
                    filterCategory.some(category => game.genres.includes(category))
                );

                filteredGames.forEach(game => {
                    Card(gamesSection, games, game.id, game.image, game.nom, game.description, game.genres);
                });

                if (filteredGames.length === 0) {
                    games.map(game => {
                        Card(gamesSection, games, game.id, game.image, game.nom, game.description, game.genres);
                    });
                    
                }
                
            } else {
                filterCategory.push(item);
                filterNavItem.style.backgroundColor = 'tomato';
                filterNavItem.style.color = 'white';
                console.log(filterCategory);

                const gamesSection = document.querySelector('.gamesSection');
                gamesSection.innerHTML = '';

                const filteredGames = games.filter(game => 
                    filterCategory.some(category => game.genres.includes(category))
                );

                filteredGames.forEach(game => {
                    Card(gamesSection, games, game.id, game.image, game.nom, game.description, game.genres);
                });
            }
            
        });

    });

    FilterNavUi(filterNav, filterNavContent, filterNavTitle, filterNavList);
}

export default FilterNav;