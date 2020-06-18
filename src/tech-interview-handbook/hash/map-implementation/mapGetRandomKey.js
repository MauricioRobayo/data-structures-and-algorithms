/* eslint-disable no-underscore-dangle */
/*
  Implement data structure `Map` storing pairs of integers (key, value)
  and define following member functions in O(1) runtime:
    - void insert(key, value)
    - void delete(key)
    - int get(key)
    - int getRandomKey()
*/
class Map {
  constructor() {
    this.table = {};
    this.keys = [];
    this.keysLength = 0;
  }

  insert(key, value) {
    if (this.table[key] !== undefined) {
      return;
    }
    this.table[key] = [value, this.keysLength];
    this.keys.push(key);
    this.keysLength += 1;
  }

  delete(key) {
    if (this.table[key] === undefined) {
      return undefined;
    }
    const [value, index] = this.table[key];
    delete this.table[key];
    [this.keys[index], this.keys[this.keysLength - 1]] = [
      this.keys[this.keysLength - 1],
      this.keys[index],
    ];
    this.keysLength -= 1;
    return value;
  }

  get(key) {
    const value = this.table[key];
    return value === undefined ? undefined : value[0];
  }

  getRandomKey(randFn = Math.random) {
    console.log(Math.floor(randFn() * this.keysLength));
    console.log(this.keys, this.keysLength);
    return this.keys[Math.floor(randFn() * this.keysLength)];
  }
}

module.exports = Map;
