class Comparison {
  constructor(comparison1Button, comparison2Button) {
    this.comparison1Button = comparison1Button;
    this.comparison2Button = comparison2Button;

    this.comparison1Button.addEventListener('click', this.addToComparison);
    this.comparison2Button.addEventListener('click', this.addToComparison);
  }

  addToComparison = async (e) => {
    const currentName = document.querySelector('.name-row').lastChild.textContent;
    const currentNum = Number(document.querySelector('.ID-row').lastChild.textContent);
    const currentColor = document.querySelector('.name-row').style.background;

    const compareNum = e.target.value;

    this.addCharacteristsToCompare(currentName, currentNum, currentColor, compareNum);

    const pokeAPI = `https://pokeapi.co/api/v2/pokemon/${currentNum}/`;
    const response = await fetch(pokeAPI);
    const pokeData = await response.json();
    const { stats } = pokeData;

    this.addStatsToCompare1(stats, compareNum);

    this.comparisonColors();
  }

  onLoadAddToComparison = async (battleNum) => {

    const randomNum = Math.floor(Math.random() * 807 + 1);

    const pokeAPI = `https://pokeapi.co/api/v2/pokemon/${randomNum}/`;
    const response = await fetch(pokeAPI);
    const pokeData = await response.json();
    const { stats, name, types, id } = pokeData;

    const currentName = name[0].toUpperCase() + name.slice(1);
    const currentNum = id;

    const type = types[types.length - 1].type.name;

    let bgColor;
    for (let bg of typeBG) {
      if (bg.type === type) {
        bgColor = bg.bg;
      }
    }

    this.addCharacteristsToCompare(currentName, currentNum, bgColor, battleNum);

    this.addStatsToCompare1(stats, battleNum);

    this.comparisonColors()

  }

  addCharacteristsToCompare = (name, num, color, id) => {

    const pokemon = document.querySelector(`#pokemon-${id}`);
    const pokemonName = document.querySelector(`#pokemon-${id} p`);
    const pokemonImg = document.querySelector(`#pokemon-${id} img`);

    pokemon.style.border = `${color} 10px solid`;
    pokemonName.textContent = `${name}\u00A0 #${num}`;
    pokemonImg.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${num}.png`);

  }

  addStatsToCompare1 = (stats, id) => {

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

  comparisonColors = () => {

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


}