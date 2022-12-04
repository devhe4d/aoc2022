import fs from 'fs';

const input = fs.readFileSync('inputs/day2.txt', 'utf8');

const strategies = input.split('\n').map((line) => [...line.split(' ')]);

// Part 1
// A / X - Rock: 1
// B / Y - Paper: 2
// C / Z - Scissors: 3

// win: 6 points
// draw: 3 points
// loss: 0 points

function getScorePart1(strategies) {
  const scores = [];
  const moves = {
    X: 1,
    Y: 2,
    Z: 3,
  };

  const possibleOutcomes = {
    win: 6,
    draw: 3,
    loss: 0,
  };

  const draws = [
    ['A', 'X'],
    ['B', 'Y'],
    ['C', 'Z'],
  ];

  const wins = [
    ['A', 'Y'],
    ['B', 'Z'],
    ['C', 'X'],
  ];

  const losses = [
    ['A', 'Z'],
    ['B', 'X'],
    ['C', 'Y'],
  ];

  strategies.forEach((strategy) => {
    const [opponent, me] = strategy;

    const draw = draws.find((draw) => draw[0] === opponent && draw[1] === me);

    const win = wins.find((win) => win[0] === opponent && win[1] === me);

    const loss = losses.find((loss) => loss[0] === opponent && loss[1] === me);

    if (draw) {
      scores.push(possibleOutcomes.draw + moves[me]);
    }

    if (win) {
      scores.push(possibleOutcomes.win + moves[me]);
    }

    if (loss) {
      scores.push(possibleOutcomes.loss + moves[me]);
    }
  });
  return scores.reduce((acc, num) => acc + num, 0);
}

// ----------------

// Part 2
// A - Rock: 1
// B - Paper: 2
// C - Scissors: 3
// X - lose 0 points
// Y - draw 3 points
// Z - win 6 points

const example = [
  ['A', 'Y'], // 1 + 3 = 4
  ['B', 'X'], // 1 + 0 = 1
  ['C', 'Z'], // 1 + 6 = 7
];

function getScorePart2(strategies) {
  const scores = [];
  const outcomes = {
    X: 0,
    Y: 3,
    Z: 6,
  };
  const myMoves = {
    X: 1,
    Y: 2,
    Z: 3,
  };
  const opponentMoves = {
    A: 1,
    B: 2,
    C: 3,
  };

  const draws = [
    ['A', 'X'],
    ['B', 'Y'],
    ['C', 'Z'],
  ];

  const wins = [
    ['A', 'Y'],
    ['B', 'Z'],
    ['C', 'X'],
  ];

  const losses = [
    ['A', 'Z'],
    ['B', 'X'],
    ['C', 'Y'],
  ];

  function generateMyMove(opponentMove, myMove) {
    const draw = draws.find(
      (draw) => draw[0] === opponentMove && draw[1] === myMove
    );

    const win = wins.find(
      (win) => win[0] === opponentMove && win[1] === myMove
    );

    const loss = losses.find(
      (loss) => loss[0] === opponentMove && loss[1] === myMove
    );

    if (draw) {
      return opponentMoves[draw[0]];
    }

    if (win) {
      return opponentMoves[win[0]];
    }

    if (loss) {
      return opponentMoves[loss[0]];
    }
  }

  strategies.forEach((strategy) => {
    const [opponent, me] = strategy;

    if (opponent === 'A') {
      if (me === 'X') {
        scores.push(outcomes[me] + generateMyMove(opponent, me));
      } else if (me === 'Y') {
        scores.push(outcomes[me] + generateMyMove(opponent, me));
      } else if (me === 'Z') {
        scores.push(outcomes[me] + generateMyMove(opponent, me));
      }
    } else if (opponent === 'B') {
      if (me === 'X') {
        scores.push(outcomes[me] + generateMyMove(opponent, me));
      } else if (me === 'Y') {
        scores.push(outcomes[me] + generateMyMove(opponent, me));
      } else if (me === 'Z') {
        scores.push(outcomes[me] + generateMyMove(opponent, me));
      }
    } else if (opponent === 'C') {
      if (me === 'X') {
        scores.push(outcomes[me] + generateMyMove(opponent, me));
      } else if (me === 'Y') {
        scores.push(outcomes[me] + generateMyMove(opponent, me));
      } else if (me === 'Z') {
        scores.push(outcomes[me] + generateMyMove(opponent, me));
      }
    }
  });

  return scores.reduce((acc, num) => acc + num, 0);
}

const exampleScore1 = getScorePart1(example);
const exampleScore2 = getScorePart2(example);
const scores1 = getScorePart1(strategies);
const scores2 = getScorePart2(strategies);
