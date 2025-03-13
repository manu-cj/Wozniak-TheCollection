const cardUi = (
  card,
  controlDiv,
  deleteIcon,
  imgDiv,
  img,
  cardContent,
  genreDiv,
  cardInfo,
  cardTitle,
  cardText,
  
) => {
    card.style.background = 'radial-gradient(circle, #fce6d1d8, #fdf2df)';
    card.style.borderRadius = '10px';
    card.style.boxShadow = '2px 4px 10px rgba(0, 0, 0, 0.4)';
    card.style.margin = '1rem';
    card.style.padding = '10px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'space-between';
    
    card.style.alignItems = 'center';
    card.style.width = '350px';
    card.style.height = '450px';
    card.style.cursor = 'pointer';
    
    card.style.transition = 'transform 0.3s ease-in-out';

    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';  
        img.style.transform = 'scale(1.03)';
        card.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';  
        img.style.transform = 'scale(1)';
        card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

    });

    controlDiv.style.width = '100%';
    controlDiv.style.padding = '0.5rem';
    controlDiv.style.display = 'flex';
    controlDiv.style.justifyContent = 'flex-end';
    controlDiv.style.alignItems = 'center';

    

    deleteIcon.style.color = 'red';
    deleteIcon.style.background = 'none'
    deleteIcon.addEventListener('mouseover', () => {
        deleteIcon.style.transform = 'scale(1.1)';
    })
    deleteIcon.addEventListener('mouseleave', () => {
        deleteIcon.style.transform = 'scale(1)';
    }
    )
    deleteIcon.style.cursor = 'pointer';
    deleteIcon.style.fontSize = '1.1rem';


    imgDiv.style.width = '100%';
    imgDiv.style.height = '200px';
    
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '5px';
    img.style.transition = 'transform 0.3s ease-in-out';

    cardContent.style.width = '100%';
    cardContent.style.height = '50%';
    cardContent.style.display = 'flex';
    cardContent.style.flexDirection = 'column';
    cardContent.style.justifyContent = 'baseline';
    cardContent.style.alignItems = 'baseline';

    genreDiv.style.color = 'white';
    genreDiv.style.padding = '1rem 0';
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
