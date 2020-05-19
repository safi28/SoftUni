capacity = float(input())
command = input()
count = 0

while command != "End":
    volume = float(command)
    count += 1
    if count % 3 == 0:
        capacity -= volume * 1.1
    else:
        capacity -= volume

    if capacity <= 0:
        print("No more space!")
        count -= 1
        print(f"Statistic: {count} suitcases loaded.")
        break

    command = input()

if command == "End":
    print("Congratulations! All suitcases are loaded!")
    print(f"Statistic: {count} suitcases loaded.")
