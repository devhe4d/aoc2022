import fs from 'fs';

const input = fs.readFileSync('inputs/day7.txt', 'utf8');

const sampleInput = `
$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

// - / (dir)
//   - a (dir)
//     - e (dir)
//       - i (file, size=584)
//     - f (file, size=29116)
//     - g (file, size=2557)
//     - h.lst (file, size=62596)
//   - b.txt (file, size=14848514)
//   - c.dat (file, size=8504156)
//   - d (dir)
//     - j (file, size=4060174)
//     - d.log (file, size=8033020)
//     - d.ext (file, size=5626152)
//     - k (file, size=7214296)

const solveProblem = (input) => {
  const lines = input.split('\n');
  const path = [];
  const sizes = {};
  for (const line of lines) {
    if (line.startsWith('$ cd')) {
      const directory = line.substring(5);
      if (directory === '..') {
        path.pop();
      } else {
        path.push(directory);
      }
    } else if (line.startsWith('$ ls')) {
      continue;
    } else if (line.startsWith('dir')) {
      continue;
    } else {
      const [size] = line.split(' ');

      let currentPath = '';
      for (let i = 0; i < path.length; i++) {
        currentPath += path[i];
        if (sizes[currentPath]) {
          sizes[currentPath] += parseInt(size);
        } else {
          sizes[currentPath] = parseInt(size);
        }
        currentPath += '/';
      }
    }
  }
  const maxUsed = 70000000 - 30000000;
  const totalUsed = sizes['/'];
  const needToFree = totalUsed - maxUsed;

  let p1 = 0;
  let p2 = 1000000000;
  for (const [key, value] of Object.entries(sizes)) {
    if (value <= 100000) {
      p1 += value;
    }
    if (value >= needToFree) {
      p2 = Math.min(p2, value);
    }
  }

  return { p1, p2 };
};

console.log(solveProblem(input));
