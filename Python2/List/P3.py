# lst = [2, 3, 2, 4, 3, 5, 5]
# newlst = []
# for i in lst:
#     if i not in newlst:
#         newlst.append(i)
# print(newlst)



# lst = [2, 3, 2, 4, 3, 5, 5]
# target = 10
# for i in range(len(lst)):
#     for j in range(i + 1, len(lst)):
#         if lst[i] + lst[j] == target:
#             print([i], [j])


# running sum


# a=[1,2,3,4]
# runningsum = []
# total = 0
# for i in a:
#     total += i
#     runningsum.append(total)
# print(runningsum)



a = [1, 0, 2, 3]

result = [x for x in a if x != 0]

result += [0] * (len(a) - len(result))

print(result)





