const btnChg = document.querySelector(".changeChar");
const fightBtn = document.querySelector(".fight");

function getCharacters() {
    let changeData = function (){
      return Math.ceil(Math.random() * 9)};

    let api_urlImg = changeData();
    let api_urlImg1 = changeData();

    while (api_urlImg === api_urlImg1) {
      api_urlImg1 = changeData();
    }

    let api_url = "https://swapi.co/api/people/" + api_urlImg;
    let api_url1 = "https://swapi.co/api/people/" + api_urlImg1;

    while (api_url === api_url1) {
      api_url1 = "https://swapi.co/api/people/" + changeData();
    }

  document.getElementById("photoOne").setAttribute("src", `img/${api_urlImg}.jpg`);
  document.getElementById("photoTwo").setAttribute("src", `img/${api_urlImg1}.jpg`);

  async function getData() {

    const data = await fetch(api_url);
    const resp = await data.json();

    document.querySelector(".person").textContent = resp.name;
    document.querySelector(".height").textContent = resp.height;
    document.querySelector(".gender").textContent = resp.gender;
    document.querySelector(".birthYear").textContent = resp.birth_year;

    const data1 = await fetch(api_url1);
    const resp1 = await data1.json();
    document.querySelector(".person1").textContent = resp1.name;
    document.querySelector(".height1").textContent = resp1.height;
    document.querySelector(".gender1").textContent = resp1.gender;
    document.querySelector(".birthYear1").textContent = resp1.birth_year;
  }
  getData();
}

btnChg.addEventListener("click", function(){
  getCharacters();
  })

getCharacters();
