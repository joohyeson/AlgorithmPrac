from collections import deque

# 보드의 크기
boardSize = int(input())
# 사과의 개수
appleCount = int(input())

apples = [list(map(int, input().split())) for _ in range(appleCount)]
# 뱀의 방향 변환 횟수
chDirCount = int(input())

dirs = [list(map(str, input().split())) for _ in range(chDirCount)]

mydeq = deque()
nowCoor = [1, 1]
mydeq.append(nowCoor)

nowCount = 0

nowDir = 0  # right down left up

while nowCoor[0] > 0 and nowCoor[1] > 0 and nowCoor[0] <= boardSize and nowCoor[1] <= boardSize:

    isApple = False
    tmp = [nowCoor[0], nowCoor[1]]
    for apple in apples:
        if apple[0] == nowCoor[0] and apple[1] == nowCoor[1]:
            apples.remove(apple)
            isApple = True
            break

    mydeq.appendleft(tmp)

    if isApple == False:
        mydeq.pop()

    for dir in dirs:
        if(nowCount == int(dir[0])):
            if(dir[1] == 'L'):
                nowDir = (nowDir-1) % 4
            else:
                nowDir = (nowDir+1) % 4
            dirs.remove(dir)

    tmp = [0, 0]
    if nowDir == 0:
        tmp = [nowCoor[0], nowCoor[1]+1]
    elif nowDir == 1:
        tmp = [nowCoor[0]+1, nowCoor[1]]
    elif nowDir == 2:
        tmp = [nowCoor[0], nowCoor[1]-1]
    elif nowDir == 3:
        tmp = [nowCoor[0]-1, nowCoor[1]]

    for li in mydeq:
        if(li[0] == tmp[0] and li[1] == tmp[1]):
            tmp = [0, 0]

    nowCoor = tmp

    nowCount = nowCount+1
    #print("Count: ", nowCount)
    #print("Queue: ", mydeq)

print(nowCount)
