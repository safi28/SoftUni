income = int(input())
account = 0
counter = 1

while counter <= income:
    sum = float(input())
    if sum <= 0:
        print("Invalid operation!")
        break
    else:
        account += sum
        print(f"Increase: {sum:.2f}")
    counter += 1
print(f"Total: {account:.2f}")
