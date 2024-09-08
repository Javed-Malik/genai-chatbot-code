const express = require("express")
const app = express()

let port = 8080;

app.listen(port,()=>{
    console.log(`app is listing on port No.${port}`);
})

// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params);
//     let {username,id}= req.params
//     res.send(`welcome to ${username}`)
// })

// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params);
//     let {username,id}= req.params
//     res.send(`welcome to ${username}`)
// })

app.get("/:username/:id",(req,res)=>{

    let {username, id}= req.params
    res.send(`<h1> Welcome to ${username}</h1> <h3>this is h3</h3>`)
})


app.get("/search",(req,res)=>{
    let {q}= req.query
    console.log(req.query)
    res.send(`you search for :${q}`)
})


// app.get("/",(req,res)=>{
//     res.send("you connected to root pat again")
// })

// app.get("/green",(req,res)=>{
//     res.send("you conncted to green path")
// })

// app.get("/orange",(req,res)=>{
//     res.send("you connected to orange path")
// })

// app.get("*",(req,res)=>{
//     res.send("This path does not exist")
// })

// app.post("/",(req,res)=>{
//     res.send("you send a post request to root")
// });

// app.use((req,res) =>{
//     // console.log(req);
    
//     console.log("request received");
//     res.send("<h1> Apple</h1><ul><li>fruit</li><li>green</li><li>red</li></ul>"

//     )
    
// })