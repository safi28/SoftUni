width = int(input())
length = int(input())
height = int(input())
command = input()
box_size = width * length * height
copy = box_size
cubic = 0

while command != "Done":
    boxes = int(command)
    cubic += boxes
    copy -= boxes
    if copy < 0:
        print(f"No more free space! You need {cubic - box_size} Cubic meters more.")
        break
    command = input()

if copy >= 0:
    print(f"{box_size - cubic} Cubic meters left.")