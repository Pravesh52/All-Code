# P3.John and his Series

a = int(input("Enter the first term (a): "))
d = int(input("Enter the common difference (d): "))
n = int(input("Enter the number of terms (n): "))

nth_term = a + (n - 1) * d
sum_n = (n / 2) * (2 * a + (n - 1) * d)

print("Nth term of the series:", nth_term)
print("Sum up to n terms:", sum_n)
