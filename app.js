

const typeBG = [
  { type: 'grass', bg: 'rgb(45, 205, 69, 0.75)' },
  { type: 'fire', bg: 'rgb(240, 128, 48, 0.75)' },
  { type: 'water', bg: 'rgb(20, 158, 255, 0.75)' },
  { type: 'bug', bg: 'rgb(168, 184, 32, 0.75)' },
  { type: 'normal', bg: 'rgb(168, 168, 120, 0.75)' },
  { type: 'poison', bg: 'rgb(136, 54, 136, 0.75)' },
  { type: 'electric', bg: 'rgb(248, 208, 48, 0.75)' },
  { type: 'ground', bg: 'rgb(224, 192, 104, 0.75)' },
  { type: 'fairy', bg: 'rgb(238, 153, 172, 0.75)' },
  { type: 'water', bg: 'rgb(20, 158, 255, 0.75)' },
  { type: 'fighting', bg: 'rgb(148, 53, 45, 0.75)' },
  { type: 'psychic', bg: 'rgb(255, 105, 150, 0.75)' },
  { type: 'rock', bg: 'rgb(184, 160, 56, 0.75)' },
  { type: 'ghost', bg: 'rgb(97, 76, 131, 0.75)' },
  { type: 'ice', bg: 'rgb(152, 216, 216, 0.75)' },
  { type: 'dragon', bg: 'rgb(112, 10, 238, 0.75)' },
  { type: 'dark', bg: 'rgb(92, 72, 59, 0.75)' },
  { type: 'steel', bg: 'rgb(184, 184, 208, 0.75)' }
];

// Global DOM elements used in multiple functions
const nameErrorContainer = document.querySelector('#name-error-container');

// Generate random number based on select option chosen
const selectGeneration = document.querySelector('#generations');
selectGeneration.addEventListener('select', randomNumberSet);
function randomNumberSet() {

  let randomNum;

  if (selectGeneration.value === 'All-Generations') {
    randomNum = Math.floor(Math.random() * 807 + 1);
  } else if (selectGeneration.value === 'Generation-I') {
    randomNum = Math.floor(Math.random() * 151 + 1);
  } else if (selectGeneration.value === 'Generation-II') {
    randomNum = Math.floor(Math.random() * 100 + 152);
  } else if (selectGeneration.value === 'Generation-III') {
    randomNum = Math.floor(Math.random() * 134 + 252);
  } else if (selectGeneration.value === 'Generation-IV') {
    randomNum = Math.floor(Math.random() * 106 + 387);
  } else if (selectGeneration.value === 'Generation-V') {
    randomNum = Math.floor(Math.random() * 155 + 494);
  } else if (selectGeneration.value === 'Generation-VI') {
    randomNum = Math.floor(Math.random() * 71 + 650);
  } else if (selectGeneration.value === 'Generation-VII') {
    randomNum = Math.floor(Math.random() * 85 + 722);
  }

  return randomNum;
}


// Start Interval button event listener
document.querySelector('#start-interval').addEventListener('click', intervalRandom);
function intervalRandom() {

  const int = setInterval(() => {
    timer();
  }, 2000);

  function timer() {
    const rand = randomNumberSet();
    apiCall(rand);
  }

  // End Interval remove event listener
  document.querySelector('#end-interval').addEventListener('click', function () {
    clearInterval(int);
  });

}


// Randomize button event listener
document.querySelector('#random-button').addEventListener('click', randomPokeAPI);
function randomPokeAPI() {

  const rand = randomNumberSet();

  apiCall(rand);
}

randomPokeAPI();


// Number select button event listener
document.querySelector('#choose-ID').addEventListener('click', numberPokeAPI);
function numberPokeAPI() {

  const numberValue = Number(document.querySelector('#number-input').value);
  const errorContainer = document.querySelector('#error-container');

  if (!isNaN(numberValue) && numberValue > 0 && numberValue <= 807) {

    apiCall(numberValue);

  } else if (numberValue <= 0) {
    errorContainer.innerHTML = '<div>Please select valid number</div>';
  } else if (numberValue > 807) {
    errorContainer.innerHTML = '<div>Only first 807 available</div>';
  }

  setTimeout(() => {
    errorContainer.innerHTML = '';
  }, 3000);
}

// Name select buttom event listener
document.querySelector('#choose-name').addEventListener('click', namePokeAPI);
function namePokeAPI() {

  const nameValue = (document.querySelector('#name-input').value).toLowerCase();
  // const nameErrorContainer = document.querySelector('#name-error-container');

  if (nameValue && isNaN(nameValue)) {

    apiCall(nameValue);

  } else if (!nameValue) {
    nameErrorContainer.innerHTML = '<div>Please enter valid name in input field</div>';
  } else if (!isNaN(nameValue)) {
    nameErrorContainer.innerHTML = '<div>Please enter alpha characters in input field</div>';
  }

  setTimeout(() => {
    nameErrorContainer.innerHTML = '';
  }, 3000);
}

// Left/Right arrow scroll buttons
document.querySelector('.scroll-select').addEventListener('click', scrollPoke);
function scrollPoke(e) {

  const currentNumber = parseInt(document.querySelector('.ID-row').lastChild.textContent);

  if (e.target.id === 'left') {
    apiCall(currentNumber - 1);
  } else if (e.target.id === 'right') {
    apiCall(currentNumber + 1);
  }

  e.preventDefault();
}

// // Left/Right key press to scroll pokemon
// document.addEventListener('keydown', keyScrollPoke);
// function keyScrollPoke(e) {

//   const currentNumber = parseInt(document.querySelector('.ID-row').lastChild.textContent);

//   if (e.keyCode === 37) {
//     apiCall(currentNumber - 1);
//   } else if (e.keyCode === 39) {
//     apiCall(currentNumber + 1);
//   }

//   e.preventDefault();
// }


// API call based on number
async function apiCall(pokemonNum) {

  const pokeAPI = `https://pokeapi.co/api/v2/pokemon/${pokemonNum}/`;

  const response = await fetch(pokeAPI);

  if (response.status === 200) {
    clearCard();
    const pokeData = await response.json();
    const { name, id, types, abilities } = pokeData;

    insertSprite(id);
    insertName(name);
    insertID(id);
    insertGen(id);
    insertTypes(types);
    insertAbilities(abilities);
    changeBG(types);

  } else {
    // const nameErrorContainer = document.querySelector('#name-error-container');
    nameErrorContainer.innerHTML = '<div>Pokemon not found</div>';
    setTimeout(() => {
      nameErrorContainer.innerHTML = '';
    }, 3000);
  }
}


// **************************************************************************
// INSERT MAIN CARD DOM SECTION
// **************************************************************************

// Insert name in DOM
function insertName(name) {

  const nameRow = document.querySelector('.name-row');
  const pokemonName = `<p id='insert-name'>${name[0].toUpperCase() + name.slice(1)}</p>`;
  nameRow.insertAdjacentHTML('beforeend', pokemonName);

}

// Insert ID in DOM
function insertID(id) {

  const idRow = document.querySelector('.ID-row');
  const pokemonID = `<p id='insert-ID'>${id}</p>`;
  idRow.insertAdjacentHTML('beforeend', pokemonID);

}


// Insert Gen in DOM
function insertGen(id) {

  const genRow = document.querySelector('.gen-row');
  let generationLabel;

  id = Number(id);

  if (id >= 1 && id <= 151) {
    generationLabel = 'I';
  } else if (id >= 152 && id <= 251) {
    generationLabel = 'II';
  } else if (id >= 252 && id <= 386) {
    generationLabel = 'III';
  } else if (id >= 387 && id <= 493) {
    generationLabel = 'IV';
  } else if (id >= 494 && id <= 649) {
    generationLabel = 'V';
  } else if (id >= 650 && id <= 721) {
    generationLabel = 'VI';
  } else if (id >= 722 && id <= 807) {
    generationLabel = 'VII';
  }

  const pokemonGen = `<p id='insert-gen'>${generationLabel}</p>`;
  genRow.insertAdjacentHTML('beforeend', pokemonGen);

}

// Insert Types in DOM
function insertTypes(types) {

  const typesRow = document.querySelector('.type-list');

  for (let type of types) {
    const li = document.createElement('li');
    li.textContent = type.type.name[0].toUpperCase() + type.type.name.slice(1);
    typesRow.insertAdjacentElement('afterbegin', li);
  }

}

// Insert Pic in DOM
function insertSprite(num) {

  const spriteDiv = document.querySelector('.sprite');
  const img = document.createElement('img');
  img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${num}.png`);
  spriteDiv.appendChild(img);

}

// Insert Abilities in DOM
function insertAbilities(abilities) {

  const abilitiesRow = document.querySelector('.abilities-list');

  for (let ability of abilities) {
    const li = document.createElement('li');
    li.textContent = ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1);
    abilitiesRow.appendChild(li);
  }

}


// Change BG of Stats
function changeBG(typeArray) {

  for (let type of typeArray) {
    if (type.slot === 1) {
      const primaryType = type.type.name;
      for (let pokeType of typeBG) {
        if (pokeType.type === primaryType) {
          const rows = document.getElementsByClassName('row');
          for (let row of rows) {
            row.style.background = pokeType.bg;
          }
        }
      }
    }
  }

}

// Clear card
function clearCard() {

  document.querySelector('.sprite').innerHTML = '';
  document.querySelector('.name-row').lastChild.remove();
  document.querySelector('.ID-row').lastChild.remove();
  document.querySelector('.gen-row').lastChild.remove();
  document.querySelector('.type-list').innerHTML = '';
  document.querySelector('.abilities-list').innerHTML = '';

}


// **************************************************************************
// ADD/DELETE CARDS TO BOOK SECTION - see pokemonbook.js
// **************************************************************************


const addButton = document.querySelector('#add-pokemon');
const deleteButton = document.querySelector('.card-book');

const pokemonBook = new PokemonBook(addButton, deleteButton);

let miniBookData = pokemonBook.getCardsFromLS();

document.addEventListener('DOMContentLoaded', pokemonBook.getCardsFromLS);



// **************************************************************************
// SORTING BUTTONS - see sorting.js
// **************************************************************************


// Sorting buttons
const sortName = document.querySelector('#sort-name');
const sortNumber = document.querySelector('#sort-id');
const sortGen = document.querySelector('#sort-gen');
const sortType = document.querySelector('#sort-type');

const sorting = new Sorting(sortName, sortNumber, sortGen, sortType);


