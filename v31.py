from v3 import double, squared

def loading(title, list, function):
    print(f"loading: {title}")
    for i in list:
        print(i, "=>", function(i))

if __name__ == "__main__":
    loading("dobro", range(1, 6), double)
    loading("quadrado", range(6, 11),squared)
