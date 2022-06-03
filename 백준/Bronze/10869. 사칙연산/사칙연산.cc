#include <iostream>

int main(void)
{
    int a=0;
    int b=0;
    std::cin >>a >>b;
    
    if (0 < a && b < 10000)
    {
        std::cout<< a +b<<"\n";
        std::cout << a - b <<  "\n";
        std::cout << a *b << "\n";
        std::cout << a / b << "\n";
        std::cout << a % b;
    }
}