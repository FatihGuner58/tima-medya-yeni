document.addEventListener('DOMContentLoaded', function() {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var menuList = document.querySelector('.menu-list');

    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('hamburger-open');
        menuList.classList.toggle('active');
    });
});