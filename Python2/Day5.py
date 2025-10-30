# recursion
# print number using recursion

# def print_numbers(n):
#     if n == 0:           
#         return
#     print(n)             
#     print_numbers(n - 1)  
# print_numbers(5)


# def fact(n):
#     if n == 0:
#         return 1
#     else:
#         return n * fact(n - 1)

# print(fact(5))

# # fibonacci series

# def fibonacci(n):
#     if n <= 1:          
#         return n
#     else:
#         return fibonacci(n-1) + fibonacci(n-2)  

# n = 10
# print("Fibonacci Series:")
# for i in range(n):
#     print(fibonacci(i))



def even(n):
    if n == 0:           
        return
    even(n - 1)
    if(n%2==0): 
     print(n)             
even(10)

