import math
player = input()
played_games = int(input())

volleyball = 0
tennis = 0
badminton = 0

count_volley = 0
count_tennis = 0
count_badminton = 0

for games in range(0, played_games):
    game = input()
    points = int(input())
    if game == "volleyball":
        count_volley += 1
        volleyball += (points + 0.07 * points)
    elif game == "tennis":
        count_tennis += 1
        tennis += (points + 0.05 * points)
    else:
        count_badminton += 1
        badminton += (points + 0.02 * points)


average_volleyball = math.floor(volleyball / count_volley)
average_tennis = math.floor(tennis / count_tennis)
average_badminton = math.floor(badminton / count_badminton)
total = math.floor(average_tennis + average_volleyball + average_badminton)

if average_badminton >= 75 and average_tennis >= 75 and average_volleyball >= 75:
    print(f"Congratulations, {player}! You won the cruise games with {total} points.")
else:
    print(f"Sorry, {player}, you lost. Your points are only {total}.")