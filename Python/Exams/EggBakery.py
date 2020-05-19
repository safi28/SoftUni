FlourPrice = input()
FlourKg = input()
SugarKg = input()
nEggsBark = input()
MayPacket = input()

SugarPrice = float(FlourPrice) * 0.75
EggsPrice = float(FlourPrice) * 1.1
MayPacketPrice = float(SugarPrice) * 0.2
FlourSum = float(FlourPrice) * float(FlourKg)
SugarSum = float(SugarKg) * float(SugarPrice)
EggsSum = int(nEggsBark) * float(EggsPrice)
MaySum = float(MayPacket) * float(MayPacketPrice)

Total = FlourSum + SugarSum + EggsSum + MaySum
print('{:.2f}'.format(Total))