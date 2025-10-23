N = int(input())

for _ in range(N):
    SH, SM, EH, EM = map(int, input().split())
    
    start_total = SH * 60 + SM
    end_total = EH * 60 + EM
    
    duration = end_total - start_total
    hours = duration // 60
    minutes = duration % 60
    
    print(hours, minutes)
