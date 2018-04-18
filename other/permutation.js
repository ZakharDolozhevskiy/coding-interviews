function* permutationGenerator() {
  let base = ['1', '2', '3', '4'];

  yield base;

  while (true) {
    let decrease = base.length - 2;

    // find where list starts decrease
    while (decrease >= 0 && base[decrease] > base[decrease + 1]) {
      // if it already sorted in ascending order we're done => 4,3,2,1
      if (decrease === 0)
        return [];
      else
        decrease--;
    }

    let larger = base.length - 1;

    // find larger element to swap
    while (base[decrease] > base[larger]) larger--;

    // that do swap
    [ base[decrease], base[larger] ] = [ base[larger], base[decrease] ];

    while (++decrease < base.length - 1) {
      [ base[decrease], base[decrease + 1] ] = [ base[decrease + 1], base[decrease] ];
    }

    yield base;
  }
}


for (let i = 5, g = permutationGenerator(); i >= 0; i--)
  console.log(g.next());
