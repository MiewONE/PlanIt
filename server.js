const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));


const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');


const multer = require('multer');
const upload = multer({dest: './upload'})

const connection = mysql.createConnection({
    host: conf.host,
    user:conf.user,
    password:conf.password,
    port:conf.port,
    database : conf.database
});
connection.connect();

app.get('/api/members',(req,res)=>{
    let Dt = req.body.DT;
    // let sql = "SELECT * FROM MEMBERS WHERE _DATE = ?;"
    // let _DATE = req.body.g_DATE;

    // connection.createQuery(sql,_DATE,
    //     (err,rows,fields) => {
    //         res.send(rows);
    //     });
    connection.query(
      "SELECT * FROM members" ,
      (err,rows,fields)=>{
          res.send(rows);
      }
    );
});

// app.post('/api/members',(req,res)=>{
//     let sql = "INSERT INTO members VALUE (?,null,?,?,?,?)";

//     let _DATE =req.body.g_DATE;
//     let NAME =req.body.NAME;
//     let joinMem =req.body.joinMem;
//     let teamName =req.body.teamName;
//     let _time =req.body.g_time;

//     let params=[_DATE,NAME,joinMem,teamName,_time];
//     connection.createQuery(sql,params,
//         (err,rows,fields) =>{
//             res.send(rows);
//         });
//     }
// app.post('/api/members',function(req,res) {
//     let t = req.body.NAME;
//     console.log(req.body.teamName);
// })


app.post('/api/members',upload.single(),(req,res)=>{
    
    
    let sql = 'INSERT INTO members VALUES (?,null,?,?,?,?)';
    let _DATE =req.body.g_DATE;
    let NAME =req.body.NAME;
    let joinMem =req.body.joinMem;
    let teamName =req.body.teamName;
    let _time =req.body.g_time;

    console.log(_DATE);
    console.log(NAME);
    console.log(joinMem);
    console.log(teamName);
    console.log(_time);
    console.log('외안뒈?');

    let params=[_DATE,NAME,joinMem,teamName,_time];
    connection.query(sql,params,
        (err,rows,fields)=>{
            res.send(rows);
        });
});


app.listen(port,() => console.log(`Listening on port ${port}`));
//파일 올리기 multer npm