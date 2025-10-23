def reverse_num(n):
    return int(str(n)[::-1])

n = int(input())
for _ in range(n):
    a, b = map(int, input().split())
    rev_sum = reverse_num(reverse_num(a) + reverse_num(b))
    print(rev_sum)
