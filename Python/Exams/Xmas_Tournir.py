days = int(input())
command = input()
wins = 0
count_wins = 0
count_lose = 0
total = 0

for num in range(1, days + 1):

    if command == "Finish":
        command = input()

    count_lose = 0
    count_wins = 0
    wins = 0

    while command != "Finish":
        sport = command
        result = input()
        if result == "win":
            wins += 20
            count_wins += 1
        else:
            count_lose += 1

        command = input()

    if count_wins > count_lose:
        total += wins * 1.1
    else:
        total += wins

if count_wins > count_lose:
    print(f"You won the tournament! Total raised money: {total * 1.2:.2f}")
else:
    print(f"You lost the tournament! Total raised money: {total:.2f}")
