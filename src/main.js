import './assets/style.css';
import Header from './components/Header';
import Card from './components/Card';

const body = document.querySelector('body')
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);

let games = [
    {
        nom: "Elden Ring",
        genres: ["Action RPG", "Fantasy", "Open World"],
        description: "Elden Ring is a dark fantasy action RPG set in a vast world created by George R. R. Martin, offering intense combat, deep exploration, and a gripping narrative.",
        image: "https://p325k7wa.twic.pics/high/elden-ring/elden-ring/03-news/ER-SOTE-announcement.jpg?twic=v1/cover=500x556/step=10/quality=80"
    },
    {
        nom: "World of Warcraft",
        genres: ["MMORPG", "Fantasy", "Open World"],
        description: "World of Warcraft is a massively multiplayer online role-playing game set in the fantastical world of Azeroth, where players embark on epic quests, engage in thrilling battles, and forge alliances with other adventurers.",
        image: "https://iwant.games/wp-content/uploads/world-of-warcraft-the-war-within-thumb-468x702.jpg"
    },
    {
        nom: "Resident Evil 4",
        genres: ["Horror", "Survival", "Action"],
        description: "Resident Evil 4 is a survival horror game that follows special agent Leon S. Kennedy as he navigates a rural European village infested with grotesque creatures, combining intense action with chilling atmosphere and strategic combat.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png"
    },
    {
        nom: "Dark Souls III",
        genres: ["Action RPG", "Fantasy", "Challenging"],
        description: "Dark Souls III is an action role-playing game known for its challenging gameplay and atmospheric world, where players must navigate treacherous environments and battle terrifying foes.",
        image: "https://static.bandainamcoent.eu/high/dark-souls/dark-souls-3/00-page-setup/ds3_game-thumbnail.jpg"
    },
    {
        nom: "The Witcher 3: Wild Hunt",
        genres: ["Action RPG", "Fantasy", "Open World"],
        description: "The Witcher 3: Wild Hunt is an action role-playing game set in a dark fantasy world, where players control Geralt of Rivia, a monster hunter searching for his missing adopted daughter.",
        image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheWitcher3WildHuntCompleteEdition_enGB_image1600w.jpg"
    },
    {
        nom: "Cyberpunk 2077",
        genres: ["Action RPG", "Sci-Fi", "Open World"],
        description: "Cyberpunk 2077 is an action role-playing game set in the dystopian Night City, where players assume the role of V, a mercenary outlaw navigating the seedy underbelly of the city in search of immortality.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg"
    },
    {
        nom: "The Elder Scrolls V: Skyrim",
        genres: ["Action RPG", "Fantasy", "Open World"],
        description: "The Elder Scrolls V: Skyrim is an action role-playing game set in the fantasy world of Tamriel, where players can explore the vast open world, complete quests, and customize their character's skills and abilities.",
        image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/skyrim_logo.jpg"
    },
    {
        nom: "Grounded",
        genres: ["Survival", "Co-op", "Adventure"],
        description: "Grounded is a survival game developed by Obsidian Entertainment, where players are shrunk to the size of insects and must navigate a backyard filled with dangers and mysteries, gathering resources, building shelters, and battling hostile creatures.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61d1AMEC1B1ujSDO2834VWnafAzHYTbGY5YKcaHl69w&s"
    }
];


Header(header);

games.forEach(game => {
    Card(main, game.image, game.nom, game.description, game.genres);
});

