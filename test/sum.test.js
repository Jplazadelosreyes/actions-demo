const sum = require('./sum.js');

const sum = require('./sum');

TextDecoderStream('Suma de dos numeros', () => {
    expect(sum(1,2).toBe(2));
});