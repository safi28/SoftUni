import  math
count_breads = int(input())
sum_need_sugar = 0
count_package_sugar = 0
sum_need_flour = 0
count_package_flour = 0
biggest_spent_sugar = []
biggest_spent_flour = []

for i in range(count_breads):
    spent_sugar = int(input())
    spent_flour = int(input())
    biggest_spent_sugar.append(spent_sugar)
    biggest_spent_flour.append(spent_flour)
    sum_need_sugar += spent_sugar
    sum_need_flour += spent_flour


count_package_sugar = sum_need_sugar / 950
count_package_flour = sum_need_flour / 750

print(f'Sugar: {math.ceil(count_package_sugar)}\nFlour: {math.ceil(count_package_flour)}\nMax used flour is {max(biggest_spent_flour)} grams, max used sugar is {max(biggest_spent_sugar)} grams.')