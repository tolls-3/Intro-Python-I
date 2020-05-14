# Print "Hello, world!" to your terminal
print('Hello, world!')


def mul(l):
    for i in range(len(l)):
        l[i] *= 2


lst = [2, 4, 6, 8]
mul(lst)
print(lst)
