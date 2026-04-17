def is_balanced(s):
    s = s.replace(" ", "").lower()
    
    if len(s) % 2 == 1:
        s2 = s[(len(s) // 2) + 1:]

    else:
        s2 = s[len(s) // 2:]


    s1 = s[:len(s) // 2]

    vowels = ["a", "e", "i", "o", "u"]

    # print(s1)
    # print(s2)

    n1 = 0
    n2 = 0

    for char in s1:
        if char in vowels:
            n1 += 1
        else:
            continue
    # print(n1)
    
    for char in s2:
        if char in vowels:
            n2 += 1
        else:
            continue
    # print(n2)

    # print(n1 == n2)

    return n1 == n2

# print(is_balanced("Lorem Ipsum"))