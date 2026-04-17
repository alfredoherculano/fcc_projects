def is_valid_number(n, base):

    digits = "0123456789abcdefghijklmnopqrstuvwxyz"

    valid_digits = digits[:base]

    return all(char in valid_digits for char in n.lower())
    
print(is_valid_number("10101", 2))