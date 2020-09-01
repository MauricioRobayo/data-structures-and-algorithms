const Map = require('./map');

const keyValues = {
  Colombia: 'Bogotá',
  Venezuela: 'Caracás',
  Ecuador: 'Quito',
  Perú: 'Lima',
};
const collisions = {
  // this key is going in the same bucket as key 'Colombia'
  Combialo: 'WTF',
};
const hashTable = new Map();
beforeEach(() => {
  Object.entries(keyValues).forEach(([k, v]) => {
    hashTable.insert(k, v);
  });
});

describe('shuld return a hash idx for a given string', () => {
  test('should return 97 for letter "a" and size 100', () => {
    expect(Map.hash('a', 100)).toBe(97);
  });
  test('should return 0 for letter "a" and size 97', () => {
    expect(Map.hash('a', 97)).toBe(0);
  });
  test('should return 0 for letter "a" and size 97', () => {
    expect(Map.hash('aaaa', 97)).toBe(0);
  });
  test('should return 0 for letter "a" and size 97', () => {
    expect(Map.hash('baaaa', 97)).toBe(1);
  });
});
describe('inserts key-value pairs to the map', () => {
  test('the length of the hashTable should be 20', () => {
    expect(hashTable.table.length).toBe(hashTable.tableSize);
  });
  test('there should be four elements on the hashTable', () => {
    const buckets = hashTable.table.filter((e) => e.length);
    expect(buckets.length).toBe(4);
    expect(buckets.every((b) => Array.isArray(b))).toBe(true);
    expect(buckets.every((b) => b.length === 1)).toBe(true);
  });
  test('there should be a collision on the hashTable', () => {
    Object.entries(collisions).forEach(([k, v]) => {
      hashTable.insert(k, v);
      const idx = Map.hash(k, hashTable.tableSize);
      const bucket = hashTable.table[idx];
      expect(bucket.length).toBe(2);
      expect(bucket.every((b) => b.length === 2)).toBe(true);
    });
  });
});
describe('deletes key-value pairs to the map', () => {
  test('should remove elements from the hashTable without collisions', () => {
    const entries = Object.entries(keyValues);
    entries.forEach(([key, value], index) => {
      expect(hashTable.delete(key)).toBe(value);
      expect(hashTable.table.filter((e) => e.length).length).toBe(
        entries.length - index
      );
    });
  });
  test('should remove elements from the hashTable with collisions', () => {
    Object.entries(collisions).forEach(([k, v]) => {
      hashTable.insert(k, v);
      const idx = Map.hash(k, hashTable.tableSize);
      const bucket = hashTable.table[idx];
      expect(bucket.length).toBe(2);
      expect(hashTable.delete(k)).toBe(v);
      expect(bucket.length).toBe(1);
    });
  });
});
describe('get the values from the map', () => {
  test('should get an element when no collisions', () => {
    Object.entries(keyValues).forEach(([k, v]) => {
      expect(hashTable.get(k)).toBe(v);
    });
  });
  test('should get an element when there are collisions', () => {
    Object.entries(collisions).forEach(([k, v]) => {
      hashTable.insert(k, v);
      expect(hashTable.get(k)).toBe(v);
    });
  });
  test('should return `undefined` for non existing elements', () => {
    expect(hashTable.get('non existing element')).toBe(undefined);
  });
});
