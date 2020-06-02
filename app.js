

// **************************************************************************
// MAIN CARD DOM SECTION - see maincard.js
// **************************************************************************


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


const randomButton = document.querySelector('#random-button');
const genOptions = document.querySelector('#generations');
const numButton = document.querySelector('#choose-ID');
const nameButton = document.querySelector('#choose-name');
const scrollButtons = document.querySelector('.scroll-select');

const mainCard = new MainCard(randomButton, genOptions, numButton, nameButton, scrollButtons);

mainCard.randomPokeAPI();


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





// **************************************************************************
// SEARCH FEATURE AUTOCOMPLETE
// **************************************************************************


let typesArray = [];

document.addEventListener('DOMContentLoaded', queryData);
async function queryData() {

  const nameInput = document.querySelector('#name-input');
  nameInput.disabled = true;

  for (let i = 1; i <= 807; i++) {
    const pokeAPI = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    const response = await fetch(pokeAPI);
    const pokeData = await response.json();
    const { types } = pokeData;

    typesArray.push(types);

  }

  console.log(typesArray);

  nameInput.disabled = false;

}



document.addEventListener('input', nameSearch);
function nameSearch() {

  const nameInputValue = document.querySelector('#name-input').value;

  document.querySelector('.search-container').innerHTML = '';

  if (nameInputValue.length >= 2) {

    pokemonNamesArray.forEach((pokeName, idx) => {
      if (pokeName.includes(nameInputValue.toLowerCase())) {

        displaySearchResults(pokeName, idx + 1, typesArray[idx]);

      }

    });
  }

}

function displaySearchResults(name, id, typeArray) {

  const searchContainer = document.querySelector('.search-container');
  const searchResult = `
  <div class="search-result" id='${id}'>
  <img src="https://pokeres.bastionbot.org/images/pokemon/${id}.png" alt="">
  <div class="search-name">
  <p>${name[0].toUpperCase() + name.slice(1)}</p>
  <p>#${id}</p>
  </div>
  </div>
  `;

  searchContainer.insertAdjacentHTML('beforeend', searchResult);

  for (let type of typeArray) {
    if (type.slot === 1) {
      const primaryType = type.type.name;
      for (let pokeType of typeBG) {
        if (pokeType.type === primaryType) {
          const allResults = document.querySelectorAll('.search-result');
          const lastIndex = allResults.length - 1;
          allResults[lastIndex].style.background = pokeType.bg;
        }
      }
    }
  }

}


// add to main card
document.querySelector('.search-container').addEventListener('click', addResultToMain);
function addResultToMain(e) {

  if (e.target.className === 'search-result') {
    pokemonNum = Number(e.target.id);
  } else if (e.target.className === 'search-name' || e.target.tagName === 'IMG') {
    pokemonNum = Number(e.target.parentElement.id);
  } else if (e.target.tagName === 'P') {
    pokemonNum = Number(e.target.parentElement.parentElement.id);
  }

  mainCard.apiCall(pokemonNum);

  e.preventDefault();
}

