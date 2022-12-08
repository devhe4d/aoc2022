import numpy as np

with open("./inputs/day8.txt", "r") as fin:
    lines = fin.read().strip().split()

grid = [list(map(int, list(line))) for line in lines]

n = len(grid)
m = len(grid[0])

grid = np.array(grid)

ans1 = 0
for i in range(n):
    for j in range(m):
        h = grid[i, j]

        if j == 0 or np.amax(grid[i, :j]) < h:
            ans1 += 1
        elif j == m - 1 or np.amax(grid[i, (j+1):]) < h:
            ans1 += 1
        elif i == 0 or np.amax(grid[:i, j]) < h:
            ans1 += 1
        elif i == n - 1 or np.amax(grid[(i+1):, j]) < h:
            ans1 += 1

print(ans1)

# == == == == == == == == == ==


dd = [[0, 1], [0, -1], [1, 0], [-1, 0]]

ans2 = 0
for i in range(n):
    for j in range(m):
        h = grid[i, j]
        score = 1

        for di, dj in dd:
            ii, jj = i + di, j + dj
            dist = 0

            while (0 <= ii < n and 0 <= jj < m) and grid[ii, jj] < h:
                dist += 1
                ii += di
                jj += dj

                if (0 <= ii < n and 0 <= jj < m) and grid[ii, jj] >= h:
                    dist += 1

            score *= dist

        ans2 = max(ans2, score)


print(ans2)
