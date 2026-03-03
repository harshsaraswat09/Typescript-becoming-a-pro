## STEP 6 - Interfaces

1.what are interfaces

how can you assign types to object? for example, a user object that looks like this -
```bash
const user = {
    firstName: "Harsh",
    lastName: "Saraswat",
    email: "email@gmail.com",
    age: 21,
}
```
to assign a type to the user object you can use interface
```bash
interface user {
    firstName: String,
    lastName: String,
    email: String,
    age: number,
}
```

example:
```bash
interface User {
    firstName: String;
    lastName: String
    email: string
    age: number
}

function isLegal(user: User){
    if (user.age > 18){
        return true
    }else{
        return false
    }
}

isLegal({
    firstName: "Harsh",
    lastName: "Saraswat",
    email: "email@gmail.com",
    age: 21,
})
```