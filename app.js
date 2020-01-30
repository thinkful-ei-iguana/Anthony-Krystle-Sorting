const LinkedList = require('./LinkedList');

function mergeSort(array) {
  console.log(array);
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

//1

const num1 = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
// mergeSort(num1);

// [21, 1]; step 1
// [16, 49, 39, 27, 43, 34, 46, 40] step 2
// [21], [1]; step 3
// [16, 49], [27, 39] step 4

//2

// The pivot could have been either 14 or 17
// 10, 3, 9, 12, 19, 14, 17, 16, 13, 15
// 3, 9, 10, 12, 19, 14, 17, 16, 13, 15
// 15, 13, 10, 3, 9, 12, 14, 16, 19, 17
// 12, 13, 10, 3, 9, 15, 14, 16, 19, 17

//3

const dataset = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5
];

// console.log(quickSort(dataset));

//4
// console.log(mergeSort(dataset));

//5

const display = LinkedList => {
  let node = LinkedList.head;
  let result = [];
  while (node !== null) {
    result.push(node.value);
    node = node.next;
  }
  return result;
};

const main = () => {
  const list = new LinkedList();

  list.insertLast('Apollo');
  list.insertLast('Boomer');
  list.insertLast('Helo');
  list.insertLast('Husker');
  list.insertLast('Starbuck');
  list.insertLast('Tauhida');

  return display(list);
};
// mergeSort(main());

console.log(mergeSort(main()));

//6

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sorter = (lowest, highest) => lowest - highest;

console.log(testArr.sort(sorter));

//7

const random = array => array.sort(() => Math.random() - 0.5);

console.log(random(testArr));

// 8
const testBooks = [
  'Hoot',
  'GoT',
  'Harry Potter',
  'Alphabet',
  'A wrinkle in time'
];
const sortAlphabetically = array => array.sort();

console.log(sortAlphabetically(testBooks));
