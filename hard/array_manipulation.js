function arrayManipulation(n, queries) {
  const arr = new Array(n + 1).fill(0);
  let max = 0;

  for (let index = 0; index < queries.length; index++) {
    arr[queries[index][0] - 1] += queries[index][2];
    arr[queries[index][1]] -= queries[index][2];
  }
  for (let i = 0, length = arr.length - 1; i < length; i++) {
    arr[i + 1] += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
  return max;
}

arrayManipulation(10, [
  [2, 6, 8], //0
  [3, 5, 7], //1
  [1, 8, 1], //2,
  [5, 9, 15], //2
]);
