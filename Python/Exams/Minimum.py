import sys
n = int(input())
max = -sys.maxsize
counter = 0

while counter < n:
    num = int(input())
    if num > max:
        max = num
    counter += 1
print(max)