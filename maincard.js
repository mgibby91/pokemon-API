class MainCard {

  constructor(randomButton, genOptions, numButton, nameButton, scrollButtons) {
    this.randomButton = randomButton;
    this.genOptions = genOptions;
    this.numButton = numButton;
    this.nameButton = nameButton;
    this.scrollButtons = scrollButtons;

    this.randomButton.addEventListener('click', this.randomPokeAPI);
    this.genOptions.addEventListener('select', this.randomNumberSet);
    this.numButton.addEventListener('click', this.numberPokeAPI);
    this.nameButton.addEventListener('click', this.namePokeAPI);
    this.scrollButtons.addEventListener('click', this.scrollPoke);
  }

  randomPokeAPI = () => {

    const rand = this.randomNumberSet();

    this.apiCall(rand);
  }

  randomNumberSet = () => {

    let randomNum;

    if (this.genOptions.value === 'All-Generations') {
      randomNum = Math.floor(Math.random() * 807 + 1);
    } else if (this.genOptions.value === 'Generation-I') {
      randomNum = Math.floor(Math.random() * 151 + 1);
    } else if (this.genOptions.value === 'Generation-II') {
      randomNum = Math.floor(Math.random() * 100 + 152);
    } else if (this.genOptions.value === 'Generation-III') {
      randomNum = Math.floor(Math.random() * 134 + 252);
    } else if (this.genOptions.value === 'Generation-IV') {
      randomNum = Math.floor(Math.random() * 106 + 387);
    } else if (this.genOptions.value === 'Generation-V') {
      randomNum = Math.floor(Math.random() * 155 + 494);
    } else if (this.genOptions.value === 'Generation-VI') {
      randomNum = Math.floor(Math.random() * 71 + 650);
    } else if (this.genOptions.value === 'Generation-VII') {
      randomNum = Math.floor(Math.random() * 85 + 722);
    }

    return randomNum;
  }

  numberPokeAPI = () => {

    const numberValue = Number(document.querySelector('#number-input').value);
    const errorContainer = document.querySelector('#error-container');

    if (!isNaN(numberValue) && numberValue > 0 && numberValue <= 807) {

      this.apiCall(numberValue);

    } else if (numberValue <= 0) {
      errorContainer.innerHTML = '<div>Please select valid number</div>';
    } else if (numberValue > 807) {
      errorContainer.innerHTML = '<div>Only first 807 available</div>';
    }

    setTimeout(() => {
      errorContainer.innerHTML = '';
    }, 3000);
  }

  namePokeAPI = () => {

    const nameErrorContainer = document.querySelector('#name-error-container');
    const nameValue = (document.querySelector('#name-input').value).toLowerCase();
    // const nameErrorContainer = document.querySelector('#name-error-container');

    if (nameValue && isNaN(nameValue)) {

      this.apiCall(nameValue);

    } else if (!nameValue) {
      nameErrorContainer.innerHTML = '<div>Please enter valid name in input field</div>';
    } else if (!isNaN(nameValue)) {
      nameErrorContainer.innerHTML = '<div>Please enter alpha characters in input field</div>';
    }

    setTimeout(() => {
      nameErrorContainer.innerHTML = '';
    }, 3000);
  }

  scrollPoke = (e) => {

    const currentNumber = parseInt(document.querySelector('.ID-row').lastChild.textContent);

    if (e.target.id === 'left') {
      this.apiCall(currentNumber - 1);
    } else if (e.target.id === 'right') {
      this.apiCall(currentNumber + 1);
    }

    e.preventDefault();
  }

  apiCall = async (pokemonNum) => {

    const nameErrorContainer = document.querySelector('#name-error-container');

    const pokeAPI = `https://pokeapi.co/api/v2/pokemon/${pokemonNum}/`;

    const response = await fetch(pokeAPI);

    if (response.status === 200) {
      this.clearCard();
      const pokeData = await response.json();
      const { name, id, types, abilities } = pokeData;

      this.insertSprite(id);
      this.insertName(name);
      this.insertID(id);
      this.insertGen(id);
      this.insertTypes(types);
      this.insertAbilities(abilities);
      this.changeBG(types);


    } else {
      // const nameErrorContainer = document.querySelector('#name-error-container');
      nameErrorContainer.innerHTML = '<div>Pokemon not found</div>';
      setTimeout(() => {
        nameErrorContainer.innerHTML = '';
      }, 3000);
    }
  }

  insertName = (name) => {

    const nameRow = document.querySelector('.name-row');
    const pokemonName = `<p id='insert-name'>${name[0].toUpperCase() + name.slice(1)}</p>`;
    nameRow.insertAdjacentHTML('beforeend', pokemonName);
  }

  insertID = (id) => {

    const idRow = document.querySelector('.ID-row');
    const pokemonID = `<p id='insert-ID'>${id}</p>`;
    idRow.insertAdjacentHTML('beforeend', pokemonID);
  }

  insertGen = (id) => {

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

  insertTypes = (types) => {

    const typesRow = document.querySelector('.type-list');

    for (let type of types) {
      const li = document.createElement('li');
      li.textContent = type.type.name[0].toUpperCase() + type.type.name.slice(1);
      typesRow.insertAdjacentElement('afterbegin', li);
    }
  }

  insertSprite = async (num) => {

    const spriteDiv = document.querySelector('.sprite');
    const img = document.createElement('img');

    img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${num}.png`);
    spriteDiv.appendChild(img);
  }

  insertAbilities = (abilities) => {

    const abilitiesRow = document.querySelector('.abilities-list');

    for (let ability of abilities) {
      const li = document.createElement('li');
      li.textContent = ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1);
      abilitiesRow.appendChild(li);
    }
  }

  changeBG = (typeArray) => {

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

  clearCard = () => {

    document.querySelector('.sprite').innerHTML = '';
    document.querySelector('.name-row').lastChild.remove();
    document.querySelector('.ID-row').lastChild.remove();
    document.querySelector('.gen-row').lastChild.remove();
    document.querySelector('.type-list').innerHTML = '';
    document.querySelector('.abilities-list').innerHTML = '';

  }
}