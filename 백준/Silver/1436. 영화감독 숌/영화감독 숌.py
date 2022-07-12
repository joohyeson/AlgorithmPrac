num = int(input())

count = 0
strr = 666

while count <= 10000:
    if '666' in str(strr):
        count += 1
        if count == num:
            print(strr)
            break
        strr += 1
    else:
        strr += 1
