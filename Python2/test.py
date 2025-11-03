# import simplemath

# print(simplemath.x)

# simplemath.add(10,20)

# simplemath.product(10,20)

# marks = int(input("Enter your marks to check pass or fail: "))

# if marks >= 75:
#     print("A Grade")
# elif marks >= 60:
#     print("B Grade")
# elif marks >= 50:
#     print("C Grade")
# elif marks >= 44:
#     print("D Grade")
# else:
#     print("Fail")


# check the palindrome

def palindrome(s):
    if len(s) <= 1:
        return True
  
    if s[0] != s[-1]:
        return False
    
    return palindrome(s[1:-1])

s = input("Enter word: ")
if palindrome(s):
    print("Palindrome")
else:
    print("Not Palindrome")




