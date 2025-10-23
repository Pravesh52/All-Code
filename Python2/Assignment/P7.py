amount = int(input("Enter the amount: "))
denominations = list(map(int, input("Enter available denominations separated by space: ").split()))

denominations.sort(reverse=True) 

for note in denominations:
    num_notes = amount // note
    amount = amount % note
    print(f"{note} rupees note: {num_notes}")
