str = input().split("-")

answer = 0

for i in str[0].split("+"):
    answer += int(i)

for i in str[1:]:
    for j in i.split("+"):
        answer -= int(j)

print(answer)
