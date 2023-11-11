function hourglassSum(arr) {
  let max = null;
  let indices = [];
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      const hasRow =
        arr[row][col + 1] != undefined &&
        arr[row][col + 2] != undefined &&
        arr[row + 1] != undefined &&
        arr[row + 1][col] != undefined &&
        arr[row + 2] != undefined &&
        arr[row + 2][col] != undefined;
      if (hasRow) {
        sum =
          arr[row][col] +
          arr[row][col + 1] +
          arr[row][col + 2] +
          arr[row + 1][col + 1] +
          arr[row + 2][col] +
          arr[row + 2][col + 1] +
          arr[row + 2][col + 2];
        if (max !== null) {
          if (max < sum) {
            max = sum;
            indices = [row, col];
          }
        } else {
          max = sum;
          indices = [row, col];
        }
      }
    }
  }
  return max;
}
hourglassSum([
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]);
