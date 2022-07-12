#include <bits/stdc++.h>

using namespace std;

int tx, ty;
int nx, ny;
int dx[4]={0,1,0,-1};
int dy[4]={-1,0,1,0};
int arr[100][100];
int visited[100][100];

int main(void)
{
    cin>>ty>>tx;
    
    for(int i=0; i<ty;i++)
    {
        string tmp;
        cin>>tmp;
        for(int j=0; j<tx;j++)
        {
            arr[i][j]=tmp[j]-48;
            visited[i][j]=0;
        }
    }
    
    visited[0][0]=1;
    queue<pair<int, int>> q;
    
    q.push({0, 0});
    
    while(q.size())//empty가 아닐때
    {
        tie(ny, nx)=q.front();
        q.pop();
        
        int x=nx;
        int y=ny;
        
        for(int i=0;i<4;i++)
        {
            ny=y;
            nx=x;
            
            ny+=dy[i];
            nx+=dx[i];
            
            if(ny>=ty||nx>=tx||ny<0||nx<0||arr[ny][nx]==0) continue;
            if(visited[ny][nx]) continue;//1이상. 즉 방문한 적이 있으면
            visited[ny][nx]=visited[y][x]+1;
            q.push({ny, nx});
        }
    }
    
    cout<<visited[ty-1][tx-1];

}