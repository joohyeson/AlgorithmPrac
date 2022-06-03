#include <iostream>

int main(void)
{
    int count = 0;
    std::cin >> count;

    for (int c = 1; c <= count; c++)
    {
        for (int i = 0; i < count; i++)
        {
            if (i>= count - c)
            {
                std::cout << "*";
            }
            else
            {
                std::cout << " ";
            }
           
           
        }

        if (c != count)
        {
            std::cout << "\n";
        }
    }
}
