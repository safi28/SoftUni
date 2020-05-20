budget = float(input())
count_extras = int(input())
price_clothes_extra = float(input())

price_decor = 0.1 * budget
clothes_price = 0
if count_extras > 150:
    clothes_price = (count_extras * price_clothes_extra) * 0.90
else:
    clothes_price = count_extras * price_clothes_extra

total = price_decor + clothes_price

if total > budget:
    print(f"Not enough money!\nWingard needs {total - budget:.2f} leva more.")
else:
    print(f"Action!\nWingard starts filming with {budget - total:.2f} leva left.")