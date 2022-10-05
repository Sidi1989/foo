const LANGUAGES = [
  {
    "id": "lan1a",
    "name": "Castellano",
    "code": "ES1",
    "flag": "https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Spain-Flag-icon.png"
  },
  {
    "id": "lan2b",
    "name": "Lenguas Cooficiales",
    "code": "ES2",
    "flag": "https://lostraductores.es/wp-content/uploads/espana-1.png"
  },
  {
    "id": "lan3c",
    "name": "Inglés",
    "code": "ENG",
    "flag": "https://icons.iconarchive.com/icons/custom-icon-design/flag-3/256/United-Kingdom-flag-icon.png"
  },
  {
    "id": "lan4d",
    "name": "Francés",
    "code": "FRE",
    "flag": "https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/France-Flag-icon.png"
  },
  {
    "id": "lan5e",
    "name": "Alemán",
    "code": "GER",
    "flag": "https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Germany-Flag-icon.png"
  },
  {
    "id": "lan6f",
    "name": "Italiano",
    "code": "ITA",
    "flag": "https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Italy-Flag-icon.png"
  },
  {
    "id": "lan7g",
    "name": "Portugués",
    "code": "POR",
    "flag": "https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Portugal-Flag-icon.png"
  },
  {
    "id": "lan8h",
    "name": "Latín clásico",
    "code": "LAT",
    "flag": "https://ih1.redbubble.net/image.2911804228.8250/gbrf,6x6,f,540x540-pad,450x450,f8f8f8.jpg"
  },
  {
    "id": "lan9i",
    "name": "Griego clásico",
    "code": "GRC",
    "flag": "https://styles.redditmedia.com/t5_39f68r/styles/communityIcon_4wz6ykdjvat51.png"
  },
  {
    "id": "lan10j",
    "name": "Lenguas bíblicas",
    "code": "HBO",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Hebrew_Chai_Symbol.svg/275px-Hebrew_Chai_Symbol.svg.png"
  },
  {
    "id": "lan11k",
    "name": "Árabigo",
    "code": "ARA",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Flag_of_the_Arabic_language.svg/320px-Flag_of_the_Arabic_language.svg.png"
  },
  {
    "id": "lan12l",
    "name": "Ruso",
    "code": "RUS",
    "flag": "https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/128/Russia-Flag-icon.png"
  },
  {
    "id": "lan13m",
    "name": "Chino",
    "code": "CHI",
    "flag": "https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/China-Flag-icon.png"
  },
  {
    "id": "lan14n",
    "name": "Japonés",
    "code": "JPN",
    "flag": "https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Japan-Flag-icon.png"
  }
];


/**
 * @description
 * función con que se obtiene desde la DB todo el objeto "categories"
 */
var getAllLanguages = function () {
  return LANGUAGES;
};


/**
 * @description
 * función con que se filtra y obtiene la información de la DB sobre un "language"
 * específico a partir de la identificación de su atributo "id"
 */
var getLanguageById = function (id) {
  var filteredLanguages = LANGUAGES.filter(function (e) {
    return (e.id == id);
  });

  var language;
  if (filteredLanguages.length == 0) {
    language = null;
  } else {
    language = filteredLanguages[0];
  }

  return language;
};




exports.getAllLanguages = getAllLanguages;
exports.getLanguageById = getLanguageById;
