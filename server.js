const mysql = require('mysql');  
const express = require('express');  
var app = express();  
const bodyparser = require('body-parser');  
  
// Used for sending the Json Data to Node API  
app.use(bodyparser.json());  
  
// Connection String to Database  
var mysqlConnection = mysql.createConnection({  
    host: 'pei17y9c5bpuh987.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',  
    user : 'qibsqu7x74a78uup',  
    password : 'sacbfcmca5ue1kpb',   
    database : 'f7e1eqygyek2n07e',  
    multipleStatements : true  
});  
  
// To check whether the connection is succeed for Failed while running the project in console.  
mysqlConnection.connect((err) => {  
    if(!err) {  
        console.log("Db Connection Succeed");  
    }  
    else{  
        console.log("Db connect Failed \n Error :" + JSON.stringify(err,undefined,2));  
    }  
});  
  
// To Run the server with Port Number  
app.listen(3000,()=> console.log("Express server is running at port no : 3000"));  
  
// CRUD Methods  
//Get all Employees  
app.get('/data',(req,res)=>{  
    mysqlConnection.query('SELECT * FROM Data',(err,rows,fields)=>{  
    if(!err)   
    res.send(rows);  
    else  
        console.log(err);  
      
})  
});  

app.get('/',(req,res)=>{
    console.log("oklay")
    res.send('no response')
})
  
