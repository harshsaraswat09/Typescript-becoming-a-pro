function runafter1s(fn: () => void){
    setTimeout(fn, 1000)
}

runafter1s(function(){
    console.log("hello")
})