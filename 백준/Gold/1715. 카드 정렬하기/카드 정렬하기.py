import math
import sys
import heapq

count = int(input())
arr = []
for i in range(count):
    now = int(sys.stdin.readline())
    heapq.heappush(arr, now)
sum = 0

for i in range(count-1):
    value = heapq.heappop(arr)+heapq.heappop(arr)
    sum += value
    heapq.heappush(arr, value)
print(sum)

# 3개인 경우 : 10 20 30 (10+20)+(30+30) 2번
# 4개인 경우 : 10 20 30 40 (10+20)+(30+30)+(30+40)
