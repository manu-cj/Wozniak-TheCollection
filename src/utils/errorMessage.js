const ErrorMeesage = (games) => {
    const main = document.querySelector('main');
    if (games.length === 0) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Aucun jeu disponible.';
        errorMessage.style.color = 'red';
        errorMessage.style.textAlign = 'center';
        errorMessage.style.marginTop = '2rem';  
        errorMessage.style.fontSize = '1.5rem';
        main.appendChild(errorMessage);
        main.style.display = 'flex';
        main.style.justifyContent = 'center';
        main.style.alignItems = 'center';
    }
}

export default ErrorMeesage;