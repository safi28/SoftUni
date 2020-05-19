import math
figure = input()

if figure == "square":
    n = float(input())
    result = n * n
    print(f"{result:.3f}")
elif figure == "rectangle":
    width = float(input())
    length = float(input())
    result = width * length
    print(f"{result:.3f}")
elif figure == "circle":
    radius = float(input())
    result = (math.pi * (radius * radius))
    print(f"{result:.3f}")
elif figure == "triangle":
    AB = float(input())
    h1 = float(input())
    result = (AB * h1) / 2
    print(f"{result:.3f}")
