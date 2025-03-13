const NotificationUi = (
  notification,
  notificationControl,
  notificationClose,
  notificationMessage,
  notificationProgressBar,
) => {

    notification.style.position = 'fixed';
    notification.style.zIndex = '1000';
    notification.style.top = '100px';
    notification.style.right = '20px';
    notification.style.width = '300px';
    notification.style.backgroundColor = 'white';
    notification.style.padding = '1rem';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.4)';
    notification.style.display = 'flex';
    notification.style.flexDirection = 'column';
    notification.style.justifyContent = 'space-around';
    notification.style.alignItems = 'baseline';
    notification.style.gap = '15px';

    notificationControl.style.width = '100%';
    notificationControl.style.display = 'flex';
    notificationControl.style.justifyContent = 'flex-end';
    notificationControl.style.alignItems = 'center';

    notificationClose.style.color = 'gray';
    notificationClose.style.fontSize = '1rem';
    notificationClose.style.cursor = 'pointer';

    notificationClose.addEventListener('click', () => {
        notification.remove();
    });
    notificationClose.addEventListener('mouseover', () => {
        notificationClose.style.color = 'black';
    });
    notificationClose.addEventListener('mouseout', () => {
        notificationClose.style.color = 'gray';
    });

    notificationMessage.style.color = 'black';
    notificationMessage.style.fontSize = '1rem';
    notificationMessage.style.fontWeight = 'bold';
    notificationMessage.style.textAlign = 'center';

    notificationProgressBar.style.width = '100%';
    notificationProgressBar.style.height = '5px';
    notificationProgressBar.style.backgroundColor = 'lightgreen';
    notificationProgressBar.style.transition = 'width 0.5s ease-in-out';
    notificationProgressBar.style.animation = 'progress 3s linear';
    

    

    



};
export default NotificationUi;
