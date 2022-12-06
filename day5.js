import fs from 'fs';

const input = fs.readFileSync('inputs/day5.txt', 'utf8');

const sampleInput = ['ZN', 'MCD', 'P'];
const mainInput = [
  'DTRBJLWG',
  'SWC',
  'RZTM',
  'DTCHSPV',
  'GPTLDZ',
  'FBRZJQCD',
  'SBDJMFTR',
  'LHRBTVM',
  'QPDSV',
];

const rawInstractions = `move 1 from 3 to 5
move 5 from 5 to 4
move 6 from 7 to 3
move 6 from 1 to 3
move 1 from 1 to 9
move 1 from 1 to 4
move 3 from 6 to 9
move 2 from 7 to 5
move 1 from 5 to 7
move 1 from 7 to 2
move 2 from 2 to 5
move 2 from 6 to 3
move 6 from 8 to 9
move 7 from 3 to 9
move 1 from 8 to 7
move 8 from 9 to 7
move 5 from 4 to 8
move 1 from 6 to 2
move 2 from 8 to 4
move 9 from 9 to 1
move 2 from 8 to 5
move 1 from 8 to 5
move 5 from 9 to 2
move 1 from 6 to 8
move 5 from 1 to 7
move 1 from 8 to 2
move 2 from 1 to 7
move 1 from 2 to 6
move 4 from 5 to 4
move 2 from 1 to 4
move 13 from 7 to 8
move 3 from 8 to 6
move 2 from 6 to 8
move 10 from 3 to 5
move 2 from 7 to 6
move 3 from 5 to 6
move 10 from 8 to 1
move 1 from 8 to 6
move 6 from 2 to 4
move 1 from 5 to 8
move 5 from 6 to 3
move 2 from 8 to 6
move 1 from 7 to 9
move 2 from 2 to 7
move 3 from 5 to 1
move 2 from 7 to 2
move 6 from 6 to 3
move 7 from 5 to 6
move 5 from 3 to 2
move 10 from 1 to 8
move 2 from 1 to 3
move 8 from 3 to 7
move 9 from 4 to 8
move 1 from 9 to 2
move 2 from 7 to 8
move 4 from 6 to 9
move 1 from 4 to 9
move 5 from 7 to 4
move 3 from 6 to 5
move 1 from 1 to 5
move 14 from 4 to 8
move 3 from 9 to 7
move 4 from 5 to 9
move 2 from 4 to 1
move 27 from 8 to 6
move 2 from 7 to 2
move 2 from 7 to 4
move 4 from 2 to 9
move 7 from 8 to 4
move 10 from 4 to 1
move 18 from 6 to 5
move 6 from 9 to 2
move 1 from 9 to 5
move 11 from 2 to 6
move 2 from 5 to 4
move 1 from 2 to 8
move 2 from 4 to 9
move 2 from 8 to 3
move 1 from 6 to 8
move 4 from 9 to 7
move 4 from 7 to 8
move 7 from 5 to 1
move 4 from 6 to 3
move 2 from 3 to 7
move 6 from 5 to 3
move 2 from 8 to 2
move 14 from 6 to 2
move 3 from 8 to 1
move 15 from 2 to 3
move 1 from 6 to 1
move 14 from 3 to 2
move 2 from 2 to 5
move 1 from 9 to 3
move 13 from 1 to 3
move 4 from 2 to 6
move 10 from 1 to 3
move 2 from 6 to 9
move 6 from 2 to 9
move 6 from 5 to 2
move 2 from 6 to 8
move 7 from 9 to 5
move 1 from 5 to 8
move 2 from 7 to 6
move 34 from 3 to 6
move 19 from 6 to 2
move 12 from 6 to 9
move 3 from 6 to 3
move 2 from 3 to 2
move 1 from 6 to 5
move 17 from 2 to 8
move 2 from 3 to 2
move 8 from 9 to 4
move 7 from 5 to 2
move 5 from 4 to 1
move 4 from 1 to 6
move 1 from 1 to 6
move 6 from 6 to 8
move 2 from 8 to 4
move 17 from 8 to 6
move 2 from 4 to 5
move 17 from 6 to 9
move 22 from 9 to 7
move 1 from 5 to 2
move 20 from 2 to 7
move 29 from 7 to 9
move 1 from 4 to 7
move 3 from 8 to 3
move 1 from 8 to 5
move 3 from 8 to 2
move 2 from 2 to 4
move 27 from 9 to 7
move 2 from 3 to 2
move 1 from 5 to 2
move 18 from 7 to 5
move 1 from 3 to 2
move 1 from 5 to 6
move 18 from 5 to 3
move 1 from 6 to 3
move 2 from 9 to 5
move 10 from 3 to 5
move 4 from 3 to 6
move 1 from 7 to 1
move 1 from 5 to 1
move 6 from 7 to 6
move 1 from 6 to 2
move 4 from 4 to 8
move 5 from 5 to 4
move 1 from 3 to 8
move 2 from 1 to 8
move 2 from 2 to 5
move 3 from 3 to 8
move 6 from 8 to 2
move 1 from 3 to 9
move 1 from 6 to 3
move 6 from 2 to 8
move 7 from 8 to 4
move 8 from 5 to 2
move 5 from 4 to 6
move 2 from 8 to 3
move 2 from 3 to 9
move 1 from 3 to 9
move 2 from 7 to 1
move 2 from 1 to 2
move 12 from 2 to 4
move 1 from 9 to 7
move 1 from 6 to 2
move 9 from 7 to 9
move 1 from 8 to 2
move 9 from 9 to 8
move 6 from 7 to 8
move 4 from 4 to 1
move 6 from 2 to 5
move 1 from 4 to 9
move 3 from 1 to 9
move 6 from 4 to 5
move 5 from 8 to 9
move 8 from 4 to 6
move 3 from 9 to 8
move 1 from 9 to 3
move 3 from 8 to 3
move 5 from 9 to 2
move 3 from 2 to 6
move 3 from 6 to 9
move 3 from 6 to 2
move 4 from 2 to 6
move 6 from 9 to 7
move 1 from 1 to 8
move 8 from 8 to 5
move 20 from 5 to 3
move 2 from 2 to 8
move 6 from 7 to 1
move 10 from 6 to 3
move 4 from 6 to 7
move 4 from 1 to 9
move 2 from 1 to 2
move 3 from 6 to 9
move 5 from 8 to 3
move 3 from 7 to 9
move 17 from 3 to 2
move 1 from 6 to 2
move 2 from 6 to 9
move 1 from 6 to 4
move 12 from 9 to 2
move 1 from 4 to 7
move 8 from 3 to 8
move 8 from 8 to 9
move 7 from 9 to 2
move 1 from 9 to 7
move 18 from 2 to 9
move 1 from 7 to 2
move 2 from 7 to 1
move 1 from 1 to 2
move 4 from 2 to 7
move 15 from 9 to 3
move 1 from 9 to 1
move 2 from 1 to 8
move 6 from 2 to 4
move 8 from 2 to 1
move 2 from 8 to 5
move 2 from 9 to 3
move 4 from 4 to 1
move 2 from 5 to 8
move 2 from 8 to 9
move 14 from 3 to 1
move 2 from 9 to 7
move 2 from 4 to 3
move 1 from 2 to 9
move 5 from 7 to 9
move 21 from 1 to 9
move 2 from 1 to 6
move 3 from 2 to 4
move 1 from 7 to 3
move 19 from 9 to 5
move 1 from 2 to 7
move 1 from 7 to 2
move 3 from 4 to 2
move 19 from 5 to 7
move 2 from 2 to 5
move 1 from 5 to 3
move 1 from 3 to 4
move 8 from 9 to 4
move 1 from 6 to 3
move 1 from 2 to 6
move 1 from 2 to 1
move 8 from 7 to 3
move 5 from 4 to 7
move 2 from 6 to 4
move 1 from 5 to 9
move 1 from 1 to 6
move 1 from 1 to 2
move 2 from 4 to 7
move 1 from 4 to 2
move 2 from 4 to 9
move 1 from 6 to 8
move 1 from 1 to 5
move 1 from 8 to 6
move 1 from 1 to 4
move 25 from 3 to 1
move 1 from 4 to 2
move 2 from 3 to 6
move 3 from 1 to 9
move 6 from 9 to 8
move 1 from 6 to 3
move 1 from 2 to 9
move 15 from 7 to 6
move 2 from 2 to 6
move 1 from 3 to 8
move 1 from 1 to 4
move 6 from 8 to 4
move 1 from 3 to 8
move 1 from 8 to 5
move 2 from 5 to 2
move 8 from 6 to 7
move 1 from 8 to 7
move 1 from 9 to 4
move 9 from 4 to 5
move 19 from 1 to 3
move 9 from 3 to 5
move 6 from 7 to 2
move 2 from 1 to 7
move 7 from 2 to 4
move 7 from 5 to 6
move 5 from 4 to 3
move 3 from 5 to 8
move 1 from 2 to 4
move 2 from 4 to 8
move 14 from 6 to 1
move 6 from 5 to 6
move 1 from 5 to 2
move 7 from 1 to 6
move 1 from 2 to 4
move 4 from 6 to 4
move 1 from 5 to 4
move 2 from 1 to 9
move 2 from 9 to 4
move 2 from 1 to 8
move 9 from 3 to 6
move 3 from 7 to 4
move 4 from 8 to 6
move 3 from 7 to 6
move 1 from 7 to 2
move 1 from 7 to 5
move 3 from 8 to 4
move 26 from 6 to 1
move 8 from 1 to 2
move 1 from 6 to 4
move 5 from 2 to 7
move 2 from 2 to 4
move 10 from 4 to 7
move 1 from 6 to 1
move 22 from 1 to 2
move 1 from 6 to 1
move 6 from 4 to 7
move 1 from 5 to 1
move 1 from 1 to 2
move 21 from 7 to 2
move 38 from 2 to 3
move 8 from 2 to 6
move 2 from 4 to 8
move 2 from 8 to 2
move 1 from 1 to 3
move 1 from 2 to 8
move 1 from 2 to 5
move 6 from 6 to 4
move 2 from 4 to 2
move 2 from 2 to 6
move 1 from 8 to 2
move 28 from 3 to 1
move 11 from 1 to 2
move 8 from 1 to 7
move 4 from 6 to 4
move 8 from 3 to 1
move 8 from 2 to 5
move 6 from 5 to 4
move 2 from 5 to 4
move 8 from 3 to 4
move 22 from 4 to 1
move 2 from 3 to 5
move 33 from 1 to 5
move 26 from 5 to 6
move 4 from 5 to 7
move 2 from 2 to 7
move 2 from 7 to 2
move 2 from 7 to 8
move 2 from 8 to 3
move 6 from 1 to 3
move 5 from 5 to 1
move 1 from 5 to 7
move 7 from 7 to 5
move 4 from 5 to 6
move 5 from 1 to 8
move 4 from 2 to 4
move 2 from 7 to 4
move 2 from 7 to 3
move 5 from 4 to 6
move 1 from 8 to 2
move 1 from 2 to 4
move 10 from 3 to 6
move 44 from 6 to 9
move 2 from 5 to 7
move 1 from 5 to 8
move 41 from 9 to 1
move 1 from 6 to 4
move 2 from 8 to 1
move 1 from 7 to 3
move 1 from 3 to 8
move 2 from 9 to 8
move 29 from 1 to 9
move 2 from 1 to 5
move 2 from 8 to 3
move 1 from 3 to 5
move 2 from 5 to 9
move 1 from 5 to 7
move 25 from 9 to 2
move 10 from 2 to 1
move 1 from 7 to 8
move 2 from 4 to 1
move 2 from 8 to 9
move 1 from 8 to 6
move 4 from 2 to 4
move 4 from 2 to 5
move 1 from 6 to 5
move 1 from 2 to 7
move 2 from 4 to 1
move 18 from 1 to 3
move 8 from 9 to 4
move 15 from 3 to 9
move 3 from 4 to 8
move 4 from 5 to 8
move 4 from 2 to 4
move 10 from 9 to 4
move 4 from 8 to 5
move 2 from 7 to 2
move 11 from 4 to 9
move 12 from 4 to 9
move 2 from 5 to 7
move 4 from 2 to 4
move 5 from 8 to 1
move 1 from 5 to 6
move 1 from 4 to 6
move 1 from 3 to 9
move 1 from 5 to 7
move 4 from 1 to 6
move 6 from 1 to 5
move 6 from 5 to 9
move 3 from 7 to 6
move 9 from 6 to 5
move 8 from 5 to 2
move 7 from 2 to 3
move 1 from 3 to 1
move 7 from 3 to 5
move 2 from 4 to 1
move 1 from 2 to 6
move 2 from 1 to 3
move 8 from 5 to 9
move 3 from 1 to 3
move 1 from 6 to 1
move 2 from 4 to 1
move 1 from 5 to 2
move 2 from 1 to 6
move 2 from 6 to 3
move 2 from 3 to 2
move 2 from 2 to 4
move 1 from 2 to 6
move 3 from 3 to 9
move 2 from 4 to 8
move 3 from 3 to 1
move 4 from 1 to 7
move 2 from 8 to 4
move 7 from 9 to 6
move 1 from 1 to 4
move 11 from 9 to 7
move 3 from 9 to 3
move 14 from 9 to 5
move 6 from 6 to 5
move 4 from 5 to 9
move 10 from 7 to 6
move 1 from 3 to 7
move 2 from 4 to 1
move 4 from 7 to 9
move 9 from 6 to 1
move 3 from 6 to 5
move 15 from 9 to 1
move 1 from 4 to 7
move 4 from 9 to 7
move 12 from 5 to 1
move 3 from 7 to 3
move 4 from 7 to 2
move 1 from 9 to 3
move 22 from 1 to 2
move 21 from 2 to 6
move 3 from 1 to 9
move 1 from 3 to 7
move 1 from 7 to 3
move 1 from 3 to 2
move 8 from 1 to 4
move 1 from 9 to 2
move 7 from 4 to 8
move 3 from 3 to 9
move 3 from 3 to 5
move 4 from 2 to 3
move 1 from 1 to 3
move 4 from 8 to 5
move 2 from 8 to 3
move 5 from 3 to 2
move 6 from 5 to 3
move 2 from 5 to 8
move 2 from 1 to 7
move 2 from 7 to 4
move 15 from 6 to 9
move 8 from 3 to 1
move 3 from 5 to 9
move 2 from 4 to 9
move 8 from 1 to 3
move 8 from 9 to 8
move 1 from 1 to 4
move 3 from 5 to 9
move 4 from 8 to 1
move 1 from 3 to 9
move 2 from 4 to 3
move 2 from 8 to 6
move 3 from 8 to 7
move 8 from 2 to 5
move 3 from 5 to 2
move 4 from 3 to 4
move 3 from 6 to 1
move 2 from 5 to 9
move 4 from 4 to 1
move 2 from 5 to 6
move 1 from 5 to 4
move 2 from 2 to 1
move 4 from 3 to 9
move 1 from 7 to 3
move 2 from 7 to 4
move 2 from 4 to 7
move 1 from 6 to 7
move 1 from 2 to 8
move 2 from 3 to 9
move 14 from 1 to 8
move 1 from 6 to 2
move 2 from 7 to 1
move 3 from 8 to 3
move 6 from 8 to 5`;

let instructions = rawInstractions.split('\n');

function solveProblem(stacks, instructions) {
  const crateStacks = stacks.map((stack) => stack.split(''));

  instructions.forEach((instruction) => {
    const [, numCrates, sourceStack, destStack] = instruction.match(
      /move (\d+) from (\d+) to (\d+)/
    );

    const cratesToMove = [];
    while (
      crateStacks[sourceStack - 1].length > 0 &&
      cratesToMove.length < numCrates
    ) {
      cratesToMove.push(crateStacks[sourceStack - 1].pop());
    }
    crateStacks[destStack - 1].push(...cratesToMove);
  });

  return crateStacks.map((stack) => stack[stack.length - 1]).join('');
}

console.log(solveProblem(mainInput, instructions));

function solveProblem2(stacks, instructions) {
  // Create an array of arrays to represent the stacks of crates
  const crateStacks = stacks.map((stack) => stack.split(''));

  // Sort the instructions by the time they are supposed to be performed
  // instructions.sort((a, b) => {
  //   const timeA = parseInt(a.match(/\d+$/)[0], 10);
  //   const timeB = parseInt(b.match(/\d+$/)[0], 10);
  //   return timeA - timeB;
  // });

  // Iterate through the instructions and move the crates between stacks
  instructions.forEach((instruction) => {
    // Parse the instruction to get the number of crates, the source stack, and the destination stack
    const [, numCrates, sourceStack, destStack] = instruction.match(
      /move (\d+) from (\d+) to (\d+)/
    );

    // Use array methods to move the crates from the source stack to the destination stack
    const cratesToMove = [];
    while (
      crateStacks[sourceStack - 1].length > 0 &&
      cratesToMove.length < numCrates
    ) {
      cratesToMove.unshift(crateStacks[sourceStack - 1].pop());
    }
    crateStacks[destStack - 1].push(...cratesToMove);
  });

  // Return the top crate of each stack as the solution
  return crateStacks.map((stack) => stack[stack.length - 1]).join('');
}

console.log(solveProblem2(mainInput, instructions));
