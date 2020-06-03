

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
// SEARCH FEATURE AUTOCOMPLETE - see search.js
// **************************************************************************

let typesArray = [];

const nameSearchInput = document.querySelector('#name-input');
const searchContainer = document.querySelector('.search-container');

const search = new Search(nameSearchInput, searchContainer);




// **************************************************************************
// COMPARISON FEATURE
// **************************************************************************


const addBattle1 = document.querySelector('#add-battle-1');
const addBattle2 = document.querySelector('#add-battle-2');

addBattle1.addEventListener('click', addToComparison);
addBattle2.addEventListener('click', addToComparison);
async function addToComparison(e) {

  const currentName = document.querySelector('.name-row').lastChild.textContent;
  const currentNum = Number(document.querySelector('.ID-row').lastChild.textContent);
  const currentColor = document.querySelector('.name-row').style.background;

  const compareNum = e.target.value;

  addCharacteristsToCompare(currentName, currentNum, currentColor, compareNum);

  const pokeAPI = `https://pokeapi.co/api/v2/pokemon/${currentNum}/`;
  const response = await fetch(pokeAPI);
  const pokeData = await response.json();
  const { stats } = pokeData;

  addStatsToCompare1(stats, compareNum);

  comparisonColors();

}


function addCharacteristsToCompare(name, num, color, id) {

  const pokemon = document.querySelector(`#pokemon-${id}`);
  const pokemonName = document.querySelector(`#pokemon-${id} p`);
  const pokemonImg = document.querySelector(`#pokemon-${id} img`);

  pokemon.style.border = `${color} 10px solid`;
  pokemonName.textContent = name;
  pokemonImg.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${num}.png`);

}


function addStatsToCompare1(stats, id) {

  let hp, attack, defense, specialAttack, specialDefense, speed;

  for (let stat of stats) {
    if (stat.stat.name === 'hp') {
      hp = stat.base_stat;
    } else if (stat.stat.name === 'attack') {
      attack = stat.base_stat;
    } else if (stat.stat.name === 'defense') {
      defense = stat.base_stat;
    } else if (stat.stat.name === 'special-attack') {
      specialAttack = stat.base_stat;
    } else if (stat.stat.name === 'special-defense') {
      specialDefense = stat.base_stat;
    } else if (stat.stat.name === 'speed') {
      speed = stat.base_stat;
    }
  }

  const hpEl = document.querySelector(`#pokemon-${id} #hp-stat`);
  const attackEl = document.querySelector(`#pokemon-${id} #attack-stat`);
  const defenseEl = document.querySelector(`#pokemon-${id} #defense-stat`);
  const specialAttackEl = document.querySelector(`#pokemon-${id} #special-attack-stat`);
  const specialDefenseEl = document.querySelector(`#pokemon-${id} #special-defense-stat`);
  const speedEl = document.querySelector(`#pokemon-${id} #speed-stat`);

  hp < 100 ? hpEl.style.width = `${hp}%` : hpEl.style.width = '100%';
  hpEl.textContent = hp;

  attack < 100 ? attackEl.style.width = `${attack}%` : attackEl.style.width = '100%';
  attackEl.textContent = attack;

  defense < 100 ? defenseEl.style.width = `${defense}%` : defenseEl.style.width = '100%';
  defenseEl.textContent = defense;

  specialAttack < 100 ? specialAttackEl.style.width = `${specialAttack}%` : specialAttackEl.style.width = '100%';
  specialAttackEl.textContent = specialAttack;

  specialDefense < 100 ? specialDefenseEl.style.width = `${specialDefense}%` : specialDefenseEl.style.width = '100%';
  specialDefenseEl.textContent = specialDefense;

  speed < 100 ? speedEl.style.width = `${speed}%` : speedEl.style.width = '100%';
  speedEl.textContent = speed;

}



function comparisonColors() {

  const hp1 = document.querySelector(`#pokemon-1 #hp-stat`);
  const attack1 = document.querySelector(`#pokemon-1 #attack-stat`);
  const defense1 = document.querySelector(`#pokemon-1 #defense-stat`);
  const specialAttack1 = document.querySelector(`#pokemon-1 #special-attack-stat`);
  const specialDefense1 = document.querySelector(`#pokemon-1 #special-defense-stat`);
  const speed1 = document.querySelector(`#pokemon-1 #speed-stat`);

  const pokemon1Array = [hp1, attack1, defense1, specialAttack1, specialDefense1, speed1];

  const hp2 = document.querySelector(`#pokemon-2 #hp-stat`);
  const attack2 = document.querySelector(`#pokemon-2 #attack-stat`);
  const defense2 = document.querySelector(`#pokemon-2 #defense-stat`);
  const specialAttack2 = document.querySelector(`#pokemon-2 #special-attack-stat`);
  const specialDefense2 = document.querySelector(`#pokemon-2 #special-defense-stat`);
  const speed2 = document.querySelector(`#pokemon-2 #speed-stat`);

  const pokemon2Array = [hp2, attack2, defense2, specialAttack2, specialDefense2, speed2];


  const bgColors = {
    higher: 'rgb(0, 168, 0)',
    lower: 'rgb(227,53,13)',
    equal: 'rgb(0, 140, 255)'
  }

  for (let i = 0; i < pokemon1Array.length; i++) {
    let iter1 = pokemon1Array[i];
    let iter2 = pokemon2Array[i];
    if (Number(iter1.textContent) > Number(iter2.textContent)) {
      iter1.style.background = bgColors.higher;
      iter2.style.background = bgColors.lower;
    } else if (Number(iter1.textContent) === Number(iter2.textContent)) {
      iter1.style.background = bgColors.equal;
      iter2.style.background = bgColors.equal;
    } else {
      iter1.style.background = bgColors.lower;
      iter2.style.background = bgColors.higher;
    }
  }


}

