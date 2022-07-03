def solution(clothes):
    dict={}
    
    for cloth in clothes:
        if cloth[1] not in dict:
            dict[cloth[1]]=1
        else:
            dict[cloth[1]]+=1
            
    answer = 1
    for dt in dict:
        answer*=dict[dt]+1
    
    return answer-1