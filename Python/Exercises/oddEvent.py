n = int(input())
oddSum = 0
oddMin = 0
oddMax = 0
evenSum = 0
evenMin = 0
evenMin = 0

for i in range(0, n - 1):
    num = int(input())

    if num[i] % 2 == 0:
        evenSum += num[i]