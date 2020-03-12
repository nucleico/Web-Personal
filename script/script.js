const navClassUp = document.querySelector('.navClassUp');
const navDiv = document.createElement('div');

navDiv.innerHTML = `
<ul id="navBarUl">
<i class="fas fa-battery-full"></i>
<li><a class="link" href="index.html"><span class="op">Home</span></a></li>
 <li><a class="link" href="about.html"><span class="op">Sobre mí</span></a></li>
 <li class="navHover link"><a class="link" href="portfolio.html"><span class="op">Portfolio</span></a>
   </li>
 <li><a class="link" href="contact.html"><span class="op">Contacto</span></a></li>
</ul> 
<hr id="hr"> 
`;
const navDivF = navClassUp.appendChild(navDiv);
navDivF.classList.add('navClass');
// navDivF.style.display = 'none';
const bar = document.querySelector('#navBarUl');

const lateralBar = document.querySelector('.lateralBar');
const lateralBarDiv = document.createElement('div');
lateralBarDiv.innerHTML = `<div class="lateralBarContainer">
<a href="#" class="fab fa-facebook"></a>
<a href="https://github.com/nucleico/projects" class="fab fa-github"></a>
<a href="#" class="fab fa-google"></a>
<a href="https://www.linkedin.com/in/guidovalenzuela/" class="fab fa-linkedin"></a>
<a href="#" class="fab fa-youtube"></a>
</div> `;
const lateralBarDivF = lateralBar.appendChild(lateralBarDiv);
lateralBarDivF.classList.add('cont'); //commen

let lines = document.querySelector('.lines');
let line = document.querySelectorAll('.line');
let barFolded = true;

lines.addEventListener('click', function() {
  line.forEach(function(item) {
    item.classList.toggle('cruz');
    if (barFolded) {
      bar.style.transform = 'translate(100%, 0)';
      bar.style.transition = 'all 1s ease';
    } else {
      bar.style.transform = 'translate(-100%, 0)';
    }
    barFolded = !barFolded;
  });
});
