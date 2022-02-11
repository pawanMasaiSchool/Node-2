const fs = require("fs");

fs.readFile("./hello.txt",(err,content)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(content.toString());
})