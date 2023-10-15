const {distanceFunc} = require("./anotherFolder")
const process = require("process")
const fs = require("fs")

function processInput(userInput){
    fs.mkdir('dataPoints', {recursive: true}, (err) => {
        if(err){
            return console.log(err)
        }
        console.log("Directory created successfully!")
        fs.writeFile('dataPoints/points.txt', userInput.join(','), (err) => {
            if(err){
                return console.log(err)
            }
            console.log("Content saved")
            let calculatedDistance = distanceFunc(userInput[0], userInput[1], userInput[2], userInput[3])
            fs.appendFile('dataPoints/points.txt', `\nThe distance between your two points: (${userInput[0]}, ${userInput[1]}), (${userInput[2]}, ${userInput[3]}) is ${calculatedDistance}`, (err) => {
                if(err){
                    return console.log(err)
                }
                console.log("appended content")
            })
        })
    })

}

userData = process.argv.slice(2)

processInput(userData)