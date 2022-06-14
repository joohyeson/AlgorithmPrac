#include <iostream>

int main(void)
{
    int A=0;
    int B = 0;

    std::cin >> A>>B;

    if (A >= -1000 && A <= 1000 && A != 0)
    {
        if (B >= -1000 && B <= 1000 && B != 0)
        {
            if (A > 0)
            {
                if (B > 0)
                {
                    std::cout << "1";
                }
                else
                {
                    std::cout << "4";
                }
            }
            else
            {
                if (B > 0)
                {
                    std::cout << "2";
                }
                else
                {
                    std::cout << "3";
                }
            }
        }
    }

}