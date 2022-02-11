const fs = require("fs");

fs.writeFileSync("./name.txt","Pawan Sukhwani",(err)=>{
    if(err){
        console.log(err);

    }
    console.log("Wrote to the file");
    
});

fs.mkdirSync("./meta",{recursive:true},(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Directory Created");
})

fs.renameSync("./name.txt","./meta/my_name.txt",(err)=>{
    if(err) {
        console.log(err); 
        return;
    }
    console.log("Rename done");
})