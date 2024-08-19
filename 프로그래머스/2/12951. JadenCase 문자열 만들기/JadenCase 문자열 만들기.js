function solution(s) {
    var answer = s.split(" ").map((sentence)=> {
        
        return sentence.charAt(0).toUpperCase()+sentence.substring(1).toLowerCase()
    });
    
    return answer.join(" ");
}