function createHome() {
    const container = document.createElement('div');
    container.classList.add('home', 'main');
    const desc = document.createElement('h2');
    const text = document.createElement('p');
    const img = document.createElement('img');
    const invite = document.createElement('p');
    
    desc.textContent = 'The finest, most delicious pasta you can find in the country!';
    text.textContent = 'Making the best pasta since 1973';
    img.src = "images/pasta.jpeg";
    img.width = 400;
    img.height = 400;
    invite.textContent = 'Come and visit us or order delivery from major food delivery sites!';

    container.appendChild(desc);
    container.appendChild(text);
    container.appendChild(img);
    container.appendChild(invite);
    
    return container;
}

function loadHome() {
    const content = document.getElementById("content");
    const footer = document.getElementsByClassName("footer")[0];
    const main = document.getElementsByClassName('main')[0];

    if (main) {
        content.replaceChild(createHome(), main);
    }
    else content.insertBefore(createHome(), footer);
}

export default loadHome;