# print("Pravesh Tiwari")

# a=10
# b=20
# # c=a+b
# print(a+b)

#sum of digit
num=123
total=0
for digits in str(num):
 total+=int(digits)
 
print("sum of digits: ",total)

#reverse a string
str="Pravesh"
reversed=" "
for ch in str:
 reversed=ch + reversed

print("reversed: ",reversed)


#factorial of a number
n=5
fact=1
for i in range(1,n+1):
    fact*=i
print("factorial: ",fact)


#count vowels and consonent
text="in this code we will count vowels and consonents"
vowels="aeiouAEIOU"
v_count=0
c_count=0
for ch in text:
    if ch in vowels:
       v_count+=1
    else: 
       c_count+=1

print("vowels: ",v_count,"consonent: ",c_count)

#multipication table print
for i in range(1,11):
 for j in range(1,11):
   print(i,"x",j,"=",i*j)
print()

#largest number in array
number=[5,6,7,8,2]
largest=number[0]
for num in number: 
  if num>largest:
    largest=num
print("Largest: ",largest)

#prime number check 
num=30
is_prime=True
if num < 2:
    is_prime = False
else:
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            is_prime = False
            break

print("Prime:" if is_prime else "Not Prime")



 