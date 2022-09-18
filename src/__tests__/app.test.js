import ArrayBufferConverter from '../js/app.js';

test('should convert str to array byffer', () => {
  const testStr = 'Dima';
  expect(ArrayBufferConverter.getBuffer(testStr).byteLength).toEqual(8);
});
