const http = require("http");
const https = require("https");
const fs = require("fs");

const PORT = 3000;

const myServer = http.createServer((request,response)=>{
    try{
        if(request.method === "GET" && request.url === "/"){
            handleHomePage(response);
        }
        else if(request.method === "GET" && request.url === "/users/1"){
            getUserPage(response,1);
        }
        else if(request.method === "GET" && request.url === "/users/2"){
            getUserPage(response,2);
        }
        else if(request.method === "GET" && request.url === "/users/3"){
            getUserPage(response,3);
        }
        
        else{
            response.writeHead(404,"FAILED");
            response.end("err");
            console.log(err);
        }
    }
    catch(err){
        response.writeHead(404,"FAILED");
        response.end(err);
        console.log(err);
    }
})

const getUserPage = (res,id)=>{
    fs.readFile(__dirname + "/template/user.html","utf8",(err,htmlData)=>{
        if(err){
            console.log(err);
            return;
        }
        
        let userTemplate = htmlData;
        https.get(`https://reqres.in/api/users/${id}`,"utf8",(fetchedRes)=>{
            let data = '';
            fetchedRes.on("data",(chunky)=>{
                data+=chunky;
            })

            fetchedRes.on("end",()=>{
                data = JSON.parse(data.toString());
                let opstions = {
                    "titlePage": data.data.first_name,
                    "username": data.data.first_name + data.data.last_name,
                    "image_source":data.data.avatar,
                    "email":data.data.email
                }
                for(let key in opstions){
                    userTemplate = userTemplate.replace(`{${key}}`,opstions[key])
                }
                res.writeHead(200);
                res.end(userTemplate);
            })

            
        })
    })
}

const handleHomePage = (res) => {
    fs.readFile(__dirname + "/template/index.html","utf8",(err,htmlData)=>{
        if(err){
            console.log(err);
            return;
        }
        
        let data = htmlData;
        let options = {
            "pageTitle":"Pawan",
            "titleName": "Pawan",
            "description": "Full Stack Developer"
        }

        for(let key in options){
            data = data.replace(`{${key}}`,options[key])
        }
        res.writeHead(200,"OK");
        res.end(data);
        console.log(data);
    })
}

myServer.listen(PORT,()=>{
    console.log(`Listening at ${PORT} port`);
})