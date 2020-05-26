

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
  { type: 'dragon', bg: 'rgb(112, 10, 238, 0.75)' }
];


// Randomize button event listener
document.querySelector('#random-button').addEventListener('click', randomPokeAPI);
function randomPokeAPI() {

  const randomNum = Math.floor(Math.random() * 151 + 1);

  apiCall(randomNum);
}

randomPokeAPI();


// Number select button event listener
document.querySelector('#choose-ID').addEventListener('click', numberPokeAPI);
function numberPokeAPI() {

  const numberValue = Number(document.querySelector('#number-input').value);
  const errorContainer = document.querySelector('#error-container');

  if (!isNaN(numberValue) && numberValue > 0 && numberValue <= 151) {

    apiCall(numberValue);

  } else if (numberValue <= 0) {
    errorContainer.innerHTML = '<div>Please select number above 0</div>';

  } else if (numberValue > 151) {
    errorContainer.innerHTML = '<div>Please select number under 152 - Gen 1 only</div>';
  }

  setTimeout(() => {
    errorContainer.innerHTML = '';
  }, 3000);
}

// Name select buttom event listener
document.querySelector('#choose-name').addEventListener('click', namePokeAPI);
function namePokeAPI() {

  const nameValue = (document.querySelector('#name-input').value).toLowerCase();

  if (nameValue && isNaN(nameValue)) {

    apiCall(nameValue);
  }

}



// API call based on number
async function apiCall(pokemonNum) {
  clearCard();

  const pokeAPI = `https://pokeapi.co/api/v2/pokemon/${pokemonNum}/`;

  const response = await fetch(pokeAPI);
  const pokeData = await response.json();

  const { name, id, types, abilities } = pokeData;

  insertSprite(id);
  insertName(name);
  insertID(id);
  insertTypes(types);
  insertAbilities(abilities);
  changeBG(types);
}



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
  document.querySelector('.name-row').lastChild.innerHTML = '';
  document.querySelector('.ID-row').lastChild.innerHTML = '';
  document.querySelector('.type-list').innerHTML = '';
  document.querySelector('.abilities-list').innerHTML = '';

}



