money_excursion = float(input())
count_puzzles = int(input())
count_dolls = int(input())
count_bears = int(input())
count_minions = int(input())
count_trucks = int(input())

price_puzzles = count_puzzles * 2.60
price_dolls = count_dolls * 3.00
price_bears = count_bears * 4.10
price_minions = count_minions * 8.20
price_trucks = count_trucks * 2.00

count = count_puzzles + count_dolls + count_minions + count_trucks + count_bears
sum = price_puzzles + price_dolls + price_minions + price_bears + price_trucks

if count >= 50:
    discount = sum * 0.25
    sum -= discount
else:
    sum=sum
rent = sum * 0.1
total = sum - rent
if total >= money_excursion:
    result = total - money_excursion
    print(f"Yes! {result:.2f} lv left.")
elif total < money_excursion:
    result = money_excursion - total
    print(f"Not enough money! {result:.2f} lv needed.")
