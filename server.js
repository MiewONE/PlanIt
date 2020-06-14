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

// app.get('/api/members/12',upload.single(),(req,res)=>{
//     console.log("12"+req)
//     console.log('view');
//     connection.query(
//       "SELECT * FROM members" ,
//       (err,rows,fields)=>{
//           res.send(rows);
//       }
//     );
// });
app.post('/api/members/14',upload.single(),(req,res)=>{

    // let _DATE =req.body.g_DATE;

    // console.log('view14');
    //  console.log(req);
     let mon = req.body._month;
     mon=mon<10?"0"+mon:mon;
     let Dt = req.body._year +"-"+mon+"-"+req.body._day
     console.log("14에서받음"+Dt);
     let sql = "SELECT * FROM members where _DATE ='?'";
    connection.query(
       sql,Dt,(err,rows,fields)=>{
        app.get('/api/members/15',(req,res)=>{
            res.send(rows);
            console.log("15에서"+rows);
        });
        // console.log(rows);
      }
    );
});

connection.query(sql,params,
    (err,rows,fields)=>{
        res.send(rows);
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
    
    // let Type =req.body.TYPE;
    // console.log(Type);
    // if(Type=="INSERT")
    // {
        let sql = 'INSERT INTO members VALUES (?,null,?,?,?,?)';
        let _DATE =req.body.g_DATE;
        let NAME =req.body.NAME;
        let joinMem =req.body.joinMem;
        let teamName =req.body.teamName;
        let _time =req.body.g_time;


        let params=[_DATE,NAME,joinMem,teamName,_time];
        connection.query(sql,params,
            (err,rows,fields)=>{
                res.send(rows);
            });
    // }else{
        
    //     let sql ="SELECT * FROM members WHERE _DATE = ?";
    //     let Dt = req.body.Dt;
    //     console.log("받은거"+Dt);
    //     connection.query(sql,Dt,
    //         (err,rows,fields)=>{
    //             res.send(rows);
    //             // console.log(rows);
    //         });
    // }
    
    
    
});


app.listen(port,() => console.log(`Listening on port ${port}`));
//파일 올리기 multer npm