

document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.getElementById ('menu-toggle');
    let menuLinks = document.getElementById ('menu-links');
    let closeBtn = document.getElementById ('close-btn');
    
   
    menuToggle.addEventListener ('click', function() {
        // menuLinks.classList.toggle('active');
        menuLinks.classList.add('active');
      
});
    closeBtn.addEventListener ('click', function() {
        menuLinks.classList.remove('active');
        
    });

    });
    