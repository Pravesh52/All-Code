# empty dictionery
my_dict={}

my_dict={1:'abc',2:'xyz'}
print(my_dict)

# dictionery with mixed key
my_dict={'name':'satish',1:['abc','xyz']}
print(my_dict)

# create empty dictionary using dict()
my_dict=dict()

my_dict=dict([(1,'abc'),(2,'xyz')])
print(my_dict)

# Dict access

my_dict={'name':'satish','age':27,'address':'guntar'}
# get name
print(my_dict['name'])

# replace 
my_dict['name']='raju'
print(my_dict)

# add new key
my_dict['degree']='B.teach'
print(my_dict)

my_dict.popitem()
print(my_dict)