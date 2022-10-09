//Datatype 1: Number

let num1=12
let num2=12.34

console.log(num1+num2)
 //Datatype 2: Sting

 str1="Rhitika"
 console.log(str1)

 //datatype 3:boolean

 let bool1= 4<1
 console.log(bool1)

 let val2= 1234n
 console.log(typeof(val2))

 //obj
 let obj1= { name:"Rhitika",
 surname:"Adhikari"
}
console.log(typeof(obj1))

//variabl2 
let a=1

switch(a){
    case a:
        console.log("true")
        break
    case b:
        console.log("fasle")
        break
    default:
        console.log("Not a value")
}


//function in js
let myName="rhitika"
function showName(myName){
    console.log(myName)
}

showName(myName)


let showName2=function(myName){
    //...
}
let sumArray=(nums) => {
    let sum = 0
    for(let i=0; i<nums.length;i++){
        sum +=nums[i]
    }
    return sum
}
console.log(sumArray([1,2,3,4]))

//objects

let obg2={
    firstName:"rhitika",
    age:22
}