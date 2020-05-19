bitcoin = int(input())
yuan = float(input())
commission = float(input()) / 100

bitcoin_lv = bitcoin * 1168
yuan_dollars = yuan * 0.15
dollars_lv = yuan_dollars* 1.76
euro = (bitcoin_lv + dollars_lv) / 1.95
sum_commission = euro * commission
result = euro - sum_commission
print("%.2f" % result)