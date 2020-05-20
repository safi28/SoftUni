name = input()
counter = 0
sum_grades = 0

while counter < 12:
    grade = float(input())

    if grade >= 4.00:
        counter += 1
        sum_grades += grade

print(f"{name} graduated. Average grade: {sum_grades / counter:.2f}")