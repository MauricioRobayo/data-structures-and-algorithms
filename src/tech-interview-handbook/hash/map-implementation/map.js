/* eslint-disable no-underscore-dangle */
/*
  Implement data structure `Map` storing pairs of integers (key, value)
  and define following member functions in O(1) runtime:
    - void insert(key, value)
    - void delete(key)
    - int get(key)
    - int getRandomKey()
*/
const DEFAULT_TABLE_SIZE = 20;

class Map {
  constructor(size = DEFAULT_TABLE_SIZE) {
    this._tableSize = size;
    this.table = Array.from({ length: this._tableSize }, () => []);
  }

  static hash(key, size = DEFAULT_TABLE_SIZE) {
    let idx = 0;
    for (let i = 0; i < key.length; i += 1) {
      idx += key.charCodeAt(i);
    }
    return idx % size;
  }

  get tableSize() {
    return this._tableSize;
  }

  insert(key, value) {
    const idx = Map.hash(key);
    const bucket = this.table[idx];
    if (bucket.length === 0) {
      bucket.push([key, value]);
    }
    if (!bucket.find(([k]) => k === key)) {
      bucket.push([key, value]);
    }
  }

  delete(key) {
    const idx = Map.hash(key);
    const bucket = this.table[idx];
    for (let i = 0; i < bucket.length; i += 1) {
      if (bucket[i][0] === key) {
        return bucket.splice(i, 1)[0][1];
      }
    }
    return null;
  }

  get(key) {
    const idx = Map.hash(key);
    const element = this.table[idx].find(([k]) => k === key);
    return element === undefined ? element : element[1];
  }
}

module.exports = Map;
