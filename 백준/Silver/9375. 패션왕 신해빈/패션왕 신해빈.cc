#include <bits/stdc++.h>

using namespace std;
int tcnt;
int icnt;
int sum;
string temp1;
string temp2;

int main(void)
{
    cin>>tcnt;
    
    for(int i=0; i<tcnt;i++)
    {
        cin>>icnt;
        map<string, int> m;
        

        for(int j=0; j<icnt;j++)
        {
            cin>>temp1>>temp2;
            
            m[temp2]++;
        }
        
        long long ret=1;
        for(auto c: m){
            ret*=(long long)(c.second+1);
        }
        
        cout<<ret-1<<"\n";
    }
}
