// O(NlogN) => O(n^2)
// shellSort([12, 34, 54, 2, 3])
const shellSort = array => {
  let step = 1;
  let size = array.length;

  // Определить шаг
  while (step < size / 3) step = 3 * step + 1;

  while (step >= 1) {
    // Итерация с шагом изменя начальную позицию на 1
    for (let i = step; i < size; i++) {
      // На каждом шаге делаем обратный ход с заменой эелементов при Xn-1 > Xn
      for (let j = i; j >= step && array[j] < array[j - 1]; j -= step) {
        [ array[j], array[j - 1] ] = [ array[j - 1], array[j] ];
      }
    }
    // Переходим на следующий шаг
    step = step / 3 ^ 0;
  }

  return array;
};

// Вариант 2 с простым шагом
// shellSort2([12, 34, 54, 2, 3])
const shellSort2 = array => {
  let size = array.length;

  for (let step = size / 2; step >= 1; step = step / 2 ^ 0) {
    for (let i = step; i < size; i++) {
      for (let j = i; j >= step && array[j] < array[j - 1]; j -= step) {
        [ array[j - 1], array[j] ] = [ array[j], array[j - 1] ];
      }
    }
  }

  return array;
};
