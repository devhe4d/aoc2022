import { readFileSync } from 'fs';

const input = readFileSync('./inputs/day1.txt', 'utf-8');

const numbers = input.split('\n').map(Number);

const sampleInput = [7914, 5032, 11424, 2567, 4123, 3567, 7346, 0, 40000000000];

function getSums(arr) {
  const sums = [];

  arr.reduce((acc, num) => {
    if (num !== 0) {
      return acc + num;
    } else {
      sums.push(acc);
      return 0;
    }
  });
  return sums;
}

const sums = getSums(numbers);

const sortedSums = sums.sort((a, b) => b - a);
console.log(
  '🔸 - sortedSums',
  sortedSums.slice(0, 3).reduce((acc, num) => acc + num, 0)
);
