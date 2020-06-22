const pokemonNamesArray = [
  "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran-f", "nidorina", "nidoqueen", "nidoran-m", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr-mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho-oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry", "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass", "skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham", "electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish", "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas", "milotic", "castform", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius", "chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys-normal", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon", "burmy", "wormadam-plant", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor", "bronzong", "bonsly", "mime-jr", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon-z", "gallade", "probopass", "dusknoir", "froslass", "rotom", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran", "regigigas", "giratina-altered", "cresselia", "phione", "manaphy", "darkrai", "shaymin-land", "arceus", "victini", "snivy", "servine", "serperior", "tepig", "pignite", "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog", "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage", "simisage", "pansear", "simisear", "panpour", "simipour", "munna", "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika", "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur", "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole", "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott", "petilil", "lilligant", "basculin-red-striped", "sandile", "krokorok", "krookodile", "darumaka", "darmanitan-standard", "maractus", "dwebble", "crustle", "scraggy", "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta", "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark", "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis", "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish", "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier", "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik", "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang", "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick", "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo", "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo", "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp", "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor", "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona", "cobalion", "terrakion", "virizion", "tornadus-incarnate", "thundurus-incarnate", "reshiram", "zekrom", "landorus-incarnate", "kyurem", "keldeo-ordinary", "meloetta-aria", "genesect", "chespin", "quilladin", "chesnaught", "fennekin", "braixen", "delphox", "froakie", "frogadier", "greninja", "bunnelby", "diggersby", "fletchling", "fletchinder", "talonflame", "scatterbug", "spewpa", "vivillon", "litleo", "pyroar", "flabebe", "floette", "florges", "skiddo", "gogoat", "pancham", "pangoro", "furfrou", "espurr", "meowstic-male", "honedge", "doublade", "aegislash-shield", "spritzee", "aromatisse", "swirlix", "slurpuff", "inkay", "malamar", "binacle", "barbaracle", "skrelp", "dragalge", "clauncher", "clawitzer", "helioptile", "heliolisk", "tyrunt", "tyrantrum", "amaura", "aurorus", "sylveon", "hawlucha", "dedenne", "carbink", "goomy", "sliggoo", "goodra", "klefki", "phantump", "trevenant", "pumpkaboo-average", "gourgeist-average", "bergmite", "avalugg", "noibat", "noivern", "xerneas", "yveltal", "zygarde", "diancie", "hoopa", "volcanion", "rowlet", "dartrix", "decidueye", "litten", "torracat", "incineroar", "popplio", "brionne", "primarina", "pikipek", "trumbeak", "toucannon", "yungoos", "gumshoos", "grubbin", "charjabug", "vikavolt", "crabrawler", "crabominable", "oricorio-baile", "cutiefly", "ribombee", "rockruff", "lycanroc-midday", "wishiwashi-solo", "mareanie", "toxapex", "mudbray", "mudsdale", "dewpider", "araquanid", "fomantis", "lurantis", "morelull", "shiinotic", "salandit", "salazzle", "stufful", "bewear", "bounsweet", "steenee", "tsareena", "comfey", "oranguru", "passimian", "wimpod", "golisopod", "sandygast", "palossand", "pyukumuku", "type-null", "silvally", "minior-red-meteor", "komala", "turtonator", "togedemaru", "mimikyu-disguised", "bruxish", "drampa", "dhelmise", "jangmo-o", "hakamo-o", "kommo-o", "tapu-koko", "tapu-lele", "tapu-bulu", "tapu-fini", "cosmog", "cosmoem", "solgaleo", "lunala", "nihilego", "buzzwole", "pheromosa", "xurkitree", "celesteela", "kartana", "guzzlord", "necrozma", "magearna", "marshadow", "poipole", "naganadel", "stakataka", "blacephalon", "zeraora"
];

const pokemonTypesArray = [
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
      }
    }
  ],
  [
    {
      "slot": 1,
      "type": {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    }
  ]
];