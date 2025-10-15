def double(x):
    return x * 2

def squared(x):
    return x ** 2
q = squared
print(q(5)) 
if __name__ == "__main__":
    funcs = [double, squared] * 5
    for func, number in zip(funcs, range(1, 11)):
        print(f"{func.__name__}({number}) = {func(number)}")