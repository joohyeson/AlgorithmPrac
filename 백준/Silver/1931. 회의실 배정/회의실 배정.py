count = int(input())

meetings = []


for i in range(count):
    meetings.append(list(map(int, input().split())))

meetings.sort(key=lambda x: (x[1], x[0]))
nowMeet = [0, 0]
maxMeeting = 0

for meeting in meetings:
    if(meeting[0] >= nowMeet[1]):
        maxMeeting += 1
        nowMeet = meeting


# 끝나는 시간이 빠를 수록 좋음
print(maxMeeting)
