import math
guestCount: int = input()
budget: float = input()

kozunakCount = math.ceil(int(guestCount) / 3)
eggsCount = int(guestCount)* 2
kozunakPrice = round(int(kozunakCount) * 4)
eggsPrice = int(eggsCount) * 0.45
totalSum = float(kozunakPrice) + float(eggsPrice)

if float(budget) < float(totalSum):
    diff = float(totalSum) - float(budget)
    result = "{1:.2f}".format("", float(diff))
    print(f"Lyubo doesn't have enough money.\nHe needs {result} lv. more.")
else:
    diff = float(budget) - float(totalSum)
    result = "{1:.2f}".format("", float(diff))

    print(f"Lyubo bought {int(kozunakCount)} Easter bread and {eggsCount} eggs.\nHe has {result} lv. left.")
