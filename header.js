document.addEventListener("DOMContentLoaded", function () {
    const header = document.createElement("header");
    const nav = document.createElement("div");
    nav.classList.add("navbar");
    
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");
    logoDiv.innerHTML = '<img src="Semplice__2_-removebg-preview.png" alt="Vegan To-Go" width="auto" height="auto">';
    
    const navLinks = document.createElement("ul");
    navLinks.classList.add("nav-links");
    navLinks.innerHTML = `
        <li><a href="index.html">Home</a></li>
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

    // Select navbar here after it's appended
    const navbar = document.querySelector(".navbar");

    // Call the function to set active button
    setActiveButton(navbar);
});



// Ensure buttons exist before applying function
window.addEventListener("hashchange", function() {
    const navbar = document.querySelector(".navbar"); // Re-select navbar in case it's re-rendered
    
});
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const link= document.querySelectorAll(".nav-links li a")
    const orderBtn=document.querySelector(".order-btn")
 
    //const button = link.querySelectorAll("a");
   //console.log(button)
   
    if (navbar) {
        let scrollPos = window.scrollY;
        let btn_color =250- window.scrollY;
        let opacity = Math.min(1,scrollPos / 1000); // Increase opacity with scroll
       
        navbar.style.backgroundColor = `rgba(255, 224, 195,  ${opacity})`; // Update background color
        link.forEach(btn=>{
            orderBtn.style.color=`rgba( ${btn_color} ,${btn_color} , ${btn_color}, 1)`
            btn.style.color=`rgba( ${btn_color} ,${btn_color} , ${btn_color}, 1)`
        })
    }
    setActiveButton(navbar);
});

function setActiveButton(navbar) {
    let buttons = navbar.querySelectorAll(".nav-links a"); // Select all anchor tags in the navbar
    let currentFile = location.pathname.split("/").pop().split("#")[0].split("?")[0]; // Get file name without hash or query

    buttons.forEach(button => {
        let buttonFile = button.getAttribute("href").split("/").pop().split("#")[0].split("?")[0];
       
        if (currentFile==""){
            buttons[0].style.color = "red";
        }
        if (buttonFile === currentFile) {
            button.style.color = "red"; // Set color for active button
        }
    });
}