import math
sec_record = float(input())
meters_distance = float(input())
time_sec = float(input())

up = meters_distance * time_sec
time = math.floor(meters_distance / 50) * 30
total_time = up + time

if total_time < sec_record:

    print(f"Yes! The new record is {total_time:.2f} seconds.")
else:
    failure_time = total_time - sec_record
    print(f"No! He was {failure_time:.2f} seconds slower.")