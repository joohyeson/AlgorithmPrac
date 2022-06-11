#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <iostream>
#include <algorithm>

int data[1001];

int main(void)
{
	int num = 0;

	num = 0;
	for (int j = 0; j < 1001; j++)
	{
		data[j] = 0;
	}//init

	scanf("%d", &num);
	data[1] = 1;
	data[2] = 3;
	data[3] = 5;
	data[4] = 11;



	for (int k = 3; k <= num; k++)//배열안에 카운트 값 저장
	{
		data[k] = (data[k - 1] + data[k - 2]*2)%10007;

	}
	printf("%d\n", data[num]%10007);

}