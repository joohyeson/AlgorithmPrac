#include <iostream>
#include <string>

int main(void)
{

	int studentCount;

	int day;
	int month;
	int year;
	std::string name;

	int maxYear = -1;
	int maxMonth = -1;
	int maxDay = -1;

	int minYear = -1;
	int minMonth = -1;
	int minDay = -1;

	std::string maxName;
	std::string minName;
	
	std::cin >> studentCount;

	std::cin >> name;
	std::cin >> day;
	std::cin >> month;
	std::cin >> year;

	maxYear = year;
	maxMonth = month;
	maxDay = day;

	minYear = year;
	minMonth = month;
	minDay = day;

	maxName = minName = name;

	for (int i = 1; i < studentCount; i++)
	{
		std::cin >> name;
		std::cin >> day;
		std::cin >> month;
		std::cin >> year;


		if (minYear < year)
		{
			minName = name;
			minYear = year;
			minMonth = month;
			minDay = day;
		}
		else if (minYear == year)
		{
			if (minMonth >month)
			{
				minName = name;
				minYear = year;
				minMonth = month;
				minDay = day;
			}
			else if (minMonth == month)
			{
				if (minDay > day)
				{
					minName = name;
					minYear = year;
					minMonth = month;
					minDay = day;
				}
			}
		}



		if (maxYear > year)///나이 많은 사람
		{
			maxName = name;
			maxYear = year;
			maxMonth = month;
			maxDay = day;
		}
		else if(maxYear==year)
		{
			if (maxMonth > month)
			{
				maxName = name;
				maxYear = year;
				maxMonth = month;
				maxDay = day;
				
			}
			else if (maxMonth == month)
			{
				if (maxDay >day)
				{
					maxName = name;
					maxYear = year;
					maxMonth = month;
					maxDay = day;
				}
			}
		}
		

	}

	std::cout << minName << std::endl;
	std::cout << maxName << std::endl;
}