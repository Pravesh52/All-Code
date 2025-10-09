# Date-09-10-2025
#DAY 1
# a,b,c=10,20,30
# if a>b and a>c:
#     print("a is greatest")
# elif b>a and b>c:
#     print("B is greatest")
# else: 
#     print("c is greatest")


# find sum of digit
# n=1234
# ans=0
# count=0
# while n>0:
#     digit=n%10
#     ans=ans+digit
#     n=int(n/10)
#     count=count+1
# print(ans)
# print(count)


#CHECK PRIME NUMBER OR NOT
def is_prime(n):
    if n <= 1:   
        return False
    for i in range(2, int(n**0.5) + 1): 
        if n % i == 0:
            return False
    return True

num = int(input("Enter a number: "))

if is_prime(num):
    print(num, "is a prime number.")
else:
    print(num, "is not a prime number.")