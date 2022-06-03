#include <iostream>

int main(void)
{
    int A=0;
    int B=0;
    std::cin >> A >> B;

    if (A > B)
    {
        std::cout << ">";
    }
    else if (A < B)
    {
        std::cout << "<";
    }
    else if(A==B)
    {
        std::cout << "==";
    }
}