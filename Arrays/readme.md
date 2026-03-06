Step 8 - Arrays in TS

if you want to access arrays in typescript, it's as simple as adding a [] annotation next to type

example 1
Give an array of positive integers as input, return the maximum value in the array

```bash
function maxValue(arr: number[]){
    let max = 0
    for(let  i = 0 ; i < arr.length ; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

maxValue[1,2,3]
```