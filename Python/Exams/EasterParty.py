guests: int = input()
OneGuestPrice: float = input()
budget = input()

price = 0
discount = 0

if int(guests) >= 10 and int(guests) <= 15:
    price = float(OneGuestPrice) * 0.15
    discount = float(OneGuestPrice) - float(price)

elif int(guests) >= 15 and int(guests) <= 20:
    price = float(OneGuestPrice) * 0.2
    discount = float(OneGuestPrice) - float(price)

elif int(guests) > 20:
    price = float(OneGuestPrice) * 0.25
    discount = float(OneGuestPrice) - float(price)
else:
    discount = OneGuestPrice

if int(guests):
    cake = float(budget) / 10
    Sum = int(guests) * float(discount) + float(cake)

    if float(Sum) > float(budget):
        diff = float(Sum) - float(budget)

        print('No party! {1:.2f} leva needed.'.format('party', diff))
    else:
        diff = float(budget) - float(Sum)
        print('It is party time! {1:.2f} leva left.'.format('time', diff))
