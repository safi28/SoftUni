count_pens = int(input())
count_markers = int(input())
liters_preparation = float(input())
discount = int(input())

price_pens = count_pens * 5.80
price_markers = count_markers * 7.20
price_preparation = liters_preparation * 1.20

total = price_pens + price_markers + price_preparation
result = total -((total * discount) / 100)
print("%.3f" % result)