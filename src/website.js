import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement("div");
    header.classList.add('header');
    const title = document.createElement('h1');
    const tabs = document.createElement('div');
    const home = document.createElement('input');
    const menu = document.createElement('input');
    const contact = document.createElement('input');

    title.textContent = "The Pasta Shop";
    home.setAttribute("type", "button");
    menu.setAttribute("type", "button");
    contact.setAttribute("type", "button");
    home.setAttribute("value", "Home");
    menu.setAttribute("value", "Menu");
    contact.setAttribute("value", "Contact");

    home.addEventListener("click", () => {
        loadHome();
        home.style.borderBottom = "3px solid white"
        menu.style.borderBottom = "none";
        contact.style.borderBottom = "none";
    }, false);

    menu.addEventListener("click", () => {
        loadMenu();
        home.style.borderBottom = "none"
        menu.style.borderBottom = "3px solid white";
        contact.style.borderBottom = "none";
    }, false);

    contact.addEventListener("click", () => {
        loadContact();
        home.style.borderBottom = "none"
        menu.style.borderBottom = "none";
        contact.style.borderBottom = "3px solid white";
    }, false);

    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);
    header.appendChild(title);
    header.appendChild(tabs);

    return header;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = `Made by SquishyFishy69 © 2021`;

    return footer;
}

function initializePage() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createFooter());
    loadHome();  
}

export default initializePage;