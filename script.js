function mergeSort(arr) {
  // handle base case of singleton/empty arrays
  if (arr.length < 2) return arr;
  // then, split the array in half
  const mid = Math.floor(arr.length / 2);
  // recursively sort each half
  const subLeft = mergeSort(arr.slice(0, mid));
  const subRight = mergeSort(arr.slice(mid));
  // and merge the sorted halves
  return merge(subLeft, subRight);
}

function merge(a, b) {
  // create our result array
  const merged = [];
  // while both arrays have elements in them
  while (a.length && b.length) {
    // push the smaller element into the result
    merged.push(
      a[0] < b[0]
        ? // and remove it from its array
          a.shift()
        : b.shift()
    );
  }
  // return, concatenated with whatever's left in one of the arrays
  return merged.concat(a.length ? a : b);
}

console.log(mergeSort([5, 4, 3, 1, 8, 0, 11, 2]));
