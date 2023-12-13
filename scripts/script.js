

////////////
//CHOCOLADE CARROUSEL
////////////


const images = [];
const delay = 100
for (let i = 1; i <= 21; i++) {
  images.push(`images/missie_00${i < 10 ? 0 : ''}${i}.jpg`)
}
// Het HTML element van de carousel:
const wikkelContainer = document.querySelector('.wikkel')

function next() {
  const img = document.querySelector('img.current')
  if (img.nextSibling) {
    img.classList.remove('current')
    img.nextSibling.classList.add('current')
    if(img.nextSibling.nextSibling) setTimeout(next, delay)
  }
}

window.onload = () => {
  //teller die bijhoudt hoeveel afbeelding zijn ingeladen:
  let loaded = 0

  // preload alle afbeeldingen zodat de gebruikerservaring beter wordt:
  for (const src of images) {
    const img = new Image()
    wikkelContainer.appendChild(img)
    // als de image is ingeladen door de browser, hoog dan de teller op met 1:
    img.onload = () => {
      // als alle afbeeldingen zijn ingeladen, start dan de carousel:
      if (++loaded === images.length) {
        wikkelContainer.classList.remove('loading')
        wikkelContainer.querySelector('img').classList.add('current')
        setTimeout(next, delay)
      }
    }
    img.src = src
  }

  ////////////
  //UITKLAPTEKST
  ////////////
  const knop = document.getElementById('meer-tekst-button')
  const tekst = document.getElementById('tekst')
  if (knop) {
    knop.addEventListener('click', () => {
      if (tekst.classList.contains('verborgen')) {
        counter()
      }
      tekst.classList.toggle('verborgen')
    })
    document.querySelector('#tekst button').addEventListener('click', () => document.getElementById('tekst').classList.add('verborgen'))
  }  
} 

function counter () {
  const counterElement = document.getElementById('counter');
  const targetCount = 30000;
  const speed = .5; // Milliseconden per iteratie

  function updateCounter(currentCount) {
    counterElement.textContent = currentCount;
  }

  function startCounter() {
    let currentCount = 15000;

    function incrementCounter() {
      if (currentCount <= targetCount) {
        updateCounter(currentCount);
        currentCount+=10;
        setTimeout(incrementCounter, speed);
      }
    }
    incrementCounter();
  }
  startCounter();
};

////////////
//HAMBURGER
////////////

//functie om het menu uit te laten klappen
var button = document.querySelector('nav > button');
var nieuweButton = document.querySelector('.afsluiten');

button.addEventListener('click', function(){
  var menu = document.querySelector('nav > ul').classList.toggle('menu-open');
  // ook voor nav zelf:
  var navbuttonholder = document.querySelector('nav').classList.toggle('menu-is-open');
  // var nieuweButton = document.querySelector('.afsluiten').classList.toggle('.afsluiten');
  })
  
  nieuweButton.addEventListener('click', function(){
    var menu = document.querySelector('nav > ul').classList.toggle('menu-open');
    // ook voor nav zelf:
    var navbuttonholder = document.querySelector('nav').classList.toggle('menu-is-open');
    // var nieuweButton = document.querySelector('.afsluiten').classList.toggle('.afsluiten');
    })

    ////////////
//MEDIA QUERY
////////////

function changeImageSource() {
  var image = document.querySelector('.verhaal');

  if (window.matchMedia('(prefers-color-scheme:dark)')) {
    image.src = 'images/verhaal-5.png';
  } else {
    image.src = 'images/verhaal-4.1.png';
  }
}

window.addEventListener('load', changeImageSource);


