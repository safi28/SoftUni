n = int(input())
current = 1

for row in range(1, n + 1):
    for col in range(1, row + 1):
        is_current_bigger = False
        if current > n:
            is_current_bigger = True
            break
        print(str(current) + ' ', end='')
        current += 1
    if is_current_bigger:
        break
    print()