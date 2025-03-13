const DeleteModdalUi = (
  modal,
  modalContent,
  modalText,
  buttonDiv,
  modalButton,
  closeModal
) => {
    modal.style.display = 'block';
    modal.style.position = 'fixed';
    modal.style.zIndex = '1000';
    modal.style.width = '100%';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(52, 52, 52, 0.199)';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';

    modalContent.style.width = '33%';
    modalContent.style.height = '300px';
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '2rem';
    modalContent.style.borderRadius = '5px';
    modalContent.style.display = 'flex';
    modalContent.style.flexDirection = 'column';
    modalContent.style.justifyContent = 'space-around';
    modalContent.style.alignItems = 'center';
    modalContent.style.gap = '15px';
    modalContent.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.4)';
    
    modalText.style.color = 'black';
    modalText.style.fontSize = '1.5rem';
    modalText.style.fontWeight = 'bold';
    modalText.style.textAlign = 'center';

    buttonDiv.style.display = 'flex';
    buttonDiv.style.justifyContent = 'space-around';
    buttonDiv.style.alignItems = 'center';
    buttonDiv.style.width = '80%';

    modalButton.style.backgroundColor = 'tomato';
    modalButton.style.color = 'white';
    modalButton.style.padding = '0.8rem';
    modalButton.style.borderRadius = '5px';
    modalButton.style.border = 'none';
    modalButton.style.width = '40%';
    modalButton.style.fontSize = '1rem';
    modalButton.style.cursor = 'pointer';
    modalButton.style.transition = 'all 0.3s ease-in-out';

    closeModal.style.backgroundColor = 'rgb(0, 153, 255)';
    closeModal.style.color = 'black';
    closeModal.style.padding = '0.8rem';
    closeModal.style.borderRadius = '5px';
    closeModal.style.border = 'none';
    closeModal.style.width = '40%';
    closeModal.style.fontSize = '1rem';
    closeModal.style.cursor = 'pointer';
    closeModal.style.transition = 'all 0.3s ease-in-out';

    closeModal.addEventListener('mouseover', () => {
        closeModal.style.transform = 'scale(1.1)';
    });
    closeModal.addEventListener('mouseleave', () => {
      closeModal.style.transform = 'scale(1)';
  });
    modalButton.addEventListener('mouseover', () => {
        modalButton.style.transform = 'scale(1.1)';
    });
    modalButton.addEventListener('mouseleave', () => {
      modalButton.style.transform = 'scale(1)';
  });


    



};

export default DeleteModdalUi;