T = int(input())
for _ in range(T):
    N = int(input())
    max_leftover = -1
    best_size = 1
    for size in range(1, N + 1):
        leftover = N % size
        if leftover >= max_leftover:
            max_leftover = leftover
            best_size = size
    print(best_size)
