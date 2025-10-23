import math

T = int(input())
for _ in range(T):
    X, Y = map(int, input().split())
    gcd = math.gcd(X, Y)
    lcm = (X * Y) // gcd
    print(gcd, lcm)
