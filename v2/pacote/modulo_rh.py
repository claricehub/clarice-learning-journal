print(f"imported of {__name__}")


import csv
with  open("pessoas.csv", "r") as cod:
    for people in csv.reader(cod):
        print("name: {} age: {}".format(*people))