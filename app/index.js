const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});

//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

//show all users
app.get('/api/users',(req, res) => {
  let sql = "SELECT * FROM users";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//show single users
app.get('/api/users/:id',(req, res) => {
  let sql = "SELECT * FROM users WHERE ID="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//add new users
app.post('/api/users',(req, res) => {
  let data = {ID: req.body.ID, Name: req.body.Name, Age:req.body.Age, Department:req.body.Department, Subject:req.body.Subject};
  let sql = "INSERT INTO users SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//update users
app.put('/api/users/:id',(req, res) => {
  let sql = "UPDATE users SET Name='"+req.body.Name+"', Age='"+req.body.Age+"', Department='"+req.body.Department+"', Subject='"+req.body.Subject+"' WHERE ID="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Delete users
app.delete('/api/users/:id',(req, res) => {
  let sql = "DELETE FROM users WHERE ID="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Server listening
app.listen(8080,() =>{
  console.log('Server started on port 8080...');
});
