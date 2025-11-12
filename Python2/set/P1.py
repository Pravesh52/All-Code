s={1,2,3}
print(s)
print(type(s))

# set are duplicate not allow print
s={1,2,3,1,4,4}
print(s)

#we can meke set from a list
s=set([1,2,3,1])
print(s)

#initialize a set with set() method
s=set()
print(type(s))

# set are indexing not support
# s={1,3}
# print(s[1]) 

#add element
s={1,3}
s.add(2)
print(s)

# add multiple elements
s.update([5,6,1])
print(s)

s.update([8,9],{10,2,3})
print(s)
# can we delete set of value
s.discard(3)
print(s)
# random value delete using pop
s.pop() 
s.pop() 
print(s)

# this function are use all value clear

s.clear()
print(s)


# python set operation
set1={1,2,3,4,5}
set2={3,4,5,6,7}
# union of set using | operator
print(set1|set2)
#another way
print(set1.union(set2))
# intersection of two set
print(set1 & set2)
# another way
print(set1.intersection(set2))

# set difference: set of elements that are only in set1 ibut not in set2
print(set1 - set2)
# another way
print(set1.difference(set2))

# use operator
print(set1^set2)

# use symmetric_difference function
print(set1.symmetric_difference(set2))

s = {"pravesh", "ankit", "mohit", "anand"}

for name in s:
    if 'a' in name:
        print(name)



s = {"pravesh", "ankit", "anand"}

common = set.intersection(*[set(name) for name in s])
print(common)


