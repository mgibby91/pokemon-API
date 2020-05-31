

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


