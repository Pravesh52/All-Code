# P1.Area of the square wire
import math

r = 42
angle = 60
length = (angle / 360) * 2 * math.pi * r
side = length / 4
area = side ** 2
print("Area of square =", round(area, 2))
