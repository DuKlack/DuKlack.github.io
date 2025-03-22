document.addEventListener("DOMContentLoaded", function () {
    const footer = document.createElement("footer");
    footer.innerHTML = `
       <script src="https://kit.fontawesome.com/018043deb3.js" crossorigin="anonymous"></script>
        <div class="slogan"></div>
        
        <div class="contract-box">
            <div class="location">
                <h3>Where to find us?</h3>
                <p>123 Main St, Springfield, IL 62701
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
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                   <i class="fa-brands fa-facebook"></i>
                 </a>
                <a href="https://www.x.com/" target="_blank">
                   <i class="fa-brands fa-twitter"></i>
                </a>
            </div>
        </div>
    `;
    
    document.body.appendChild(footer);
});
