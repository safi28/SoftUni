participants = int(input())
sweets_count = 0
price = 0

for i in range(0, participants):
    name = input()
    cookie = 0
    cakes = 0
    waffles = 0

    while True:
        sweet = input()
        if sweet == "Stop baking!":
            price += cookie * 1.50
            price += cakes * 7.80
            price += waffles * 2.30
            print(f"{name} baked {cookie} cookies, {cakes} cakes and {waffles} waffles.")
            break
        baked_sweets = int(input())
        sweets_count += baked_sweets

        if sweet == "cookies":
            cookie += baked_sweets
        elif sweet == "cakes":
            cakes += baked_sweets
        elif sweet == "waffles":
            waffles += baked_sweets

print(f"All bakery sold: {sweets_count}\nTotal sum for charity: {price:.2f} lv.")