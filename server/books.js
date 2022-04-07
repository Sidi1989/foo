/*
Preguntar a Fer, sobre si la colocación de un libro en una colección puede ser nula,
con lo que el array incluiría, quizás sólo momentáneamente, 0 elementos.
*/

var book1 = {
  title: 'El corazón de las tinieblas',
  author: {
    name: 'Joseph Conrad',
    birthplace: 'Poland'
  },
  location: 'location1',
  collections: [],
  pages: 126,
  dimensions: {
    length: 18,
    width: 11
  },
  format: 'Paperback',
  language: 'ES',
  edition: {
    editorial: 'Fontana - Clásicos Universales',
    publishDate: 1994,
    issue: 1
  },
  isbn: '84-7672-625-2',
  category: {
    first:'Foreign Literature',
    second: 'Novel'
  },
  pictures: null,
  rating: {
    general: 8,6,
    copy: 7,6
  }
};

var book2 = {
  title: 'Crimen y castigo',
  author: {
    name: 'Fiódor Dostoyevski',
    birthplace: 'Russia'
  },
  location: 'location3',
  collections: [],
  pages: 525,
  dimensions: {
    length: 19,5,
    width: 13,5
  },
  format: 'Hardcover',
  language: 'ES',
  edition: {
    editorial: 'Anaya - Tus Libros',
    publishDate: 1991,
    issue: 1
  },
  isbn: '84-207-4146-9',
  category: {
    first:'Foreign Literature',
    second: 'Novel'
  },
  pictures: null,
  rating: {
    general: 9,1,
    copy: 8,9
  }
};

var book3 = {
  title: 'Rimas humanas',
  author: {
    name: 'Lope de Vega',
    birthplace: 'Spain'
  },
  location: 'location4',
  collections: [],
  pages: 1208,
  dimensions: {
    length: 20,
    width: 12,5
  },
  format: 'Hardcover',
  language: 'ES',
  edition: {
    editorial: 'Biblioteca Clásica',
    publishDate: 1998,
    issue: 2
  },
  isbn: '84-27423-843-9',
  category: {
    first:'Spanish Literature',
    second: 'Poetry'
  },
  pictures: null,
  rating: {
    general: 9,3,
    copy: 7,3
  }
};

var book4 = {
  title: 'Odisea',
  author: {
    name: 'Homero',
    birthplace: 'Ancient Greece'
  },
  location: 'location1',
  collections: [],
  pages: 256,
  dimensions: {
    length: 18,
    width: 11,5
  },
  format: 'Saddle Stitch',
  language: 'ES',
  edition: {
    editorial: 'Colección Austral',
    publishDate: 1951,
    issue: 7
  },
  isbn: null,
  category: {
    first:'Foreign Literature',
    second: 'Novel'
  },
  pictures: null,
  rating: {
    general: 8,
    copy: 5,4
  }
};

var book5 = {
  title: 'Poesías',
  author: {
    name: 'Francisco de Aldana',
    birthplace: 'Spain'
  },
  location: 'location4',
  collections: [],
  pages: 151,
  dimensions: {
    length: 18,
    width: 12,
  },
  format: 'Hardcover',
  language: 'ES',
  edition: {
    editorial: 'ESPASA CALPE - Clásicos Castellanos',
    publishDate: 1957,
    issue: 1
  },
  isbn: null,
  category: {
    first:'Spanish Literature',
    second: 'Poetry'
  },
  pictures: null,
  rating: {
    general: 6,9,
    copy: 7,7
  }
};

var book6 = {
  title: 'La civilización en la historia',
  author: {
    name: 'Eugenio d`Ors',
    birthplace: 'Spain'
  },
  location: 'location2',
  collections: [],
  pages: 215,
  dimensions: {
    length: 18,5,
    width: 12,
  },
  format: 'Paperback',
  language: 'ES',
  edition: {
    editorial: 'Criterio Libros',
    publishDate: 2003,
    issue: 1
  },
  isbn: '84-95437-14-7',
  category: {
    first:'Spanish Literature',
    second: 'Essay'
  },
  pictures: null,
  rating: {
    general: 6,1,
    copy: 6
  }
};

var book7 = {
  title: 'El fin de la infancia',
  author: {
    name: 'Arthur C. Clarke',
    birthplace: 'United Kingdom'
  },
  location: 'location3',
  collections: [],
  pages: 243,
  dimensions: {
    length: 20,5,
    width: 13
  },
  format: 'Hardcover',
  language: 'EN',
  edition: {
    editorial: 'SF Masterworks',
    publishDate: 2009,
    issue: 2
  },
  isbn: '978-0-575-08235-9',
  category: {
    first:'Foreign Literature',
    second: 'Novel'
  },
  pictures: null,
  rating: {
    general: 6,7,
    copy: 7
  }
};

var book8 = {
  title: 'Breviario de campaña electoral',
  author: {
    name: 'Quinto Tulio Cicerón',
    birthplace: 'Ancient Rome'
  },
  location: 'location2',
  collections: [],
  pages: 86,
  dimensions: {
    length: 17,5,
    width: 11,5
  },
  format: 'Paperback',
  language: 'ES',
  edition: {
    editorial: 'Quaderns Crema',
    publishDate: 1993,
    issue: 2
  },
  isbn: '84-7769-078-2',
  category: {
    first:'Foreign Literature',
    second: 'Essay'
  },
  pictures: null,
  rating: {
    general: 8,2,
    copy: 7,3
  }
};

var book9 = {
  title: 'La Gatomaquia',
  author: {
    name: 'Lope de Vega',
    birthplace: 'Spain'
  },
  location: 'location1',
  collections: [],
  pages: 228,
  dimensions: {
    length: 19,
    width: 12
  },
  format: 'Hardcover',
  language: 'ES',
  edition: {
    editorial: 'Biblioteca Clásica Castalia',
    publishDate: 2001,
    issue: 1
  },
  isbn: '84-7039-928-4',
  category: {
    first:'Spanish Literature',
    second: 'Drama'
  },
  pictures: null,
  rating: {
    general: 8,4,
    copy: 8
  }
};

var book10 = {
  title: 'Obras Completas',
  author: {
    name: 'Aurelio Prudencio',
    birthplace: 'Ancient Rome'
  },
  location: 'location1',
  collections: [],
  pages: 825,
  dimensions: {
    length: 20,
    width: 13
  },
  format: 'Hardcover',
  language: ['ES', 'LA'],
  edition: {
    editorial: 'Biblioteca de Autores Cristianos',
    publishDate: 1950,
    issue: 1
  },
  isbn: null,
  category: {
    first:'Foreign Literature',
    second: 'Poetry'
  },
  pictures: null,
  rating: {
    general: 7,8,
    copy: 6
  }
};
