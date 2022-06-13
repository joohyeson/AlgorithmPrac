#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <iostream>
#include <algorithm>

int arr[1001];
int save[1001];

int main(void)
{
	int count = 0;
	int max = 0;
	int maxCount = 0;

	scanf("%d", &count);

	for (int i = 1; i <= count; i++)
	{
		scanf("%d", &arr[i]);
	}

	for (int i = 1; i <= count; i++)
	{
		int max = 0;
		maxCount = 0;
		for (int j = 1; j < i; j++)
		{
			if (arr[i] > arr[j])
			{
				if (maxCount< save[j])
				{
					maxCount = save[j];
				}
			}
		}
		save[i] = maxCount+1;
	}

	for (int i = 1; i <= count; i++)
	{
		if (save[i] > max)
		{
			max = save[i];
		}
	}

	printf("%d", max);

	return 0;
	
}