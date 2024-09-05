// --- Task
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

type ChunkedType = number | number[];

// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// 1# Solution
export const chunk = (array: number[], size: number): ChunkedType[] => {
  const chunked: ChunkedType[] = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || (Array.isArray(last) && last.length === size)) {
      chunked.push([element]);
    } else {
      if (Array.isArray(last)) {
        last.push(element);
      }
    }
  }

  return chunked;
};

// 2# Solution | Using Recursion
export const chunk = (array: number[], size: number): ChunkedType[] => {
  if (array.length > size) {
    return [array.splice(0, size), ...chunk(array, size)];
  } else {
    return [array];
  }
}

// 3# Solution | Using (While) loop
export const chunk = (array: number[], size: number): ChunkedType[] => {
  const chunked: ChunkedType[] = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}