function mergeArrays (array1, array2) {
  const merged = {};
  array1.forEach(elem => {

      merged[elem.id] = {...elem};
  });
  array2.forEach(elem => {

      merged[elem.id] = {...merged[elem.id], ...elem};
  });
  console.log(Object.values(merged));
}

const array1 = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 }
];

const array2 = [
  { id: 1, age: 26, email: 'alice@example.com' },
  { id: 3, name: 'Charlie', age: 22 }
];

mergeArrays(array1, array2)