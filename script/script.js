const navClassUp = document.querySelector('.navClassUp');
const navDiv = document.createElement('div');
navDiv.innerHTML = `<nav class="navClass">
<ul>
 <li><a class="link" href="index.html"><span class="op">Home</span></a></li>
 <li><a class="link" href="about.html"><span class="op">Sobre mí</span></a></li>
 <li class="navHover link"><a class="link" href="portfolio.html"><span class="op">Portfolio</span></a>
   <ul class="sub-menu">
     <li><a class="link" href="apps/tip/tip.html">Tip Calculator</a></li>
     <li> <a class="link" href="apps/Todo%20List/todo.html">Todo List</li>
     <li><a class="link" href="apps/Star%20Wars/index.html">Star Wars App</li>
       <li><a class="link" href="apps/Countdown/index.html">Word App</li>
       <li> <a class="link" href="https://nucleico.github.io/tennisApp1/">Tennis Search</li>
   </ul></li>
 <li><a class="link" href="contact.html"><span class="op">Contacto</span></a></li>
</ul>
<hr id="hr"> 
</nav>`;
const navDivF = navClassUp.appendChild(navDiv);
navDivF.classList.add('navClass');

const lateralBar = document.querySelector('.lateralBar');
const lateralBarDiv = document.createElement('div');
lateralBarDiv.innerHTML = `<div class="cont">
<a href="#" class="fa fa-facebook"></a>
<a href="https://github.com/nucleico/Web-Personal" class="fa fa-github"></a>
<a href="#" class="fa fa-google"></a>
<a href="https://www.linkedin.com/in/guidovalenzuela/" class="fa fa-linkedin"></a>
<a href="#" class="fa fa-youtube"></a>
</div> `;
const lateralBarDivF = lateralBar.appendChild(lateralBarDiv);
lateralBarDivF.classList.add('cont'); //commen
