import DeleteModalUi from '../ui/DeleteModalUi';
import DeleteCard from './DeleteCard';
const DeleteModal = ( show, games, id, text ) => {
    const main = document.querySelector('main');
    console.log(id);
    

    if (show) {
        const modal = document.createElement('div');
        const modalContent = document.createElement('div');
        const modalText = document.createElement('p');
        const buttonDiv = document.createElement('div');
        const modalButton = document.createElement('button');
        const closeModal = document.createElement('button');


        modal.className = 'modal';
        
        modalText.textContent = `Êtes vous sur de vouloir supprimer ce jeu de votre collection '${text}' ?`;
        modalButton.textContent = 'Supprimer';
        closeModal.textContent = 'Annuler';

        main.appendChild(modal);
        modal.appendChild(modalContent);
        modalContent.appendChild(modalText);
        modalContent.appendChild(buttonDiv);
        buttonDiv.appendChild(modalButton);
        buttonDiv.appendChild(closeModal);

        DeleteModalUi(modal, modalContent, modalText, buttonDiv,modalButton, closeModal);
        modalButton.addEventListener('click', () => {
            console.log(id);
            
            DeleteCard(games, id);
            modal.remove();
        }
        );
    }

  
}

export default DeleteModal;