//file system

const fs = require("fs")

//fs.readFile(path, options, callback)
//callback is just a function that you pass into another function
fs.readFile('demo2.txt','utf8',(err,data)=> {
    console.log(err,data)
}
)
//fs.readFile() is asynchronous —
//that means it doesn’t wait for the file to finish reading before moving on.

console.log("file reading finished")
//ye phle run hojayega bcz read hote hote fs.readFile will move ahead

//use readFileSync for this if u want to print the file first

const a = fs.readFileSync('demo2.txt')
console.log(a.toString())

console.log("finished reading")

//when you select a particular part of a code and run that then there will be formation of a new file called tempCodeRunnerFile

//writing in a file

fs.writeFile('demo2.txt',"this is a text file", () => {
    console.log("written to the file")
})

console.log("finished writing")

//AGAIN FOR PRINTING THE CALLBACK FIRST WE NEED TO USE writeFileSync
//**fs.writeFileSync()** is synchronous, meaning it does not take a callback function.

const b = fs.writeFileSync('demo2.txt', 'this is a text file')

console.log(b)

console.log("finished writing in file")


