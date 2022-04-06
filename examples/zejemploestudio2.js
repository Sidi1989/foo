var livre1 = {
  title: 'El corazón de las tinieblas',
  author: 'Joseph Conrad',
  publishDate: 1902,
  isAvailable: true,
  comments: [
    'Me gustó mucho',
    'No me gustó'
  ],
  size: {
    length: 20,
    width: 12
  },
  saludar: function () {
    console.log('Buenos días');
  },
  presentarse: function () {
    console.log(`hola, mi autor es ${this.author} y fui publicado en ${this.publishDate}`);
  },
  presentarseAnte: function (name) {
    console.log(`hola, ${name.toUpperCase()}, mi autor es ${this.author} y fui publicado en ${this.publishDate}`);
  },
  presentarseAnteAlternative: () => {}
};

var livre2 = {
  title: 'Lord Jim',
  author: 'Joseph Conrad',
  publishDate: 1904,
  isAvailable: false,
  comments: [
    'No me gustó mucho',
    'Me gustó'
  ],
  size: {
    length: 18,
    width: 12
  }
};




exports.libro1 = livre1;
exports.libro2 = livre2;
