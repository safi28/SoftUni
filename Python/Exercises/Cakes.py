days = int(input())
count_sweets = int(input())
count_cakes = int(input())
count_goffrett = int(input())
count_pancakes = int(input())

cakes = count_cakes * 45
goffretts = count_goffrett * 5.80
pancakes = count_pancakes * 3.20
total_sum = (cakes + goffretts + pancakes) * count_sweets
total = total_sum * days
result = total - 1/8 * total

print(f"{result:.2f}")