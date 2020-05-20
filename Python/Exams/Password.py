username = input()
password = input()

passwords = input()

while passwords != password:
    passwords = input()
if passwords == password:
    print(f"Welcome {username}!")
