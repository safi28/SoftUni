food_kg = int(input()) * 1000
command = input()
total_food = 0

while command != "Adopted":
    food = int(command)
    total_food += food

    command = input()

if food_kg >= total_food:
    print(f"Food is enough! Leftovers: {food_kg - total_food} grams.")
elif total_food > food_kg:
    print(f"Food is not enough. You need {total_food - food_kg} grams more.")
