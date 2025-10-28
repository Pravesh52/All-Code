# Simple Calculator Program in Python

while True:
    print("\n----- Simple Calculator -----")
    print("Select the operation you want to perform:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("5. Exit")

    choice = input("Enter your choice (1/2/3/4/5): ")

    if choice == '5':
        print("Exiting the calculator. Thank you!")
        break
    if choice in ('1', '2', '3', '4'):
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        if choice == '1':
            print(f"Result: {num1} + {num2} = {num1 + num2}")
        elif choice == '2':
            print(f"Result: {num1} - {num2} = {num1 - num2}")
        elif choice == '3':
            print(f"Result: {num1} * {num2} = {num1 * num2}")
        elif choice == '4':
            if num2 != 0:
                print(f"Result: {num1} / {num2} = {num1 / num2}")
            else:
                print("Error! Division by zero is not allowed.")
    else:
        print("Invalid input! Please enter a number between 1 to 5.")

    # Ask user if they want to continue
    cont = input("\nPress 'y' to continue or any other key to exit: ")
    if cont.lower() != 'y':
        print("Exiting the calculator. Goodbye!")
        break
