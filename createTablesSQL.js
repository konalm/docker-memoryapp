var express = require('express'); 
var app = express();
var mysql = require('mysql');
var db_details = require('./DBDetails.js'); 
var dbd_host = db_details.host_get();
var dbd_user = db_details.host_get();
var dbd_passw = db_details.password_get();
var dbd_db = db_details.db_get(); 


var conn = mysql.createConnection({
    host : dbd_host,
    user : dbd_user,
    password : dbd_passw,
    database : dbd_db
}); 

 
conn.connect(function(err) {
    if (!err) {
        console.log("connection successful"); 
    } else {
        console.log('error connecting'); 
    }
});

    
console.log("Create Table Request"); 

var accounts_table = 'CREATE TABLE Accounts (Account_id int, First_name VARCHAR(100),' +
                        'Last_name VARCHAR(100), Email VARCHAR(100), password VARCHAR(255), PRIMARY KEY(Account_id) )';
                    
var pp_table= "CREATE TABLE ProfilePics (Account_id int, Email VARCHAR(100), ProfilePicPath VARCHAR(255)," +
                    "PRIMARY KEY(Account_id) )";

var memories_table = "CREATE TABLE Memories (Account_id int, Email VARCHAR(100), Memory VARCHAR(255)," +
                    "PRIMARY KEY(Account_id) )";

var photos_table = "CREATE TABLE Photos (id int, Email VARCHAR(100), Memory VARCHAR(100), Photo VARCHAR(100)," +
                        "PRIMARY KEY(id) )";

conn.query(accounts_table, function(err, result) {
    if (err) {
        console.log(err); 
    //     res.send("Error creating Accounts table");
    }  else {
        console.log("Accounts table created");
    }
}); 
conn.query(pp_table, function(err, result) {
    if (err) {
        console.log(err); 
    //      res.send("Error creating PP table"); 
    } else {
        console.log("PP table created");
    }
});
conn.query(memories_table, function(err, result) {
    if (err) {
        console.log(err); 
    //     res.send("Error creating memories table"); 
    } else {
        console.log("memories table created");
    }
});
conn.query(photos_table, function(err, result) {
    if (err) {
        console.log(err); 
    //    res.send("Error creating photos table"); 
    } else {
        console.log("photos table created");
    }
    conn.end();
});

/*
console.log("listening at port 8080"); 
app.listen(8080); 
*/ 