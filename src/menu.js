function createMenu() {
    const container = document.createElement('div');
    container.classList.add('menu', 'main');

    container.appendChild(
        createMenuItem("Pasta Alla Norma", "A dish made with a short pasta, with a sauce prepared with tomatoes, fried eggplant, grated ricotta salata cheese, and basil")
    );

    container.appendChild(
        createMenuItem("Bucatini all’Amatriciana", "Traditional Amatrice dish, made with bucatini pasta, with tomatoes, guanciale, Pecorino Romano cheese and black pepper")
    );

    container.appendChild(
        createMenuItem("Orecchiette ai Cime di Rapa", "A dish made of orecchiette pasta with rapini, garlic, chilli and sometimes anchovies or pork")
    );

    container.appendChild(
        createMenuItem("Pasta alla Carbonara", "A Roman dish of spaghetti pasta, with raw eggs, Pecorino Romano cheese, bacon and black pepper")
    );

    container.appendChild(
        createMenuItem("Cacio e pepe", "A Roman dish, prepared with spaghetti pasta, Pecorino Romano cheese and black pepper")
    );

    container.appendChild(
        createMenuItem("Spaghetti alle Vongole", "Spaghetti with clams. Prepared in in bianco, with oil, garlic, parsley, and a splash of white wine")
    );

    container.appendChild(
        createMenuItem("Lasagne alla Bolognese", "Bolognese lasagne dish. In this dish, the layers of lasagne sheets are alternated with Bolognese sauce, béchamel sauce and Parmigiano-Reggiano cheese")
    );

    container.appendChild(
        createMenuItem("Orecchiette con cime di rapa", "A dish made of orecchiette pasta with rapini, garlic, chilli and pork")
    );

    container.appendChild(
        createMenuItem("Tortellini in brodo", "A Bolognese dish made with traditional tortellini dumplings, cooked in broth")
    );

    container.appendChild(
        createMenuItem("Trenette al pesto", "A Genoa pasta dish, made with trenette pasta (a dried pasta similar to flat spaghetti), with pesto sauce")
    );

    return container;
}

function createMenuItem(item, desc) {
    const menuItem = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('h2');
    const text = document.createElement('p');

    img.src = `images/${item.replace(/\s+/g, '').toLowerCase()}.jpg`;
    img.alt = item;
    img.height = 200;
    img.width = 300;
    name.textContent = item;
    text.textContent = desc;

    menuItem.appendChild(img);
    menuItem.appendChild(name);
    menuItem.appendChild(text);

    return menuItem;
}

function loadMenu() {
    const content = document.getElementById("content");
    const footer = document.getElementsByClassName('footer')[0];
    const main = document.getElementsByClassName('main')[0];
    
    if (main) {
        content.replaceChild(createMenu(), main);
    }
    else content.insertBefore(createMenu(), footer);
}

export default loadMenu;