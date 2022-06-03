def isEmpty(stack):
    if(len(stack) == 0):
        return 1
    return 0


n = int(input())

instructions = [list(map(str, input().split())) for _ in range(n)]

stack = []
for inst in instructions:
    if(inst[0] == "top"):
        if(isEmpty(stack) == 0):
            print(stack[-1])
        else:
            print(-1)

    elif(inst[0] == "push"):
        stack.append(inst[1])

    elif(inst[0] == "pop"):
        if(isEmpty(stack) == 0):
            print(stack.pop())
        else:
            print(-1)

    elif(inst[0] == "empty"):
        print(isEmpty(stack))

    elif(inst[0] == "size"):
        print(len(stack))
