Step 7 - Types

what are types?
- very similar to interfaces, types let you aggregate data together
```bash
type User = {
    firstName: string
    lastName: string
    age: number
}

interface User2 {
    firstName: string
    lastName: string
    age: number
}
```



1. Unions

lets say you want to print the id of a user which can be a number or a string

```bash
type StringOrNumber = string | number

function greet(id: StringOrNumber){

}
greet(1)
greet(Harsh)
```

2. InterSection

what if you want to create a type that has every property of multiple types/ interface

```bash
type Employee = {
    name: String
    startDate: Date
}

interface Manager{
    name: String
    department: String
}

type techlead = Employee & Manager

type techllead = {
    name: String
    department: string
    startDate: Date
}
```
// what is the difference between interface and a type?
// interfaces can be extend into a class
// type lets you do ors ands unions and intersection