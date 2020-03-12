//Barra de Navegacion Lateral

const navBarLeftSelector = document.querySelector('.navBarLeft');
navBarLeftSelector.innerHTML = `
<ul class="navBarLeftUl">
<i class="fas fa-battery-full"></i>
<li><a href="index.html">Home</a></li>
 <li><a href="about.html">Sobre mí</a></li>
 <li><a href="portfolio.html">Portfolio</a>
   </li>
 <li><a href="contact.html">Contacto</a></li>
</ul> 
<hr > 
`;

// Barra de Redes Sociales

const lateralBarSelector = document.querySelector('.lateralBar');
lateralBarSelector.innerHTML = `<div class="lateralBarContainer">
<a href="#" class="fab fa-facebook"></a>
<a href="https://github.com/nucleico/projects" class="fab fa-github"></a>
<a href="#" class="fab fa-google"></a>
<a href="https://www.linkedin.com/in/guidovalenzuela/" class="fab fa-linkedin"></a>
<a href="#" class="fab fa-youtube"></a>
</div> `;

// Barra superior y Burger

const navBarLeft = document.querySelector('.navBarLeftUl');
const burgerDiv = document.querySelector('.burgerDiv');
const burgerLines = document.querySelectorAll('.burgerLines');
let barFolded = true;

burgerDiv.addEventListener('click', function() {
  burgerLines.forEach(function(item) {
    item.classList.toggle('cruz');
    if (barFolded) {
      navBarLeft.style.transform = 'translate(100%, 0)';
      navBarLeft.style.transition = 'all 1s ease';
    } else {
      navBarLeft.style.transform = 'translate(-100%, 0)';
    }
    barFolded = !barFolded;
  });
});
