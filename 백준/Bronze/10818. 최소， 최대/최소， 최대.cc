#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <iostream>
#include <algorithm>

int min=-1000001;
int max= 1000001;

int main(void)
{
	int count = 0;
	scanf("%d", &count);

	for (int i = 0; i < count; i++)
	{
		int now = 0;
		scanf("%d", &now);

		if (now > max||max== 1000001)
		{
			max = now;
		}

		if (now < min|| min==-1000001)
		{
			min = now;
		}

	}

	printf("%d %d", min, max);
}