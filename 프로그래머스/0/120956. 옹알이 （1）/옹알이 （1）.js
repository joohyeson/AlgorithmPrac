function solution(babbling) {
    const babble=["aya", "ye", "woo", "ma"];
    return babbling.filter((str)=> {
        let temp=[str];
        babble.forEach((b)=> {
           temp=temp.map((t)=>(t.toString()).split(b))
        })
        return temp.join("").replaceAll(",","")===""
    }).length;
}