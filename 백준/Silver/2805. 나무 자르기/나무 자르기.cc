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

bool possible(long long len)
{

	unsigned int taken = 0;
	for (int i = 0; i < count; i++) {
		if (arr[i] >= len)
			taken += (arr[i] - len);
		if (taken >= woodSize) return true;
	}
	return false;

}

int main() {

	scanf("%d %d", &count, &woodSize);

	for (int i = 0; i < count; i++)
	{
		scanf("%d", &tmp);
		arr.push_back(tmp);

	}

	sort(arr.begin(), arr.end());
	unsigned int low = 0;
	unsigned int high = arr.back();
	unsigned int result = 0;

	while (low <= high)
	{
		unsigned int mid = (low + high) / 2;

		if (possible(mid))
		{
			result = mid;
			low = mid + 1;

		}
		else high = mid - 1;
	}


	printf("%d", result);

}