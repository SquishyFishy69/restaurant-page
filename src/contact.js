function createContact() {
    const container = document.createElement('div');
    container.classList.add('contact', 'main');
    const title = document.createElement('h2');
    const text = document.createElement('p');
    const img = document.createElement('img');
    const caption = document.createElement('p');
    
    title.textContent = 'Contact';
    text.textContent = 'Phone: 1234 5678 | Email: test@odin.com | Address: 1 Old Town Road, Singapore 123456';
    img.src = "images/man.png";
    img.width = 400;
    img.height = 400;
    caption.textContent = 'This is our head chef!';

    container.appendChild(title);
    container.appendChild(text);
    container.appendChild(img);
    container.appendChild(caption);
    
    return container;
}

function loadContact() {
    const content = document.getElementById("content");
    const footer = document.getElementsByClassName('footer')[0];
    const main = document.getElementsByClassName('main')[0];

    if (main) {
        content.replaceChild(createContact(), main);
    }
    else content.insertBefore(createContact(), footer);
}

export default loadContact;