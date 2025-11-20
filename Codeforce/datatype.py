# Date: 15/11/2025
# Day: Saturday

# H. Data Type Guessing
INT_MIN = -2147483648
INT_MAX = 2147483647
n,k,a = map(int, input().split())
num = n * k
if num % a != 0:
    print("double")
else:
    x = num // a
    if INT_MIN <= x <= INT_MAX:
        print("int")
    else:
        print("long long")