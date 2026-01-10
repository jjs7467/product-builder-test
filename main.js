const generateBtn = document.getElementById('generate-btn');
const menuContainer = document.getElementById('menu-container');
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

const dinnerMenus = [
    'Pizza', 'Hamburger', 'Sushi', 'Kimchi Stew', 'Pasta', 'Steak', 'Fried Chicken', 'Tteokbokki', 'Ramen', 'Curry'
];

generateBtn.addEventListener('click', () => {
    menuContainer.innerHTML = '';
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];
    
    const menuElement = document.createElement('div');
    menuElement.classList.add('menu-item');
    menuElement.textContent = selectedMenu;
    
    menuContainer.appendChild(menuElement);
});
