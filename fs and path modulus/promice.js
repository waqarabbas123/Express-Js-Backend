import fs from "fs/promises"

let a = await fs.readFile("first.html")

let b = await fs.appendFile("first.html" , "\n\n\n\n this is amazing promise")
console.log(a.toString() , b);
