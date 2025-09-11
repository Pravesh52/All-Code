# Function to check if a number is prime
# def is_prime(n):
#     if n <= 1:   
#         return False
#     for i in range(2, int(n**0.5) + 1): 
#         if n % i == 0:
#             return False
#     return True


# num = int(input("Enter a number: "))

# if is_prime(num):
#     print(num, "is a prime number.")
# else:
#     print(num, "is not a prime number.")


# print even number between 1 to 100
# for i in range(2, 101, 2):
#     print(i)

#print odd number between 1 to 100
# for i in range(1, 20, 2):
#     print(i)
#print sum of digits of a number
# num = int(input("Enter a number: "))
# sum_of_digits = 0     
# while num > 0:
#     digit = num % 10  
#     sum_of_digits += digit    
#     num //= 10
# print("Sum of digits:", sum_of_digits)

#print first 20 fibonacci series
a, b = 0, 1
for _ in range(20):           
    print(a, end=' ')
    a, b = b, a + b
print()





