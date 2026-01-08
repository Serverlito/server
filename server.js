const express = require('express');
const mysql = require('mysql2');

const app = express();
let port = 443;

const connectdb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dell@mysql',
    database: 'user_db'
});

app.listen(port, () => {
    console.log("Server running on port "+port)
});

connectdb.connect((err) => {
    if(err){
        console.error("Not Connected!");
        return;
    }else{
        console.log("Connected!")
    }

})