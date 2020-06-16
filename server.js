const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
var _date = '';
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

app.get('/api/members/',(req,res)=>{
    connection.query(
      "SELECT * FROM members order by _time;" ,
      (err,rows,fields)=>{
          res.send(rows);
      }
    );
});

app.post('/api/members',upload.single(),(req,res)=>{
    
    // let Type =req.body.TYPE;
    // //console.log(Type);
    // if(Type=="INSERT")
    // {
        let sql = 'INSERT INTO members VALUES (?,null,?,?,?,?,now())';
        let _DATE =req.body.g_DATE;
        let NAME =req.body.NAME;
        let joinMem =req.body.joinMem;
        let teamName =req.body.teamName;
        let _time =req.body.g_time;

        if(_DATE==""||NAME==""||joinMem==""||teamName==""||_time=="")
        {
            console.log("empty value input");
            return 0;
        }
        // if(teamName!=)
        let params=[_DATE,NAME,joinMem,teamName,_time];
        connection.query(sql,params,
            (err,rows,fields)=>{
                res.send(rows);
            });
    // }else{
        
    //     let sql ="SELECT * FROM members WHERE _DATE = ?";
    //     let Dt = req.body.Dt;
    //     //console.log("받은거"+Dt);
    //     connection.query(sql,Dt,
    //         (err,rows,fields)=>{
    //             res.send(rows);
    //             // //console.log(rows);
    //         });
    // }
    
    
    
});


app.listen(port,() => console.log(`Listening on port ${port}`));
//파일 올리기 multer npm