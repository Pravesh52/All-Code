def print_name(name):
    """this function prints the name """
    
    print("hello "+str(name))

print_name("Pravesh")


def get_sum(lst):
    """ this function return the sum of all the elements in a list  """

    _sum=0
    for num in lst:
        _sum+=num
    return _sum
s=get_sum([1,2,3,4,5,6])
print(s)
print(get_sum.__doc__)



def hcf(a,b):
    while(b!=0):
        temp=b
        b=a%b
        a=temp
    return a

def lcm(a,b):
    gcd=hcf(a,b)
    return(a//gcd)*b
a=int(input(" first number: "))
b=int(input("second number: "))
print(f"Hcf of {a} and {b} "+str(hcf(a,b)))
print(f"lcm of {a} and {b} "+str(lcm(a,b)))



