const apps = [
  {
    name: 'Marvel App',
    description: 'Buscar personajes de Marvel (desarrollada en React).',
    img: 'marvelImg.jpg',
    route: 'https://guarded-spire-04377.herokuapp.com/',
    class: 'marvelApp',
  },
  {
    name: 'Ta Te Ti',
    description: 'Simple juego de Ta Te Ti en JS.',
    img: 'tictactoeA.jpg',
    route: 'apps/tictac/index.html',
    class: 'tatetiApp',
  },
  {
    name: 'Type the Word',
    description: 'Completá frases en el menor tiempo posible.',
    img: 'wordA.jpg',
    route: 'apps/Countdown/index.html',
    class: 'wordApp',
  },
  {
    name: 'Tennis Search',
    description: 'Buscá tus tenistas (desarrollada en React)',
    img: 'tennisA.jpeg',
    route: 'https://nucleico.github.io/tennisApp1/',
    class: 'tennisApp',
  },
  {
    name: 'Star Wars Matchup',
    description: 'Enfrentá a tus personajes favoritos de Star Wars.',
    img: 'starwarsA.jpeg',
    route: 'apps/Star%20Wars/index.html',
    class: 'starWarsApp',
  },
];

const appsArr = apps
  .map((app) => {
    return ` <div class="card" >
    <div class="imgBx">
    <a href="${app.route}">
      <img
        src="img/${app.img}"
        alt="images">
        
        </a>
    </div>
    <div class="details">
      <h2>${app.name}<br /><span>${app.description}</span></h2>
    </div>
  </div>`;
  })
  .join('');

const portfolioContainer = document.querySelector('.boxContainer');
portfolioContainer.innerHTML = appsArr;
portfolioContainer.classList.add('gridRow');
