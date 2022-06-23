#include <iostream>
void mult(int mCount, int sum)
{
    if (mCount == 0)
    {
        std::cout << sum;
        return;
    }
    else
    {
        sum += mCount;
        mult(mCount - 1, sum);
    }
}
int main(void)
{
    int count = 0;
    std::cin >> count;

    mult(count, 0);
}