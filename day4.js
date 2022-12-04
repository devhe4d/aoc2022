import fs from 'fs';

const input = fs.readFileSync('inputs/day4.txt', 'utf8');

const exampleInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const parseRange = (range) => {
  const [start, end] = range.split('-');

  return Array.from({ length: end - start + 1 }, (_, i) => i + parseInt(start));
};

const parseRanges = (ranges) => {
  return ranges.split(',').reduce((acc, range) => {
    return acc.concat([parseRange(range)]);
  }, []);
};

const parseInput = (input) => {
  return input.split('\n').map(parseRanges);
};

const contains = (arr1, arr2) => {
  return arr1.every((num) => arr2.includes(num));
};

const parsedExampleInput = parseInput(exampleInput);
const parsedInput = parseInput(input);

const countValid = (input) => {
  return input.reduce((acc, [arr1, arr2]) => {
    return acc + (contains(arr1, arr2) || contains(arr2, arr1));
  }, 0);
};

const countValid2 = (input) => {
  return input.reduce((acc, [arr1, arr2]) => {
    return acc + arr1.some((num) => arr2.includes(num));
  }, 0);
};

console.log(countValid(parsedExampleInput));
console.log(countValid(parsedInput));

console.log(countValid2(parsedExampleInput));
console.log(countValid2(parsedInput));
