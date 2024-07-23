function solution(rsp) {
    const comp={2:0, 0:5, 5:2}
    var answer = '';
    return [...rsp].map((str)=>comp[str]).join("");
}