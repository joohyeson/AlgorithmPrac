#include <bits/stdc++.h>

using namespace std;

int c,t;
int num[15000];
int sum=0;

int main(void)
{
    cin>>c>>t;
    for(int i=0; i<c;i++)
    {
        cin>>num[i];
    }
    
        for(int i=0; i<c;i++)
        {
            for(int j=i+1;j<c;j++)
            {
                if(num[i]+num[j]==t) sum++;
            }
        }
    
    cout<<sum;
}