var livre1 = {
  title: 'El corazón de las tinieblas',
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
};



exports.libro1 = livre1;
