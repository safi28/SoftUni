size_eggs = input()
colour_eggs = input()
count = int(input())
price = 0

if colour_eggs == 'Red':
    if size_eggs == 'Large':
        price = 16
    elif size_eggs == 'Medium':
        price = 13
    elif size_eggs == 'Small':
        price = 9
elif colour_eggs == 'Green':
    if size_eggs == 'Large':
        price = 12
    elif size_eggs == 'Medium':
        price = 9
    elif size_eggs == 'Small':
        price = 9
elif colour_eggs == 'Yellow':
    if size_eggs == 'Large':
        price = 9
    elif size_eggs == 'Medium':
        price = 7
    elif size_eggs == 'Small':
        price = 5
total_price = price * count
costs = total_price * 0.35
num = round(costs, 2)
final_price = total_price - num

print(f'{final_price:.2f} leva.')
