document.addEventListener("DOMContentLoaded", function () {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="slogan"></div>
        <div class="contract-box">
            <div class="location">
                <h3>Where to find us?</h3>
                <p>1540 West Blvd Suite #107, Charlotte, NC 28208
                   </p>
            </div>

            <div class="contract_info">
                <h3>Contact Information</h3>
                <p>Phone: 123 456 7890<br>
                   Email: SemplicVerde@gmail.com</p>
            </div>  
          
        </div>

        <div class="social_media">
            <div class="open_hours"> 
                <h3>Our Opening Hours</h3>
                <p>MONDAY-FRIDAY 9:00 a.m. – 5:00 p.m.</p>
                <p>SATURDAY 8:00 a.m. – 3:00 p.m.</p>
                <p>SUNDAY 9:00 a.m. – 2:00 p.m.</p>
            </div>

            <div class="media"> 
                <h3>Our Social Media</h3>
                <a href="https://www.instagram.com/" target="_blank">
                    <img src="https://cdn.pixabay.com/photo/2022/04/01/19/41/logo-7105561_1280.png" alt="Instagram Logo">
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <img src="https://cdn.pixabay.com/photo/2022/04/01/19/41/logo-7105561_1280.png" alt="Facebook Logo">
                </a>
                <a href="https://www.x.com/" target="_blank">
                    <img src="https://cdn.pixabay.com/photo/2022/04/01/19/41/logo-7105561_1280.png" alt="Twitter Logo">
                </a>
            </div>
        </div>
    `;
    
    document.body.appendChild(footer);
});
