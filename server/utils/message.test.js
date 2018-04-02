const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'TestUser';
    var text = 'Test text';

    var message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toEqual(expect.any(Number));
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'TestUser';
    var latitude = 1;
    var longitude = 2;

    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.from).toBe(from);
    expect(message.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    expect(message.createdAt).toEqual(expect.any(Number));
  });
});
