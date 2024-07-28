

function solution(quiz) {

    return quiz.map((str)=>{
        const [calc, result]=str.split(" = ");
        const itr=calc.includes("+")? 1:-1;
        const [x,y]=calc.split(itr===1? " + ": " - ");
                
        return (+x+(itr*(+y)))===+result? "O": "X"
    });
}