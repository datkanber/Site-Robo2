beforeAll(() => {
    Object.defineProperty(HTMLMediaElement.prototype, 'play', {
      configurable: true,
      get() {
        return jest.fn();
      },
    });
    Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
      configurable: true,
      get() {
        return jest.fn();
      },
    });
  });
  
  // Importing node-fetch version 2
  global.fetch = require('node-fetch');
  