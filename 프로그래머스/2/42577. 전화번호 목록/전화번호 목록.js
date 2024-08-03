function solution(phone_book) {

 return !phone_book.sort().some((p,i)=>{
        if(i===0){
            return false;
        }
        return phone_book[i].startsWith(phone_book[i-1])
    })
}