//colors = ['red','green']

//colors.forEach((item, index)=>{console.log(item, index)})

//function callback(index, value, list)
//a = forEach(array, callback)
//console.log(a)
//parctice 1
function callback(error, result){
    if(error){
        console.log(`Error: ${error.message}`)
    }else{
        console.log(result)
    }
}
function multiplier(number1, number2, callback){
    if (typeof(number1) !== "number"  || typeof(number1) !== "number"){
        number1 = parseInt(number1)
        number2 = parseInt(number2)
        error = new Error("Enter numbers")
        result = null
        callback(error,result)
    }else{
        result = parseInt(number1)*parseInt(number2)
        callback(null, result)
    }
}
multiplier('sim',3.4,callback)
