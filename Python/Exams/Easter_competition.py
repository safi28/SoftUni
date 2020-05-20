count_breads = int(input())
command = input()
sum_points = 0

while command != 'Stop':
    for i in range(count_breads):
        baker = command
        points = int(input())

        sum_points += points
        command = input()
if command == 'Stop':
    print(f'{baker} has {sum_points} points.')
command = input()
