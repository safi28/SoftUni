budget = float(input())
gender = input()
age = int(input())
sport = input()
price = 0
total_price = 0

if gender == 'm':
    if sport == 'Gym':
        price = 42
    elif sport == 'Boxing':
        price = 41
    elif sport == 'Yoga':
        price = 45
    elif sport == 'Zumba':
        price = 34
    elif sport == 'Dances':
        price = 51
    elif sport == 'Pilates':
        price = 39
elif gender == 'f':
    if sport == 'Gym':
        price = 35
    elif sport == 'Boxing':
        price = 37
    elif sport == 'Yoga':
        price = 42
    elif sport == 'Zumba':
        price = 31
    elif sport == 'Dances':
        price = 53
    elif sport == 'Pilates':
        price = 37

if age <= 19 and budget >= price:
    total_price = price * 0.80
    print(f"You purchased a 1 month pass for {sport}. ")
elif budget >= price and age > 19:
    print(f"You purchased a 1 month pass for {sport}. ")
elif budget < price and age <= 19:
    price *= 0.8
    moneyNeeded = price - budget
    print(f"You don't have enough money! You need ${moneyNeeded:.2f} more.")
else:
    moneyNeeded = price - budget
    print(f"You don't have enough money! You need ${moneyNeeded:.2f} more.")