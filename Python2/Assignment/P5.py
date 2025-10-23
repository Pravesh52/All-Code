# P5.Bit Operations

val = 0xCAFE


last4 = val & 0xF
count = bin(last4).count('1')
if count >= 3:
    print("At least three of the last four bits are ON")
else:
    print("Less than three of the last four bits are ON")


reverse = ((val & 0xFF) << 8) | ((val >> 8) & 0xFF)
print("Value after reversing byte order: 0x%X" % reverse)


rotate = ((val << 4) | (val >> 12)) & 0xFFFF
print("Value after rotating 4 bits left: 0x%X" % rotate)
