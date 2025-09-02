#Type function
# a=32
# print(type(a))
# b="this is a variable named b"
# print (type(b))
# def func():
#     pass
# print(type(func))
# class demo:
#     pass
# print(type(demo))#in python each and every thing is an object....

# docstring : it is written in side ''' (triple inverted comma)
# we can print on using help()

def factorial (n):
    """ calculate the factorial of a number n(int: non negative number)
    returns the value of n"""
    return 1 if n ==0 or n ==1 else n*factorial(n-1)
# print (factorial(5))
help(factorial(5))

