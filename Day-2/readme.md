Step 4 - Basic Types in TypeScript

Typescript provides you some basic types: 
- number, string, boolean, null, undefined.

Let's create some simple application using these types.

problem 1 - Hello World

write a function that greets a user given their first name
Argument - firstName
Logs - Hello {firstName}


problem 2 - Sum function

write a function that calculates the sum of 2 functions
```bash
// type inference
function sum(a: number, b: number): number {
  return a + b;
}

const value = sum(1,2)
console.log(value)
```

problem 3 - Return True or false based on if a user is 18+

```bash
// type inference
function isLegal(age: number) {
    if (age>18){
        return true
    }else{
        return false
    }
}

// string, number, boolean
let x = isLegal(18)
console.log(x)
```

Problem 4 - Create a function that takes another function as an input and runs its after 1 second
```bash
function runafter1s(fn: () => void){
    setTimeout(fn, 1000)
}

runafter1s(function(){
    console.log("hello")
})
```