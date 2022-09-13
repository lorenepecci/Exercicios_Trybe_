""" Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2. """

mylist = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

def minimum(numbers):
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller

def maximun(numbers):
  listSorted = numbers.sort()
  return listSorted[0]


print(minimum(mylist)) 
print(maximun(mylist))
