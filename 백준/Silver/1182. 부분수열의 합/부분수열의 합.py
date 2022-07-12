from itertools import combinations

x, y = map(int, input().split())
mList = list(map(int, input().split()))

count = 0

for i in range(1, x+1):
    now = list(combinations(mList, i))
    for n in now:
        sum = 0
        for j in range(i):
            sum += n[j]

        if sum == y:
            count += 1
print(count)


# [('1', '2'), ('1', '3'), ('1', '4'), ('1', '5'), ('2', '3'), ('2', '4'), ('2', '5'), ('3', '4'), ('3', '5'), ('4', '5')]
