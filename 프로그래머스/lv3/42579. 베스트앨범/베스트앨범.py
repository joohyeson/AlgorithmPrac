def solution(genres, plays):
    answer=[]
#dic { 장르1: [[노래1 (재생 횟수) :(고유 번호)], [노래2 (재생 횟수) :(고유 번호)]...]} 
    dic={}
    
    for i in range(len(genres)):
        if genres[i] in dic:
            dic[genres[i]].append([plays[i], i])
        else:
            dic[genres[i]]=[[plays[i], i]]
    
    rank={}
    
    for i in range(len(genres)):
        if genres[i] not in rank:
            rank[genres[i]]=plays[i]
        else:
            rank[genres[i]]+=plays[i]
        
    rank=sorted(rank.items(), key=lambda x: x[1],reverse=True)
    
    
    for dt in rank:
        
        songCount=0
        songRank=sorted(dic[dt[0]], key=lambda x: (-x[0], x[1]))
        
        for song in songRank:
            answer.append(song[1])
            songCount+=1
            if(songCount==2):
                break
        
    return answer