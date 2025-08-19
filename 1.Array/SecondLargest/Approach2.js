class Solution {
  getSecondLargest(arr) {
    // code here
    let n = arr.length;

    let largest = -1,
      secondLargest = -1;

    for (let i = 0; i < n; i++) {
      if (arr[i] > largest) largest = arr[i];
    }

    for (let i = 0; i < n; i++) {
      if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }

    return secondLargest;
  }
}
