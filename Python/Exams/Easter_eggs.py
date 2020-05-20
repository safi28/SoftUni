count_coloured_eggs = int(input())
red = 0
orange = 0
blue = 0
green = 0
max_eggs = 0
max_colour_eggs = ''

for col in range(count_coloured_eggs):
    current_colour = input()
    if current_colour == 'red':
        red += 1
    elif current_colour == 'orange':
        orange += 1
    elif current_colour == 'blue':
        blue += 1
    elif current_colour == 'green':
        green += 1
max_eggs = max(red, orange, blue, green)
if red > orange:
    max_colour_eggs = 'red'
elif orange > red:
    max_colour_eggs = 'orange'
elif blue > green:
    max_colour_eggs = 'blue'
elif green > blue:
    max_colour_eggs = 'green'
elif red > green:
    max_colour_eggs = 'red'
elif red > blue:
    max_colour_eggs = 'red'
elif orange > blue:
    max_colour_eggs = 'orange'
elif orange > green:
    max_colour_eggs = 'orange'
elif green > red:
    max_colour_eggs = 'green'
elif green > blue:
    max_colour_eggs = 'green'
elif blue > red:
    max_colour_eggs = 'blue'
elif blue > orange:
    max_colour_eggs = 'blue'
print(f'Red eggs: {red}\nOrange eggs: {orange}\nBlue eggs: {blue}\nGreen eggs: {green}\nMax eggs: {max_eggs} -> {max_colour_eggs}')
