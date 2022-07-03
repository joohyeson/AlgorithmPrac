def solution(participant, completion):
    dict={}
    
    for parti in participant:
        if(parti not in dict):
            dict[parti]=0
        else:
            dict[parti]-=1
    
    for compl in completion:
        dict[compl]+=1

    for dic in dict:
        if(dict[dic] !=1):
            return dic