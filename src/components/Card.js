import cardUi from "../ui/cardUi";
const Card = (main, hrefImg, textTitle, description, genres) => {
    const card = document.createElement('article');

    const imgDiv = document.createElement('div');
    const img = document.createElement('img');

    const cardContent = document.createElement('div');

    const genreDiv = document.createElement('div');
    
    const cardInfo = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardText = document.createElement('p');

    card.classList.add('card');
    img.src = hrefImg;

    cardTitle.textContent = textTitle;
    cardText.textContent = description;

    const genreColors = {
        "Action RPG": "#ffcc00",
        "Fantasy": "#8a2be2",
        "MMORPG": "#1e90ff",
        "Horror": "#dc143c",
        "Survival": "#228b22",
        "Dark Fantasy": "#4b0082",
        "Open World": "#ffa500",
        "Sci-Fi": "#00ced1",
        "Co-op": "#ff69b4",
        "Adventure": "#ff4500",
        "Action": "#ff6347",
        "Challenging": "#ff8c00",
    };

    genres.forEach(genre => {
        const genreSpan = document.createElement('span');

        genreSpan.style.padding = '0.3rem';
        if (genreColors[genre]) {
            genreSpan.style.backgroundColor = genreColors[genre];
            
        }
        genreSpan.style.border = '1px solid gray';
        genreSpan.style.color = 'white';
        genreSpan.style.borderRadius = '0.5rem';

        genreSpan.textContent = genre;
        genreDiv.appendChild(genreSpan);
    });

    main.appendChild(card);
    card.appendChild(imgDiv);
    imgDiv.appendChild(img);
    card.appendChild(cardContent);
    cardContent.appendChild(genreDiv);
    cardContent.appendChild(cardInfo);
    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(cardText);

    cardUi(
        card,
        imgDiv,
        img,
        cardContent,
        genreDiv,
        
        cardInfo,
        cardTitle,
        cardText,
    );
}

export default Card;