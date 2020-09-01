const Map = require('./mapGetRandomKey');

const keyValues = [
  ['Colombia', 'Bogotá'],
  ['Venezuela', 'Caracás'],
  ['Ecuador', 'Quito'],
  ['Perú', 'Lima'],
];

const hashTable = new Map();
beforeEach(() => {
  keyValues.forEach(([k, v]) => {
    hashTable.insert(k, v);
  });
});
keyValues.forEach(([k, v]) => {
  test(`should get ${v}`, () => {
    expect(hashTable.get(k)).toBe(v);
  });
});
keyValues.forEach(([key, value]) => {
  test(`should delete ${key}`, () => {
    expect(hashTable.delete(key)).toBe(value);
    expect(hashTable.get(key)).toBe(undefined);
  });
});
keyValues.forEach(([key, value]) => {
  test(`should get a random key`, () => {
    console.log(hashTable.getRandomKey(() => 0));
    expect(hashTable.getRandomKey(() => 0)).toBe(
      keyValues[keyValues.length - 1][0]
    );
    expect(hashTable.delete(key)).toBe(value);
  });
});
