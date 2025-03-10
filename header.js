
 
 document.addEventListener("DOMContentLoaded", function () {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    nav.classList.add("navbar");
    
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");
    logoDiv.innerHTML = '<img src="Semplice__2_-removebg-preview.png" alt="Vegan To-Go" width="auto" height="auto">';
    
    const navLinks = document.createElement("ul");
    navLinks.classList.add("nav-links");
    navLinks.innerHTML = `
        <li><a href="/">Home</a></li>
        <li><a href="menu.html">Restaurant Menu</a></li>
        <li><a href="Contact.html">Contact Us</a></li>
        <li><a href="AboutUs.html">About Us</a></li>
    `;
    
    const orderBtn = document.createElement("a");
    orderBtn.href = "https://www.doordash.com/";
    orderBtn.classList.add("order-btn");
    orderBtn.textContent = "Order Online";
    
    nav.append(logoDiv, navLinks, orderBtn);
    header.appendChild(nav);
    document.body.prepend(header);
    });

function setActiveButton() {
    let buttons = document.querySelectorAll(".nav-links a"); // Select all anchor tags
    let currentFile = location.pathname.split("/").pop().split("#")[0].split("?")[0]; // Get file name without hash or query

    buttons.forEach(button => {
        let buttonFile = button.getAttribute("href").split("/").pop().split("#")[0].split("?")[0];
        console.log(`Checking button: ${buttonFile}`); // Debugging log
        console.log(currentFile)

        if (buttonFile === currentFile) {
            
            button.style.color= "red"; // Correct class addition
            console.log(1)
        } 
    });
}

// Ensure buttons exist before applying function
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");
    console.log(document.querySelectorAll(".nav-links a")); // Debugging log
    setActiveButton();
});

window.addEventListener("hashchange", setActiveButton);
