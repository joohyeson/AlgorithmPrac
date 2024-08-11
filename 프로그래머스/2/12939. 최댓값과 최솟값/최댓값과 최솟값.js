function solution(s) {
    const str=s.split(" ").sort((a, b)=> +a>+b? 1: -1);

    
    return [str[0], str[str.length-1]].join(" ");
}