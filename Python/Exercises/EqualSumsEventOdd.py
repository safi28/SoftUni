start_number = int(input())
end_number = int(input())

for num in range(start_number, end_number + 1):
    num_as_string = str(num)
    sum_even = 0
    sum_odd = 0

    for i in range(0, len(num_as_string)):
        digit = int(num_as_string[i])
        if (i + 1) % 2 == 0:
            sum_even += digit
        else:
            sum_odd += digit

    if sum_even == sum_odd:
        print(num, end=' ')