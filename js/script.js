const btnBurger = document.querySelector('#burger');
const navbar = document.querySelector('.navbar');
const hiddenWindow = document.querySelector('.window');
const links = document.querySelectorAll(".tap");

btnBurger.onclick = function() { 
    navbar.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
    hiddenWindow.style.display = 'block';

    links.forEach(link => link.addEventListener("click", closeNavbar));
    hiddenWindow.addEventListener("click", (e) => {
        if (e.target === hiddenWindow) {
            closeNavbar();
        }
    });
}

function closeNavbar() {
    navbar.style.display = 'none';
    document.body.style.overflowY = '';
    hiddenWindow.style.display = 'none';
}
хуй