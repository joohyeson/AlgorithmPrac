import math
import sys
import heapq

count = int(input())
arr = []
for i in range(count):
    now = int(sys.stdin.readline())
    heapq.heappush(arr, now)
sum = 0

while len(arr)!= 1 :
    value = heapq.heappop(arr)+heapq.heappop(arr)
    sum += value
    heapq.heappush(arr, value)
print(sum)
