#include <iostream>
#include <string>

int main(void)
{
	int testcase;
	int playerCount;

	int pay;
	std::string name;

	int maxPay = -1;
	std::string maxName;

	std::cin >> testcase;

	for (int i = 0; i < testcase; i++)
	{
		std::cin >> playerCount;
		maxPay=-1;
		for (int num = 0; num < playerCount; num++)
		{

			std::cin >> pay;
			std::cin >> name;

			if (maxPay <= pay)
			{
				maxPay = pay;
				maxName = name;
			}
			
		}
		std::cout << maxName << std::endl;
	}
	
	
	

	


}