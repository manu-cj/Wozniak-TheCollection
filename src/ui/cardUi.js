const cardUi = (
  card,
  imgDiv,
  img,
  cardContent,
  genreDiv,
  cardInfo,
  cardTitle,
  cardText,
  
) => {
    card.style.background = '#f5f5f5';
    card.style.borderRadius = '1rem';
    card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    card.style.margin = '1rem';
    card.style.padding = '1rem';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'space-around';
    card.style.alignItems = 'center';
    card.style.width = '350px';
    card.style.height = '450px';

    card.style.cursor = 'pointer';
 
    card.style.border = '1px solid red';

    imgDiv.style.width = '100%';
    imgDiv.style.height = '200px';
    
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '1rem';

    cardContent.style.width = '100%';
    cardContent.style.display = 'flex';
    cardContent.style.flexDirection = 'column';
    cardContent.style.justifyContent = 'baseline';
    cardContent.style.alignItems = 'baseline';

    genreDiv.style.color = 'white';
    genreDiv.style.padding = '0.5rem';
    genreDiv.style.width = '100%';
    genreDiv.style.display = 'flex';
    genreDiv.style.flexWrap = 'wrap';
    genreDiv.style.gap = '0.5rem';  

    cardInfo.style.width = '100%';

    cardInfo.style.display = 'flex';
    cardInfo.style.flexDirection = 'column';
    cardInfo.style.justifyContent = 'baseline';
    cardInfo.style.alignItems = 'baseline';
    cardInfo.style.gap = '0.5rem';
    cardInfo.style.textAlign = 'center';
    cardInfo.style.color = 'black';
    
    cardTitle.style.fontSize = '1.5rem';
    cardTitle.style.whiteSpace = 'wrap';
    cardTitle.style.textAlign = 'center';

    cardText.style.whiteSpace = 'wrap';
    cardText.style.width = '100%';
    cardText.style.textAlign = 'center';
   
};
export default cardUi;
