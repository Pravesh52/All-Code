N = int(input())
for _ in range(N):
    a, b = map(int, input().split())
    if a < b:
        result = sum(range(a, b))
    else:
        result = a
    print(result)
