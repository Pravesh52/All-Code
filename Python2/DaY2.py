# n=int(input("Enter a number: "))
# for i in range(2,n+1):
#     isprime=True
#     for j in range(2,i):
#         if i%j==0:
#             isprime=False
#             break

#     if isprime:
#         print(i)

# Logical Python program to check palindrome


value = input("Enter a value: ")
length = len(value)
is_palindrome = True  
for i in range(length // 2):
    if value[i] != value[length - i - 1]:
        is_palindrome = False
        break
if is_palindrome:
    print("It is a palindrome!")
else:
    print(" It is not a palindrome.")


    

