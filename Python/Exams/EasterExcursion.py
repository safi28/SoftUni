destination = input()
dates = input()
nights = input()

price = 0

if destination == 'France' and dates == "21-23":
    price = int(nights) * 30
    print('Easter trip to France : {1:.2f} leva.'.format("", price))
elif destination == 'France' and dates == "24-27":
    price = int(nights) * 35
    print('Easter trip to France : {1:.2f} leva.'.format("", price))

elif destination == 'France' and dates == "28-31":
    price = int(nights) * 40
    print('Easter trip to France : {1:.2f} leva.'.format("", price))

elif destination == 'Italy' and dates == "21-23":
    price = int(nights) * 28
    print('Easter trip to Italy : {1:.2f} leva.'.format("", price))
elif destination == 'Italy' and dates == "24-27":
    price = int(nights) * 32
    print('Easter trip to Italy : {1:.2f} leva.'.format("", price))
elif destination == 'Italy' and dates == "28-31":
    price = int(nights) * 39
    print('Easter trip to Italy : {1:.2f} leva.'.format("", price))

elif destination == 'Germany' and dates == "21-23":
    price = int(nights) * 32
    print('Easter trip to Germany : {1:.2f} leva.'.format("", price))
elif destination == 'Germany' and dates == "24-27":
    price = int(nights) * 37
    print('Easter trip to Germany : {1:.2f} leva.'.format("", price))
elif destination == 'Germany' and dates == '28-31':
    price = int(nights) * 43
    print('Easter trip to Germany : {1:.2f} leva.'.format("", price))