// JavaScript code in script-imageflipping.js

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.about-image');
    let currentImageIndex = 0;

    function showNextImage() {
        const previousImageIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

        // Fade out previous image
        images[previousImageIndex].style.opacity = '0';
        
        // Set the next image to be fully visible
        images[currentImageIndex].style.opacity = '1';

        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(showNextImage, 5000); // Change image every 5 seconds
});
