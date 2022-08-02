#include <iostream>

int main(void)
{
	double input1, input2;
	double sum = 0;
	int min = -1;
	double temp = 0;

	std::cin >> input1;
	std::cin >> input2;

	for (int i = 1;  i * i <= input2; i++)
	{
		temp = i * i;
		if (temp >= input1)
		{
			if (min == -1|min > temp)
			{
				min = temp;
			}
			
			sum += temp;
		}
	}

	if (min != -1)
	{
		std::cout << sum << std::endl;
		std::cout << min;
	}
	else
	{
		std::cout << min;
	}
	
}