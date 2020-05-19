num = float(input())
metric = input()
metric_result = input()

if metric == "mm" and metric_result == "m":
    print(f"{num / 1000:.3f}")
elif metric == "m" and metric_result == "cm":
    print(f"{num * 100:.3f}")
elif metric == "cm" and metric_result == "mm":
    print(f"{num * 10:.3f}")
elif metric == "mm" and metric_result == "cm":
    print(f"{num / 10:.3f}")    
elif metric == "cm" and metric_result == "m":
    print(f"{num / 100:.3f}")
elif metric == "m" and metric_result == "mm":
    print(f"{num * 1000:.3f}")