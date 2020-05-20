type_cruise = input()
type_cabin = input()
count_nights = int(input())
price = 0
if type_cruise == "Mediterranean":
    if type_cabin == "standard cabin":
        price = 27.50
    elif type_cabin == "cabin with balcony":
        price = 30.20
    else:
        price = 40.50
elif type_cruise == "Adriatic":
    if type_cabin == "standard cabin":
        price = 22.99
    elif type_cabin == "cabin with balcony":
        price = 25.00
    else:
        price = 34.99
else:
    if type_cabin == "standard cabin":
        price = 23.00
    elif type_cabin == "cabin with balcony":
        price = 26.60
    else:
        price = 39.80

total = price * 4 * count_nights
if count_nights > 7:
    total *= 0.75
else:
    total = total

print(f"Annie's holiday in the {type_cruise} sea costs {total:.2f} lv.")
