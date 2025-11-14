# O. Calculator
exp = input()
num1 = ""
num2 = ""
op = ""
idx = 0
while idx < len(exp) and exp[idx].isdigit():
    num1 += exp[idx]
    idx += 1
op = exp[idx]
idx += 1
while idx < len(exp):
    num2 += exp[idx]
    idx += 1
num1 = int(num1)
num2 = int(num2)
if op == "+":
    print(num1 + num2)
elif op == "-":
    print(num1 - num2)
elif op == "*":
    print(num1 * num2)
elif op == "/":
    print(num1 // num2)