const fs = require("fs");

console.log("starting");

fs.writeFile("first.html", "i am a good boy hey my name is waqar abbas", () => {
  console.log("file done");
  fs.readFile("first.html", (error, data) => {
    console.log(error, data.toString());
  });
});

fs.appendFile("first.html" ,  " this is last adding" , (e , d)=>{
    console.log(d);
} )

console.log("ending");
