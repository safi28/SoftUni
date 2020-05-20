import  sys
n = int(input())
min = sys.maxsize
counter = 0

while counter < n:
    num = int(input())
    if min > num:
        min = num
    counter += 1

print(min)