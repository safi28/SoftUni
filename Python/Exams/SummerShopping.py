budget = float(input())
price_towel = float(input())
discount = (100 - int(input())) / 100

price_umbrella = (2/3) * price_towel
flip_flops_price = 0.75 * price_umbrella
beach_bag_price = (1/3) * (price_towel + flip_flops_price)
total_price = price_towel + price_umbrella + flip_flops_price + beach_bag_price
discount_price = total_price * discount
if budget >= discount_price:
    print(f"Annie's sum is {discount_price:.2f} lv. She has {budget - discount_price:.2f} lv. left.")
else:
    print(f"Annie's sum is {discount_price:.2f} lv. She needs {discount_price - budget:.2f} lv. more.")