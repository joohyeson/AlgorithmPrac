#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <vector>
#include <algorithm>

std::vector<int> arr;

unsigned int count = 0;
unsigned int size = 0;
unsigned int woodSize = 0;
unsigned int tmp;
unsigned int max = 0;

bool possible(unsigned int mid)
{
	int num = 1;

	int sum = mid;



	for (int i = 0; i < count; i++)

	{

		//인출하는 양이 하루 쓸 돈보다 적으면 모순

		if (mid < arr[i])

			return false;



		if (sum - arr[i] < 0)

		{

			sum = mid;

			num++;

		}

		sum -= arr[i];

	}

	return woodSize >= num;


}

int main() {

	scanf("%d %d", &count, &woodSize);
	int sum = 0;
	for (int i = 0; i < count; i++)
	{
		scanf("%d", &tmp);
		arr.push_back(tmp);

		sum += arr[i];
	}

	unsigned int low = 1;
	unsigned int high = sum;
	unsigned int result = 0;

	while (low <= high)
	{
		unsigned int mid = (low + high) / 2;

		if (possible(mid))
		{
			result = mid;
			high = mid - 1;
		}
		else low = mid + 1;
	}


	printf("%d", result);

}