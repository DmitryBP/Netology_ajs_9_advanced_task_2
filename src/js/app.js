// const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
/*
Все методы класса сделал статическими потомучто линтер говорит:
"если не используется this в методе следует делать метод статическим"
*/
// eslint-disable-next-line no-unused-vars
export default class ArrayBufferConverter {
  static getBuffer(input) {
    const buffer = new ArrayBuffer(input.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  }

  static set load(buffer) {
    ArrayBufferConverter.buffer = buffer;
  }

  static get load() {
    return ArrayBufferConverter.buffer;
  }

  static toString(buffer) {
    return String.fromCharCode.apply(null, new Uint16Array(buffer));
  }
}

const abData = ArrayBufferConverter.getBuffer('Dima');
console.log(abData);
ArrayBufferConverter.load = abData;
