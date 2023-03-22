const express = require ('express')
const app = express();

//Telling application to use View Engine
app.set("view engine", "ejs")

// // First parameter is root path
// // Second parameter is the function, in function
// // Request, Response, next
// app.get("/",(req,res)=>{
//     console.log("Here")
//     // res.send("Hello World!") // will not use very offten just to for checking purpose.
//     // res.sendStatus(500) // Send to display error, (check:HTTP status code) .
//     // res.status(500).send("Hi")
//     // res.status(500).json({message:"Error"}) //Use to send to complete json code to page.
//     res.download('file.txt') // Allow user to download file. 
    
    
//     //Use to render the page using the html file.
//     // res.render("index") // For this view engine is required. To install library npm i ejs another(popular) is pug
//     // second parameter will render the data send.
//     res.render ("index", {data:"Daniyal"}) 
// } )

const userRouter = require("./routes/users")  // Import the router just created
app.use("/user",userRouter) 

app.listen(3000);
    