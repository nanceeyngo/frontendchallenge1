

document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.getElementById ('menu-toggle');
    let menuLinks = document.getElementById ('menu-links');;

    menuToggle.addEventListener ('click', function() {
        menuLinks.classList.toggle('active');
      
});
    });
    