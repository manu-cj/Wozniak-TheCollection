// header ui function
const headerUi = (header, siteName) => {
    header.style.backgroundColor = 'tomato';
    header.style.color = 'white';
    header.style.padding = '1rem';
    header.style.display = 'flex';
    header.style.justifyContent = 'baseline';
    header.style.alignItems = 'center';
    header.style.position = 'fixed';
    header.style.width = '100%';
    header.style.top = '0';
    header.style.left = '0';
    header.style.zIndex = '1000';

    siteName.style.color = 'white';
    siteName.style.textDecoration = 'none';
    siteName.style.fontSize = '1.5rem';
    siteName.style.fontWeight = 'bold';
}
export default headerUi;