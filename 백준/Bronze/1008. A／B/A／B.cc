#include <iostream>

int main(void)
{
    double a=0;
    double b=0;
    std::cin >>a >>b;
    
    if (0 < a && b < 10)
    {
        std::cout.precision(10);
        std::cout<< a /b;
    }
}