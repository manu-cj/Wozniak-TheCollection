import DeleteModalUi from '../ui/DeleteModalUi';
import DeleteCard from './DeleteCard';
import Notification from './Notifications';
const DeleteModal = ( show, games, id, text ) => {
    const main = document.querySelector('main');
    console.log(id);
    

    if (show) {
        document.body.style.overflow = 'hidden';
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
            DeleteCard(games, id);
            modal.remove();
            document.body.style.overflow = 'auto';
            Notification(text);
        });

        closeModal.addEventListener('click', () => {
            modal.remove();
            document.body.style.overflow = 'auto';
        })
        
    }

  
}

export default DeleteModal;