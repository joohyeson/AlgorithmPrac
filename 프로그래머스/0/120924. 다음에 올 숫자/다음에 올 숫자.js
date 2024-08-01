function solution(common) {
    const l=common.length
    const first=common[l-1]-common[l-2]
    const second=common[l-2]-common[l-3]
    if(second===0){
       return common[0]
    }
    return common[l-1]+((first/second)*first);
}