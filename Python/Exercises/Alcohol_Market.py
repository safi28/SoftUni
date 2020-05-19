whiskey_price = float(input())
beer_quantity = float(input())
wine_quantity = float(input())
rakia_quantity = float(input())
whiskey_quantity = float(input())

rakia_price = whiskey_price / 2
wine_price = rakia_price - (0.4 * rakia_price)
beer_price = rakia_price - (0.8 * rakia_price)

rakia_sum = rakia_quantity * rakia_price
wine_sum = wine_quantity * wine_price
beer_sum = beer_quantity * beer_price
whiskey_sum = whiskey_price * whiskey_quantity
total = rakia_sum + wine_sum + beer_sum + whiskey_sum

print(f"{total:.2f}")