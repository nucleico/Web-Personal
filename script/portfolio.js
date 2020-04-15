const apps = [
  {
    name: 'Marvel App',
    description: 'Buscar personajes de Marvel (desarrollada en React).',
    img: 'marvellogo.png',
    route: 'https://guarded-spire-04377.herokuapp.com/',
    class: 'marvelApp',
  },
  {
    name: 'Ta Te Ti',
    description: 'Simple juego de Ta Te Ti en JS.',
    img: 'tateti.png',
    route: 'apps/tictac/index.html',
    class: 'tatetiApp',
  },
  {
    name: 'Word',
    description: 'Completá frases en el menor tiempo posible.',
    img: 'word.png',
    route: 'apps/Countdown/index.html',
    class: 'wordApp',
  },
  {
    name: 'TennisSearch',
    description: 'Buscá tus tenistas (desarrollada en React)',
    img: 'tennis.png',
    route: 'https://nucleico.github.io/tennisApp1/',
    class: 'tennisApp',
  },
  {
    name: 'StarWars',
    description: 'Enfrentá a tus personajes favoritos de Star Wars.',
    img: 'starwars.png',
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
        src= "../img/${app.img}"
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
