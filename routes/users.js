const express = require('express');
const router = express.Router();


/////// Router
router.get('/', (req, res) => {
  res.send('User Page');
});

router.get('/default', (req, res) => {
  res.send('User Default Page');
});

// Making Dynamic Router, For different URL.
router.get('/all/:id', (req, res) => {
  let data = req.params.id; //Requset the id givne in url. It should be same as the URL path
  res.send(`Get User with ID${data}`);
});

// get, put and delete pattern is very common, so express created another method
// callled route. This method allow us to stack all three in same function.

router
  .route('/new/:id')
  .get((req, res) => {
    let data = req.params.id;
    res.send(`Get User with ID${data}`);
  })
  .put((req, res) => {
    let data = req.params.id;
    res.send(`Update User with ID${data}`);
  })
  .delete((req, res) => {
    let data = req.params.id;
    res.send(`Delete User with ID${data}`);
  });

const namesUser = [{firstName:"Daniyal" , lastName:"Ahmed"}]

//next function is, if param function is called run the NEXT thing in line.
  // This function will run everytime it finds the parameter in the url.
  router.param("id",(req,res,next,id)=>{
    console.log(id);
    next() //Will go to the next piece of code that will be executed in the given url.  
  })


  
module.exports = router;
