//Server Lives here

//create a reference to the express module and store a pointer to express module in 
//express variable
let express  = require('express');

//create an instance of the connect server
let app = express();

//port address
const port = 3000;
//listen for request on specific port
app.listen(port);
console.log(`Server Listening at http://localhost/${port}`);

//Routing - Mount Different Routes
app.use('/hello', (req, res, next) => {
res.end("Hello World");
next();
});
//Wild card/Default Page
app.use('/', (req, res, next) => {
res.end("Welcome");
next();
});

//test commento