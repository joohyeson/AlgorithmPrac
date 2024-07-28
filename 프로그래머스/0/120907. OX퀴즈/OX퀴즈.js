

function solution(quiz) {

    return quiz.map((str)=>{
        const [calc, result]=str.split(" = ");
        const e=calc.split(" ")
        const itr=e.includes("+")? 1:-1;
        const [x,y]=[e[0], e[2]];
                
        return (+x+(itr*(+y)))===+result? "O": "X"
    });
}