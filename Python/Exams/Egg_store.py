started_amout_eggs = int(input())
command = input()
sold = 0

while command != 'Close':
    amount = int(input())
    action = command
    num = amount

    if action == 'Buy':
        if num < started_amout_eggs:
            started_amout_eggs -= num
            sold += num
        else:
            print(f'Not enough eggs in store!\nYou can buy only {started_amout_eggs}.')
            break
    elif action == 'Fill':
        started_amout_eggs += num
    elif action == 'Close':
        print(f'Store is closed!\n{sold} eggs sold.')
        break
    command = input()

