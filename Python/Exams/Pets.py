import math

days = int(input())
total_food = float(input())
total_quantity_food_cat = 0
total_quantity_food_dog = 0
result_food = 0
discount = 0
total_percent = 0
percent_dog = 0
percent_cat = 0

for i in range(1, days + 1):
    quantity_food_dog = int(input())
    quantity_food_cat = int(input())
    total_quantity_food_cat += quantity_food_cat
    total_quantity_food_dog += quantity_food_dog

    if i % 3 == 0:
        discount += (quantity_food_dog + quantity_food_cat) * 0.1

result_food = total_quantity_food_dog + total_quantity_food_cat
total_percent = (result_food / total_food) * 100
percent_cat = (total_quantity_food_cat / result_food) * 100
percent_dog = (total_quantity_food_dog / result_food) * 100

print(f"Total eaten biscuits: {round(discount)}gr.")
print(f"{total_percent:.2f}% of the food has been eaten.")
print(f"{percent_dog:.2f}% eaten from the dog.")
print(f"{percent_cat:.2f}% eaten from the cat.")
