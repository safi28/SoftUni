min_walks = int(input())
count_walks = int(input())
cat_kcal = int(input())

sum_mins = count_walks * min_walks
total_kcal = sum_mins * 5
percentage = 0.5 * cat_kcal

if total_kcal >= percentage:
    print(f"Yes, the walk for your cat is enough. Burned calories per day: {total_kcal}.")
else:
    print(f"No, the walk for your cat is not enough. Burned calories per day: {total_kcal}.")