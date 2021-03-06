const apps = [
  {
    name: 'Marvel App',
    description: 'Buscar personajes de Marvel (desarrollada en React).',
    img: 'marvelImg.jpg',
    route: 'https://guarded-spire-04377.herokuapp.com/',
    class: 'marvelApp',
  },
  {
    name: 'Chat App',
    description: 'Chat App (desarrollada con node.js y socket.io)',
    img: 'chat.png',
    route: 'https://fierce-oasis-03933.herokuapp.com/',
    class: 'chatapp',
  },
  {
    name: 'Ta Te Ti',
    description:
      'Ta Te Ti en JS (con Auth hecho con Node, noSQL DB con Mongoose).',
    img: 'tictactoeA.jpg',
    route: 'https://calm-taiga-61752.herokuapp.com/',
    class: 'tatetiApp',
  },
  {
    name: 'Type the Word',
    description:
      'Completá frases en el menor tiempo posible. (Vanilla Javascript)',
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
