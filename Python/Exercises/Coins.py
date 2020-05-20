import math
change = float(input())
coins = 0
changed_coins = change * 100

while changed_coins > 0:
    if changed_coins >= 200:
        changed_coins -= 200
        coins += 1
    if 200 > changed_coins >= 100:
        changed_coins -= 100
        coins += 1
    if 100 > changed_coins >= 50:
        changed_coins -= 50
        coins += 1
    if 50 > changed_coins >= 20:
        changed_coins -= 20
        coins += 1
    if 20 > changed_coins >= 10:
        changed_coins -= 10
        coins += 1
    if 10> changed_coins >= 5:
        changed_coins -= 5
        coins += 1
    if 5 > changed_coins >= 2:
        changed_coins -= 2
        coins += 1
    if 2 > changed_coins >= 1:
        changed_coins -= 1
        coins += 1
    changed_coins = math.floor(changed_coins)
print(coins)