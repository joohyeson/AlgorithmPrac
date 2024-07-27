function getAnswer(arr, an){
    const wh=arr.length/2
    
    // 네 구역으로 분리
    const area=[[[0, wh], [0, wh]], [[wh, 2*wh], [0,wh]], [[0,wh], [wh, 2*wh]],
                [[wh, 2*wh], [wh, 2*wh]]];
    
    area.forEach(([[xStart, xEnd], [yStart, yEnd]])=>{
        let isSame=true;
        let prev=-1
         for(let i=xStart; i<xEnd; i++){
            for(let j=yStart; j<yEnd; j++){
                if(prev!==-1){
                    if(prev!==arr[i][j]){
                        isSame=false;
                        break;
                    }
                    
                }
                prev=arr[i][j]
                
            }    
        }
        
        if(isSame){
            an[prev]+=1
        }else{
            getAnswer(arr.slice(xStart, xEnd).map((a)=>a.slice(yStart, yEnd)), an)
        }
    })
    
    return an;
}


function solution(arr) {
    let prev=-1
    let isSame=true;
    arr.forEach((a)=>a.forEach((b)=> {
        if(prev!==-1&&prev!==b){
            isSame=false;
            
        }
        prev=b
    }))
    
    if(isSame){
        return prev===1? [0,1]: [1,0]
    }
    
    // 4^n씩 묶는다.
    // 각 범위에 들어가는 숫자들이 모두 같다면 +1, 아니라면 더 작은 범위 탐색
    // 가장 큰 범위부터 안으로 들어가면서 실행
    return getAnswer(arr, [0,0]);
}