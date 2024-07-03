// src/setupTests.js
import '@testing-library/jest-dom';

Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
    configurable: true,
    get() {
      return () => {};
    },
  });
  