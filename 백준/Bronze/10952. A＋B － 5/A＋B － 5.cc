#include <iostream>
#include <vector>

struct Vec2 {
    int x;
    int y;
};
int main(void)
{
    std::vector<Vec2> store;
    int tempX = -1;
    int tempY = -1;

    while (tempX != 0 && tempY != 0)
    {
        std::cin >> tempX >> tempY;

            store.push_back(Vec2{ tempX, tempY });

    }

    for (auto m : store)
    {
        
        if (m.x != 0 && m.y != 0)
        {
            std::cout << m.x + m.y;
            std::cout << "\n";
        }
    }
}