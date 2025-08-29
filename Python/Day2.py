x=10
y=x

print(id(x),id(y))

#mutable and inmutable

#inmutable- cannot chage the object (any change makes a new object ).
#mutable- object can change without creating a new one. 

a="hi"
print(id(a))
a=a+"there"
print(id(a))

list=[1,2,3]
list.append(4)
print(id(list))


a=[1,2,3]
print(id(a))
b=a
b.append(4)
print(b)
print (a)#here it will also chage because a and b point to same object

a=[1,2,3]
print(id(a))
b=a.copy()
b.append(4)
print(b)
print (a)#here it will not chage because b is copy of a.........