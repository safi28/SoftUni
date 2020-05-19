num_floors = int(input())
num_rooms = int(input())
str = ""

for i in range(num_floors, 0, -1):
    for y in range(num_rooms):
        if i == num_floors:
            print(f"L{i}{y} ", end='')
        elif i % 2 == 0:
            print(f"O{i}{y} ", end='')
        else:
            print(f"A{i}{y} ", end='')
    print()