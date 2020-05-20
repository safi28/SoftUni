climber_Counter = int(input())
total_People = 0
total_musala = 0
total_monblan = 0
total_kilimindjaro = 0
total_k2 = 0
total_everest = 0

for num in range(0, climber_Counter):
    countPeople = int(input())
    total_People += countPeople
    if countPeople <= 5:
        total_musala += countPeople
    elif countPeople >= 6 and countPeople <= 12:
        total_monblan += countPeople
    elif countPeople >= 13 and countPeople <= 25:
        total_kilimindjaro += countPeople
    elif countPeople >= 26 and countPeople <= 40:
        total_k2 += countPeople
    elif countPeople >= 41:
        total_everest += countPeople

print(f"{((total_musala / total_People) * 100):.2f}%")
print(f"{((total_monblan/ total_People) * 100):.2f}%")
print(f"{((total_kilimindjaro/ total_People) * 100):.2f}%")
print(f"{((total_k2 / total_People) * 100):.2f}%")
print(f"{((total_everest / total_People) * 100):.2f}%")