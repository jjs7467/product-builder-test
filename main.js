const generateBtn = document.getElementById('generate-btn');
const menuContainer = document.getElementById('menu-container');
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

const dinnerMenus = [
    {
        name: 'Pizza',
        description: 'A classic Italian dish with a round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.',
        image: 'https://via.placeholder.com/300x200.png?text=Pizza'
    },
    {
        name: 'Hamburger',
        description: 'A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
        image: 'https://via.placeholder.com/300x200.png?text=Hamburger'
    },
    {
        name: 'Sushi',
        description: 'A Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, vegetables, and occasionally tropical fruits.',
        image: 'https://via.placeholder.com/300x200.png?text=Sushi'
    },
    {
        name: 'Kimchi Stew',
        description: 'A variety of jjigae or stew-like Korean dish, made with kimchi and other ingredients, such as pork or seafood, tofu, and green onions.',
        image: 'https://via.placeholder.com/300x200.png?text=Kimchi+Stew'
    },
    {
        name: 'Pasta',
        description: 'A staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.',
        image: 'https://via.placeholder.com/300x200.png?text=Pasta'
    },
    {
        name: 'Steak',
        description: 'A meat generally sliced across the muscle fibers, potentially including a bone. It is normally grilled, but can be pan-fried.',
        image: 'https://via.placeholder.com/300x200.png?text=Steak'
    },
    {
        name: 'Fried Chicken',
        description: 'A dish consisting of chicken pieces that have been coated with seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried.',
        image: 'https://via.placeholder.com/300x200.png?text=Fried+Chicken'
    },
    {
        name: 'Tteokbokki',
        description: 'A popular Korean food made from small-sized garae-tteok called tteokmyeon or commonly tteokbokki-tteok.',
        image: 'https://via.placeholder.com/300x200.png?text=Tteokbokki'
    },
    {
        name: 'Ramen',
        description: 'A Japanese noodle soup dish. It consists of Chinese-style wheat noodles served in a meat- or (occasionally) fish-based broth, often flavored with soy sauce or miso.',
        image: 'https://via.placeholder.com/300x200.png?text=Ramen'
    },
    {
        name: 'Curry',
        description: 'A variety of dishes originating in the Indian subcontinent that use a complex combination of spices or herbs, usually including ground turmeric, cumin, coriander, ginger, and fresh or dried chilies.',
        image: 'https://via.placeholder.com/300x200.png?text=Curry'
    }
];

generateBtn.addEventListener('click', () => {
    menuContainer.innerHTML = '';
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];
    
    const menuElement = document.createElement('div');
    menuElement.classList.add('menu-item');
    
    const menuImage = document.createElement('img');
    menuImage.src = selectedMenu.image;
    menuImage.alt = selectedMenu.name;

    const menuName = document.createElement('h3');
    menuName.textContent = selectedMenu.name;

    const menuDescription = document.createElement('p');
    menuDescription.textContent = selectedMenu.description;

    menuElement.appendChild(menuImage);
    menuElement.appendChild(menuName);
    menuElement.appendChild(menuDescription);
    
    menuContainer.appendChild(menuElement);
});
