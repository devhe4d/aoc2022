import fs from 'fs';

const input = fs.readFileSync('inputs/day6.txt', 'utf8');

const sampleInput = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb';

const findFirstFour = (input) => {
  const inputArray = input.split('');
  const firstFour = [];
  const firstFourIndex = [];
  let i = 0;
  while (firstFour.length < 4) {
    const currentChar = inputArray[i];
    const next3Chars = inputArray.slice(i + 1, i + 4);

    if (
      !next3Chars.includes(currentChar) &&
      !next3Chars.some((char, index) => next3Chars.indexOf(char) !== index)
    ) {
      firstFour.push(currentChar);
      firstFourIndex.push(i);
      next3Chars.forEach((char, index) => {
        firstFour.push(char);
        firstFourIndex.push(i + index + 1);
      });
    }
    i++;
  }

  console.log(firstFourIndex[firstFourIndex.length - 1] + 1);
  return firstFour.join('');
};

console.log(findFirstFour(input));

const findFirstFourteen = (input) => {
  const inputArray = input.split('');
  const firstFourteen = [];
  const firstFourteenIndex = [];
  let i = 0;
  while (firstFourteen.length < 14) {
    const currentChar = inputArray[i];
    const next13Chars = inputArray.slice(i + 1, i + 14);

    if (
      !next13Chars.includes(currentChar) &&
      !next13Chars.some((char, index) => next13Chars.indexOf(char) !== index)
    ) {
      firstFourteen.push(currentChar);
      firstFourteenIndex.push(i);
      next13Chars.forEach((char, index) => {
        firstFourteen.push(char);
        firstFourteenIndex.push(i + index + 1);
      });
    }
    i++;
  }
  console.log(firstFourteen);
  console.log(firstFourteenIndex[firstFourteenIndex.length - 1] + 1);
  return firstFourteen.join('');
};

console.log(findFirstFourteen(input));
