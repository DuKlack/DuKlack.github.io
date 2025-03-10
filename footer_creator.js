document.addEventListener("DOMContentLoaded", function () {
    const footer = document.createElement("footer");
    
    // Social Media Section
    const socialMedia = document.createElement("div");
    socialMedia.classList.add("social-media");
    
    const facebook = document.createElement("a");
    facebook.href = "https://www.facebook.com/";
    facebook.innerHTML = '<img src="food-img/facebook-7678778_1280.png" alt="Facebook" width="100" height="100">';
    
    const instagram = document.createElement("a");
    instagram.href = "https://www.instagram.com/";
    instagram.innerHTML = '<img src="food-img/instagram-7678783_1280.png" alt="Instagram" width="100" height="100">';
    
    const address = document.createElement("a");
    address.href = "https://www.google.com/maps";
    address.textContent = "Address";
    
    socialMedia.append(facebook, instagram, address);
    
    // Contact Section
    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.innerHTML = "<p>Phone: 123-456-7890</p><p>Email: xxxxx@gmail.com</p>";
    
    // Location Section
    const location = document.createElement("div");
    location.classList.add("location");
    location.innerHTML = "<p>Monday-Friday: 9am-9pm</p><p>Saturday-Sunday: 10am-10pm</p>";
    
    // Append sections to footer
    footer.append(socialMedia, contact, location);
    
    // Append footer to the body
    document.body.appendChild(footer);
});
