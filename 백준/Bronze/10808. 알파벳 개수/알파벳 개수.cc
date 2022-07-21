#include <bits/stdc++.h>
using namespace std;
string mInput;
map<char, int> mMap;
int main(void){
    cin>>mInput;
    for(char i='a';i<='z';i++)
    {
        mMap[i]=0;
    }
    
    for(int i=0; i<mInput.size();i++)
    {
        mMap[mInput[i]]++;
    }
    
    for(char i='a';i<='z';i++)
    {
        cout<<mMap[i]<<" ";
    }
}