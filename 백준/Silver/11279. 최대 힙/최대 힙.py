import heapq
import sys

count = int(input())
arr = []
for i in range(count):
    now = int(sys.stdin.readline())

    if now == 0:
        if len(arr) == 0:
            print(0)
        else:
            print(-heapq.heappop(arr))
    else:
        heapq.heappush(arr, -now)
