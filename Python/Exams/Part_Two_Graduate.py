name = input()
counter = 0
sum_grade = 0
failed = 0
while counter < 12:
    grade = float(input())
    if grade >= 4.00:
        sum_grade += grade
    else:
        failed += 1

    if failed > 1:
        print(f"{name} has been excluded at {counter} grade")
        break

    counter += 1

if failed <= 1:
    print(f"{name} graduated. Average grade: {sum_grade / counter:.2f}")