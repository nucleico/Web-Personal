const apps = [
  {
    name: 'Ta Te Ti',
    description: 'Simple juego de Ta Te Ti en JS.',
    img: 'tateti.png',
    route: 'apps/tictac/index.html',
    class: 'tatetiApp'
  },
  {
    name: 'TodoList',
    description: 'Agregar actividades, hacerlas, seguir.',
    img: 'todo.png',
    route: 'apps/Todo%20List/todo.html',
    class: 'todoApp'
  },
  {
    name: 'TipApp',
    description: 'Calculá tus propinas.',
    img: 'tip.png',
    route: 'apps/tip/tip.html',
    class: 'tipApp'
  },
  {
    name: 'StarWars',
    description: 'Enfrentá a tus personajes favoritos de Star Wars.',
    img: 'starwars.png',
    route: 'apps/Star%20Wars/index.html',
    class: 'starWarsApp'
  },
  {
    name: 'Word',
    description: 'Completá frases en el menor tiempo posible.',
    img: 'word.png',
    route: 'apps/Countdown/index.html',
    class: 'wordApp'
  },
  {
    name: 'TennisSearch',
    description: 'Buscá tus tenistas (desarrollada en React)',
    img: 'tennis.png',
    route: 'https://nucleico.github.io/tennisApp1/',
    class: 'tennisApp'
  },
  {
    name: 'Progress Bar',
    description: 'Barra de progreso con setInterval',
    img: 'progressBar.png',
    route: 'apps/progressBar/index.html',
    class: 'progressBarApp'
  }
];

const appsArr = apps
  .map(app => {
    return `<a class="linkApp" href="${app.route}"> <div class="zone ${app.class}"><img id="appImg" src="./img/${app.img}" alt=""><span class="textApp">${app.description}</span> </div> </a>`;
  })
  .join('');

const container = document.querySelector('.container');
const appsDiv = document.createElement('div');
appsDiv.innerHTML = appsArr;
const appsArrF = container.appendChild(appsDiv);
appsArrF.classList.add('gridRow');
