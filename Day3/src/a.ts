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