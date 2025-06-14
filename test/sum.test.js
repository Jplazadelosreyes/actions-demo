const sum = require('./sum.js');

TextDecoderStream('Suma de dos numeros', () => {
    expect(sum(1,2).toBe(2));
});