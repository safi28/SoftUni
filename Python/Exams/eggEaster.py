bread = 3.20
eggs = 4.35
cookies = 5.40
eggs_painter = 0.15

priceBread = input()
priceEggs = input()
priceCookies = input()

breadTotal = round(int(priceBread) * float(bread),2)
eggsTotal = int(priceEggs) * float(eggs)
cookiesTotal = int(priceCookies) * float(cookies)
painterTotal = int(priceEggs) * 12 * float(eggs_painter)

total: float = breadTotal + eggsTotal + cookiesTotal + painterTotal
result = round(total,2)
print('{:.2f}'.format(result))
