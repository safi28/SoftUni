width = int(input())
height = int(input())
size = width * height
command = input()
sum_pieces = 0
while command != "STOP":
    piece = int(command)
    sum_pieces += piece
    if sum_pieces > size:
        print(f"No more cake left! You need {sum_pieces - size} pieces more.")
        break
    command = input()
if size >= sum_pieces:
    print(f"{size - sum_pieces} pieces are left.")