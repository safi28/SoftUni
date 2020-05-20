import math
L = float(input())
W = float(input())
A = float(input()) * 100

size_hall = (L * 100) * (W * 100)
size_wardrobe = (A * A)
size_chair = size_hall / 10

free_space = size_hall - size_wardrobe - size_chair
count_dancers = free_space / (40 + 7000)
print(f"{math.floor(count_dancers)}")