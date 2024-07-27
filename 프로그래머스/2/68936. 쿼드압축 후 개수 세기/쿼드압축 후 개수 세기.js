
function solution(arr) {    
    // 4^n씩 묶는다.
    // 각 범위에 들어가는 숫자들이 모두 같다면 +1, 아니라면 더 작은 범위 탐색
    // 가장 큰 범위부터 안으로 들어가면서 실행
   const getAnswer=(row, col, an)=>{
       if(an<2) return arr[row][col]===0? [1,0]:[0,1]
       
        const wh=an/2;
        const area=[[0,0], [0,1], [1,0],[1,1]];
        let cnt=[0,0]
        
        area.forEach(([x, y])=>{
            const [cx,cy]=getAnswer(row+x*wh, col+y*wh, wh)
            cnt[0]+=cx;
            cnt[1]+=cy;
        })
       
       if(cnt[0]===0) return [0,1];
       if(cnt[1]===0) return [1,0];
       return cnt;
    }
    return getAnswer(0,0, arr.length);
}