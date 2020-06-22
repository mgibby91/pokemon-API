class PokemonBook {

  constructor(addButton, deleteButton) {
    this.addButton = addButton;
    this.deleteButton = deleteButton;

    this.addButton.addEventListener('click', this.addPokemonToBook);
    this.deleteButton.addEventListener('click', this.deletePokemonFromBook);
  }

  addPokemonToBook = () => {

    // Current pokemon info
    const currentName = document.querySelector('.name-row').lastChild.textContent;
    const currentID = document.querySelector('.ID-row').lastChild.textContent;
    const currentGen = document.querySelector('.gen-row').lastChild.textContent;
    const currentTypeList = document.querySelector('.type-list').childNodes;
    let typeListItems = [];
    for (let item of currentTypeList) { typeListItems.push(item.textContent) };

    const miniCardData = {
      name: currentName,
      id: currentID,
      gen: currentGen,
      typeList: typeListItems
    }

    miniBookData.push(miniCardData);

    console.log(miniBookData);

    // Add card to local storage
    this.addCardToLS(miniCardData);

    // Create mini-card to append into book
    const cardBook = document.querySelector('.card-book');

    this.addCardsToBook(miniCardData, miniBookData.length, cardBook);

  }

  deletePokemonFromBook = (e) => {

    if (e.target.parentElement.className === 'delete-mini-card') {
      e.target.parentElement.parentElement.remove();
    }

    const cardName = e.target.parentElement.parentElement.children[2].children[0].children[1].textContent;

    this.deleteCardFromLS(cardName)

    for (let i = 0; i < miniBookData.length; i++) {
      if (miniBookData[i].name === cardName) {
        miniBookData.splice(miniBookData.indexOf(miniBookData[i]), 1);
      }
    }

    e.preventDefault();
  }

  addCardsToBook = (cardDataArray, typeListNumber, cardBook) => {


    const bgColor = this.getBG(cardDataArray.typeList[cardDataArray.typeList.length - 1].toLowerCase());

    const miniCardHTML = `
    <div class="mini-card" style='background:${bgColor}'>
    <div class="delete-mini-card"><i class="fas fa-times fa-lg"></i></div>
    <div class="mini-sprite">
      <img src="https://pokeres.bastionbot.org/images/pokemon/${cardDataArray.id}.png" alt="">
    </div>
    <div class="mini-info-table">
      <div class="mini-row mini-name-row">
        <p>Name</p>
        <p id='mini-insert-name'>${cardDataArray.name}</p>
      </div>
      <div class="mini-row mini-ID-row">
        <p>Number</p>
        <p id='mini-insert-ID'>${cardDataArray.id}</p>
      </div>
      <div class="mini-row mini-gen-row">
        <p>Generation</p>
        <p id='mini-insert-gen'>${cardDataArray.gen}</p>
      </div>
      <div class="mini-row mini-type-row">
        <p>Type</p>
        <ul class='mini-type-list-${typeListNumber}'>
    
        </ul>
      </div>
    </div>
    </div>`;

    cardBook.insertAdjacentHTML('beforeend', miniCardHTML);

    const ulTypeList = document.querySelector(`.mini-type-list-${typeListNumber}`);

    // create li's for types
    for (let typeListItem of cardDataArray.typeList) {
      let newLi = document.createElement('li');
      newLi.textContent = typeListItem;
      ulTypeList.appendChild(newLi);
    }
  }

  getBG = (pokeType) => {
    for (let array of typeBG) {
      if (array.type === pokeType) {
        return array.bg;
      }
    }
  }

  addCardToLS = (cardData) => {
    let pokemonCards;
    if (localStorage.getItem('pokemonCards') === null) {
      pokemonCards = [];
    } else {
      pokemonCards = JSON.parse(localStorage.getItem('pokemonCards'));
    }
    pokemonCards.push(cardData);
    localStorage.setItem('pokemonCards', JSON.stringify(pokemonCards));
  }

  deleteCardFromLS = (cardNameToDelete) => {

    let pokemonCards;
    if (localStorage.getItem('pokemonCards') === null) {
      pokemonCards = [];
    } else {
      pokemonCards = JSON.parse(localStorage.getItem('pokemonCards'));
    }

    pokemonCards.forEach((card, index) => {
      if (card.name === cardNameToDelete) {
        pokemonCards.splice(index, 1);
      }
    });

    localStorage.setItem('pokemonCards', JSON.stringify(pokemonCards));
  }

  getCardsFromLS = () => {

    let pokemonCards;
    if (localStorage.getItem('pokemonCards') === null) {
      pokemonCards = [];
    } else {
      pokemonCards = JSON.parse(localStorage.getItem('pokemonCards'));
    }

    const cardBook = document.querySelector('.card-book');
    cardBook.innerHTML = '';

    for (let card of pokemonCards) {

      this.addCardsToBook(card, pokemonCards.indexOf(card) + 1, cardBook);

    }

    return pokemonCards;

  }


}