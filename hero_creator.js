const heroSection = document.createElement('section');
heroSection.classList.add('hero');

const heroContent = document.createElement('div');
heroContent.classList.add('hero-content');

const heading = document.createElement('h1');
heading.textContent = 'Semplice Verde';

const paragraph = document.createElement('p');
paragraph.textContent = 'A taste of tradition.';

const menuButton = document.createElement('a');
menuButton.href = 'menu.html';
menuButton.classList.add('menu-btn');
menuButton.textContent = 'To Go Menu';

// Append elements to the hero content
heroContent.appendChild(heading);
heroContent.appendChild(paragraph);
heroContent.appendChild(menuButton);

// Append hero content to hero section
heroSection.appendChild(heroContent);

// Append hero section to the body or a specific container
document.body.appendChild(heroSection);