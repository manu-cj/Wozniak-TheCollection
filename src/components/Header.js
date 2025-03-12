// Note: Header ui element

import headerUi from "../ui/headerUi";

const Header = (header) => {
    const siteName = document.createElement('a');
    siteName.href = '/';
    siteName.textContent = 'The Wozniak Collection';
    
    header.appendChild(siteName);

    headerUi(header, siteName);

}

export default Header;