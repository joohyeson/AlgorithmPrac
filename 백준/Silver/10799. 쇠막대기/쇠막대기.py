bars = list(map(str, input()))

stack = []
num = 0
count = 0
for bar in bars:
    if(bar == '('):
        stack.append(bar)
    elif(bar == ')'):
        if(bars[count-1] == '('):
            stack.pop()
            num += len(stack)
        else:
            stack.pop()
            num += 1
    count += 1

print(num)
