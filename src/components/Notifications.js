import NotificationUi from "../ui/NotificationUi";

const Notification = (gameName) => {
    const main = document.querySelector('main');
    const notification = document.createElement('div');
    const notificationControl = document.createElement('div');
    const notificationClose = document.createElement('i');
    const notificationMessage = document.createElement('p');
    const notificationProgressBar = document.createElement('div');
    
    notification.className = 'notification';
    notificationClose.className = 'fas fa-times';
    notificationMessage.textContent = `${gameName} a été supprimé de votre collection`;

    main.appendChild(notification);
    notification.appendChild(notificationControl);
    notificationControl.appendChild(notificationClose);
    notification.appendChild(notificationMessage);
    notification.appendChild(notificationProgressBar);


    NotificationUi(notification, notificationControl, notificationClose, notificationMessage, notificationProgressBar);
    setTimeout(() => {
        notification.remove();
    }, 3000);
};

export default Notification;