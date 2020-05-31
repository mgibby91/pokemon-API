class Sorting {

  constructor(nameButton, numberButton, genButton, typeButton) {
    this.nameButton = nameButton;
    this.numberButton = numberButton;
    this.genButton = genButton;
    this.typeButton = typeButton;

    this.nameButton.addEventListener('click', this.sortByName);
    this.numberButton.addEventListener('click', this.sortByNumber);
    this.genButton.addEventListener('click', this.sortByGen);
    this.typeButton.addEventListener('click', this.sortByType);
  }

  sortByName = () => {

    if (miniBookData) {
      function compare(a, b) {

        const nameOne = a.name;
        const nameTwo = b.name;

        let comparison = 0;
        if (nameOne > nameTwo) {
          comparison = 1;
        } else if (nameOne < nameTwo) {
          comparison = -1;
        }
        return comparison;
      }
      miniBookData.sort(compare);
    }

    this.displayNewlySorted();

  }

  sortByNumber = () => {

    if (miniBookData) {

      function compare(a, b) {

        const idOne = Number(a.id);
        const idTwo = Number(b.id);

        let comparison = 0;
        if (idOne > idTwo) {
          comparison = 1;
        } else if (idOne < idTwo) {
          comparison = -1;
        }
        return comparison;
      }

      miniBookData.sort(compare);

    }

    this.displayNewlySorted();
  }

  sortByGen = () => {

    if (miniBookData) {
      function compare(a, b) {

        const nameOne = a.gen;
        const nameTwo = b.gen;

        let comparison = 0;
        if (nameOne > nameTwo) {
          comparison = 1;
        } else if (nameOne < nameTwo) {
          comparison = -1;
        }
        return comparison;
      }
      miniBookData.sort(compare);
    }

    this.displayNewlySorted();

  }

  sortByType = () => {

    if (miniBookData) {
      function compare(a, b) {

        const nameOne = a.typeList[0];
        const nameTwo = b.typeList[0];

        let comparison = 0;
        if (nameOne > nameTwo) {
          comparison = 1;
        } else if (nameOne < nameTwo) {
          comparison = -1;
        }
        return comparison;
      }
      miniBookData.sort(compare);
    }

    this.displayNewlySorted();

  }

  displayNewlySorted = () => {
    const cardBook = document.querySelector('.card-book');
    cardBook.innerHTML = '';

    for (let pokemon of miniBookData) {

      // Create mini-card to append into book
      pokemonBook.addCardsToBook(pokemon, miniBookData.indexOf(pokemon) + 1, cardBook);

    }
  }


}