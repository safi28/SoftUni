import sys

n = int(input())
max_num = int(input())
sum_num = max_num

for i in range(0, n - 1):
    num = int(input())
    sum_num += num
    if num > max_num:
        max_num = num

sum_num -= max_num

if sum_num == max_num:
    print(f"Yes\nSum = {abs(sum_num)}")
else:
    print(f"No\nDiff = {abs(max_num - sum_num)}")
