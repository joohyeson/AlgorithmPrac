from collections import deque

num = int(input())

q = deque([])

for i in range(num):
    q.append(i+1)

while len(q) > 1:
    q.popleft()
    q.append(q.popleft())

print(q[0])
