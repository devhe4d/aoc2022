import fs from 'fs';

const input = fs.readFileSync('./inputs/day3.txt', 'utf8');

const lines = input.split('\n');

const exampleInput = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw',
];

const findRepeat = (st) => {
  const stHalf = st.length / 2;
  const stLeft = st.slice(0, stHalf);
  const stRight = st.slice(stHalf);
  const arr1 = stLeft.split('');
  const arr2 = stRight.split('');
  const repeat = arr1.filter((char) => arr2.includes(char));

  return [...new Set(repeat)];
};

const findPriority = (st) => {
  const stHalf = st.length / 2;
  const stLeft = st.slice(0, stHalf);
  const stRight = st.slice(stHalf);
  const arr1 = stLeft.split('');
  const arr2 = stRight.split('');
  const repeat = arr1.filter((char) => arr2.includes(char));
  const priority = repeat.map((char) => {
    const charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      return charCode - 96;
    } else if (charCode >= 65 && charCode <= 90) {
      return charCode - 38;
    }
  });
  return [...new Set(priority)];
};

function part1(input) {
  const priority = [];
  lines.forEach((st) => {
    const p = findPriority(st);
    priority.push(p);
  });

  const sum = priority.reduce((acc, curr) => {
    return acc + curr.reduce((a, c) => a + c, 0);
  }, 0);

  return sum;
}

const a1 = part1(lines);

function findCommon(arr1, arr2, arr3) {
  const common = arr1.filter(
    (char) => arr2.includes(char) && arr3.includes(char)
  );
  return [...new Set(common)];
}

function chunkArray(arr, size) {
  const chunked_arr = [];
  let index = 0;
  while (index < arr.length) {
    chunked_arr.push(arr.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}

const arr = chunkArray(exampleInput, 3);
const inputArr = chunkArray(lines, 3);

const common = [];
inputArr.forEach((st) => {
  const c = findCommon(st[0].split(''), st[1].split(''), st[2].split(''));
  common.push(c);
});

const priority = common.flat().map((st) => {
  const charCode = st.charCodeAt(0);
  if (charCode >= 97 && charCode <= 122) {
    return charCode - 96;
  } else if (charCode >= 65 && charCode <= 90) {
    return charCode - 38;
  }
});

const sum = priority.reduce((acc, curr) => {
  return acc + curr;
}, 0);
