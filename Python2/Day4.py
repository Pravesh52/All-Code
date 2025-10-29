# n = 10  

# a, b = 0, 1

# print("Fibonacci Series ", n, "terms:")

# for i in range(n):
#     print(a, end=" ")
#     a, b = b, a + b

# sum of natural number

def sum_natural_numbers(n):
    if n < 0:
        return "Please enter a positive number."
    else:
        return n * (n + 1) // 2 

number = 10
total_sum = sum_natural_numbers(number)
print(f"The sum of the first {number} natural numbers is: {total_sum}")