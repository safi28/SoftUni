month_income = float(input())
months = int(input())
needed_sum = float(input())

left_money = month_income * 0.3
savings = month_income - (needed_sum + left_money)
saved = months * savings
saved_percent = (savings / month_income) * 100
print(f"She can save {saved_percent:.2f}%\n{saved:.2f}")