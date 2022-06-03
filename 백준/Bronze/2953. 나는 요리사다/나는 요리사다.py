mList = [list(map(int, input().split())) for _ in range(5)]

winner = 0
winnerCount = 0

for i in range(len(mList)):
    sum = 0
    for j in range(len(mList[i])):
        sum += mList[i][j]
    if(winnerCount < sum):
        winner = i+1
        winnerCount = sum

print(winner, winnerCount)
