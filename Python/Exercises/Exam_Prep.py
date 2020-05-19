unsatistfied_grades = int(input())
failed_times = 0
last_problem = ''
has_failed = True
grade_sum = 0
counter_solver = 0

while failed_times < unsatistfied_grades:
    problem_name = input()
    if problem_name == "Enough":
        has_failed = False
        break
    grade = int(input())
    if grade <= 4:
        failed_times += 1
    last_problem = problem_name
    counter_solver += 1
    grade_sum += grade
if has_failed:
    print(f"You need a break, {unsatistfied_grades} poor grades.")
else:
    print(f"Average score: {grade_sum / counter_solver:.2f}\nNumber of problems: {counter_solver}\nLast problem: {last_problem}")