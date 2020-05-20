import math
started_points = int(input())
moves = 0
while started_points >= 0:
    if started_points <= 0:
        break
    section = input()
    moves += 1
    if section == "bullseye":
        print(f"Congratulations! You won the game with a bullseye in {moves} moves!")
        break
    points = int(input())
    if section == "double ring":
        points *= 2
    elif section == "triple ring":
        points *= 3

    started_points -= points
if started_points == 0:
    print(f"Congratulations! You won the game in {moves} moves!")
elif started_points < 0:
    print(f"Sorry, you lost. Score difference: {abs(started_points)}.")