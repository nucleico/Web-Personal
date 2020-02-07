const apps = [
  {
    name: 'TodoList',
    description: 'Agregar actividades, hacerlas, seguir.',
    img: 'todo.png',
    route: 'Todo%20List/todo.html',
    class: 'todoApp'
  },
  {
    name: 'TipApp',
    description: 'Calculá tus propinas.',
    img: 'tip.png',
    route: 'tip/tip.html',
    class: 'tipApp'
  },
  {
    name: 'StarWars',
    description: 'Enfrentá a tus personajes favoritos de Star Wars.',
    img: 'starwars.png',
    route: 'Star%20Wars/index.html',
    class: 'starWarsApp'
  },
  {
    name: 'Word',
    description: 'Completá frases en el menor tiempo posible.',
    img: 'word.png',
    route: 'Countdown/index.html',
    class: 'wordApp'
  },
  {
    name: 'TennisSearch',
    description: 'Info de los mejores tenistas del mundo.',
    img: 'word.png',
    route: '',
    class: 'tennisApp'
  }
];

const appsArr = apps
  .map(app => {
    return `<a class="linkApp" href="apps/${app.route}"> <div class="zone ${app.class}"><img id="appImg" src="./img/${app.img}" alt=""><span class="textApp">${app.description}</span> </div> </a>`;
  })
  .join('');

const container = document.querySelector('.container');
const appsDiv = document.createElement('div');
appsDiv.innerHTML = appsArr;
const appsArrF = container.appendChild(appsDiv);
appsArrF.classList.add('gridRow');
