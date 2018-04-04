// https://en.wikipedia.org/wiki/Monte_Carlo_method use this algorithm

class DynamicConnectivity {
  constructor(n) {
    this.ids = [0, 2, 3, 4, 5, 6, 6];
    this.size = {};
    this.max = {};
    //
    // for (let i = 0; i <= n; i++) {
    //   this.max[i] = i;
    //   this.size[i] = 1;
    //   this.ids.push(i);
    // }
  }

  union(a, b) {
    let rootA = this.root(a);
    let rootB = this.root(b);

    if (rootA === rootB) return;

    if (this.size[rootA] < this.size[rootB]) {
      this.ids[rootA] = rootB;
      this.max[rootB] = Math.max(this.max[rootB], this.max[rootA]);
      this.size[rootB] += this.size[rootA];
    } else {
      this.ids[rootB] = rootA;
      this.max[rootA] = Math.max(this.max[rootB], this.max[rootA]);
      this.size[rootA] += this.size[rootB];
    }
  }

  connect(a, b) {
    return this.root(a) === this.root(b);
  }

  find(x) {
    return this.max[this.root(x)];
  }

  root(id) {
    while(id !== this.ids[id]) {
      id = this.ids[id];
      this.ids[id] = this.ids[this.ids[id]];
    }
    return id;
  }
}

const instance = new DynamicConnectivity(9);

console.log(instance.ids, '*');
instance.root(1)
console.log(instance.ids, '*');

// instance.union(4,3);
// instance.union(3,8);
// instance.union(9,4);
// instance.union(6,5);
// instance.union(2,1);
// instance.union(5,0);
//
// instance.connect(7,6); // false
// instance.connect(8,4); // true
//
// instance.find(0); // 6
// instance.find(3); // 9
