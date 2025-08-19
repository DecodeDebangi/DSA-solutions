class Solution {
  getSecondLargest(arr) {
    // code here
    let n = arr.length;

    arr.sort((a, b) => a - b);

    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] !== arr[n - 1]) {
        return arr[i];
      }
    }

    return -1;
  }
}
