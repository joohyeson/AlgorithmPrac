#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

int data[8] = { 1,2,3,4,5,6,7 };
int ans[8];
int visit[8];

void perm1(int depth, int maxNum, int chooseCount) {//N개 중에 R개 고르기
	if (depth == chooseCount)
	{
		for (int i = 0; i < chooseCount; i++)
		{
			printf("%d ", ans[i]);
		}

		printf("\n");
		return;
	}
	else
	{
		for (int i = 0; i < maxNum; i++)
		{
			ans[depth] = data[i];
			perm1(depth + 1, maxNum, chooseCount);
		}
	}
}


//void perm2(int depth, int chooseCount, int maxNum) {//중복없는 순열
//	if (depth == chooseCount)
//	{
//		for (int i = 0; i < chooseCount; i++)
//		{
//			printf("%d ", ans[i]);
//		}
//
//		printf("\n");
//		return;
//	}
//	else
//	{
//		for (int i = 0; i < maxNum; i++)
//		{
//			if (visit[i] == 0)
//			{
//				ans[depth] = data[i];
//				visit[i] = 1;
//				perm2(depth + 1, chooseCount, maxNum);
//				visit[i] = 0;
//			}
//
//		}
//	}
//}

int main() {

	int maxNum, chooseCount;

	scanf("%d %d", &maxNum, &chooseCount);

	perm1(0, maxNum, chooseCount);

	return 0;
}