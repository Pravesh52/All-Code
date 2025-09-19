# #check palindrome
# text="madam"
# text="Ankit"
# is_palindrome=True
# for i in range(len(text)//2):
#     if text[i] != text[-(i+1)]:
#         is_palindrome=False
#         break
# if is_palindrome:
#     print(f"'{text}'is a palindrome")
# else:
#     print(f"'{text}'is not a palindrome")

# #word count
# sentence="i am a good boy"
# count=0
# word= ""
# for ch in sentence +" ":
#     if ch!=" ":
#         word+=ch
# else:
#     if word != "":
#         count+=1
#         word=""
# print(f"the sentence has {count} words")

# #armstrong number check
# num=153
# power = len(str(num))
# total =0
# for digits in str(num):
#   total += int(digits)**power
# print(num,"is an armstrong?",total == num)

# #triangle pattern using number
rows=5
for i in range(1,rows+1):
    for j in range(1,i+1):
        print(j,end="")
    print()


    





       