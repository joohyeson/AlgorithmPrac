function solution(num_list) {
    
    return num_list.reduce((sum, cur)=> { cur&1?sum[1]++:sum[0]++;
                                      return sum }, [0,0]);
}