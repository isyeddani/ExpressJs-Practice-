const express = require('express');
const app = express();

//Telling application to use View Engine
app.set('view engine', 'ejs');

const userRouter = require('./routes/users'); // Import the router just created
app.use('/user', userRouter);

app.listen(3000);

// // app.use(logger);
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


// // Serving out static files.
// // Using Middleware.
// app.use(express.static('public')); // express.static() takes the folder in which the render file is
// // It will render all files inside public folder.


// // Middleware Function 
// // Every Middleware function takes a request response and next
// function logger(req, res, next) {
//   console.log(req.originalUrl); // will just display the URl of the request
//   next();
// }

// app.get("/dan",logger,(req, res) => {
//     console.log("Logger Function")
//     res.send("Logger Function")
// })



