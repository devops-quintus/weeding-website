function init() {
    // Get the HTML DOM element that will contain your map 
    var mapElement = document.getElementById('map');

    // Create the iframe element
    var iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.4774715625266!2d79.1508339565606!3d21.20647345388606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7f3a0a413d7%3A0x62777c60670ee58b!2sFour%20leaf%20gardens!5e0!3m2!1sen!2sin!4v1728390186009!5m2!1sen!2sin";
    iframe.width = "100%";  // Set to 100% for responsiveness
    iframe.height = "740";   // Set height as needed (CSS can override this)
    iframe.style.border = "0"; // Remove border
    iframe.allowFullscreen = true; // Allow fullscreen
    iframe.loading = "lazy"; // Lazy loading
    iframe.referrerPolicy = "no-referrer-when-downgrade"; // Referrer policy

    // Clear the map element and append the iframe
    mapElement.innerHTML = ""; // Clear any existing content
    mapElement.appendChild(iframe);
}

// Use the DOMContentLoaded event to ensure the DOM is fully loaded before running init
document.addEventListener('DOMContentLoaded', init);
