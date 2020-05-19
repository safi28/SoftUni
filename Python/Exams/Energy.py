fruit = input()
size = input()
num_ordered = int(input())

price = 0
discount = 0
total_price = 0

if size == "big":
    if fruit == "Watermelon":
        price = 28.70 * 5
    elif fruit == "Mango":
        price = 19.60 * 5
    elif fruit == "Pineapple":
        price = 24.80 * 5
    elif fruit == "Raspberry":
        price = 15.20 * 5
else:
    if fruit == "Watermelon":
        price = 56 * 2
    elif fruit == "Mango":
        price = 36.66 * 2
    elif fruit == "Pineapple":
        price = 42.10 * 2
    else:
        price = 20 * 2

total_price = price * num_ordered
if 400 <= total_price <= 1000:
    discount = total_price * 0.85
    print(f"{discount:.2f} lv.")
elif total_price > 1000:
    discount = total_price * 0.5
    print(f"{discount:.2f} lv.")
else:
    print(f"{total_price:.2f} lv.")
