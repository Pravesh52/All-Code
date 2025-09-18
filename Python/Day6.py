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