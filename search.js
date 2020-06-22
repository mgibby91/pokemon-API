class Search {
  constructor(nameSearchInput, searchContainer) {
    this.nameSearchInput = nameSearchInput;
    this.searchContainer = searchContainer;

    document.addEventListener('DOMContentLoaded', this.queryData);
    this.nameSearchInput.addEventListener('input', this.nameSearch);
    this.searchContainer.addEventListener('click', this.addResultToMain);
  }

  // queryData = async () => {

  //   this.nameSearchInput.disabled = true;

  //   for (let i = 1; i <= 807; i++) {
  //     const pokeAPI = `https://pokeapi.co/api/v2/pokemon/${i}/`;
  //     const response = await fetch(pokeAPI);
  //     const pokeData = await response.json();
  //     const { types } = pokeData;

  //     typesArray.push(types);

  //     console.log(typesArray);
  //     // Should hard code these into an array so don't have to query on every single load
  //   }

  //   this.nameSearchInput.disabled = false;
  // }

  nameSearch = () => {

    const nameInputValue = this.nameSearchInput.value;

    document.querySelector('.search-container').innerHTML = '';

    if (nameInputValue.length >= 2) {

      pokemonNamesArray.forEach((pokeName, idx) => {
        if (pokeName.includes(nameInputValue.toLowerCase())) {

          this.displaySearchResults(pokeName, idx + 1, pokemonTypesArray[idx]);

        }
      });
    }
  }

  addResultToMain = (e) => {

    let pokemonNum;

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

  displaySearchResults = (name, id, typeArray) => {

    const searchResult = `
    <div class="search-result" id='${id}'>
    <img src="https://pokeres.bastionbot.org/images/pokemon/${id}.png" alt="">
    <div class="search-name">
    <p>${name[0].toUpperCase() + name.slice(1)}</p>
    <p>#${id}</p>
    </div>
    </div>
    `;

    this.searchContainer.insertAdjacentHTML('beforeend', searchResult);

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


}

