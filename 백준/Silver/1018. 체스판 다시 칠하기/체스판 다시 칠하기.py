x, y = map(int, input().split())

board = []
for _ in range(x):
    board.append(input())
answer = []

for i in range(x-7):
    for j in range(y-7):
        countW = 0
        countB = 0
        for a in range(i, i+8):
            for b in range(j, j+8):
                if (a+b) % 2 == 0:
                    if board[a][b] != 'W':
                        countW += 1
                    if board[a][b] != 'B':
                        countB += 1
                else:
                    if board[a][b] != 'W':
                        countB += 1
                    if board[a][b] != 'B':
                        countW += 1

        answer.append(countW)
        answer.append(countB)

print(min(answer))
