function rotateLeft(d, arr) {
  // Write your code here
  const rotatedArray = arr.concat(arr.splice(0, d));
  return rotatedArray;
}

rotateLeft(2, [1, 2, 3, 4, 5]);
