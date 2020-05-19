favourite_book = input()
count_books = int(input())
command = input()
counter = 0

while command != favourite_book:
    book = command
    counter += 1
    count_books -= 1

    if count_books <= 0:
        print(f"The book you search is not here!\nYou checked {counter} books.")
        break
    command = input()

if command == favourite_book:
    print(f"You checked {counter} books and found it.")