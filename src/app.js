import Typed from 'typed.js';

var myNameIsOptions = {
  strings: ['Hello, my name is Patryk Rezler'],
  showCursor: false,
  typeSpeed: 100,
};

const iAmOptions = {
  loop: false,
  showCursor: true,
  backDelay: 1000,
  typeSpeed: 110,
  startDelay: 2000,
  strings: [
    'I am',
  ],
  onComplete: (self) => {
    console.log(self, this)
    self.showCursor = false;
    const whoAmIOptions = {
      loop: true,
      showCursor: true,
      backDelay: 1000,
      typeSpeed: 110,
      startDelay: 200,
      strings: [
        'a chicken',
        'a men',
        'opa opa',
      ]
    }
    new Typed('#whoAmI', whoAmIOptions);
  }
}

new Typed('#myNameIs', myNameIsOptions);
new Typed('#iAm', iAmOptions);
