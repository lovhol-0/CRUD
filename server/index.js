const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());


/*
Fil för databas-kopplingen
Detta är våran server-del. Här sköts allt som har med att skicka eller ta emot data 
från vår MySql-databas "bothniadb". 
Ex. Logga in, registrera konto och bildsökning.

*/

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "bothniadb", 
});

// app.get("/images", (req, res) => {
//     db.query("SELECT id, category, to_base64(img) as img FROM images_test", (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {

//             console.log(result);
//             res.send(result);
//         }
//     });
// });

app.put("/imagesID", (req, res) => {
    const category = req.body.category;
    db.query("SELECT imageID, category, price, to_base64(img) as img FROM images WHERE category LIKE ?", 
    ["%" + category + "%"],
     (err, result) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(result);
            res.send(result);
        }
    });
});

app.post('/register', (req, res)=>{

    const fName = req.body.fName
    const lName = req.body.lName
    const address = req.body.address
    const email = req.body.email
    const password = req.body.password

    db.query("INSERT INTO bothniadb.customer (fName, lName, billingAddress, email, password) VALUES (?, ?, ?, ?, ?)",
        [fName, lName, address, email, password],
      (err, result)=> {
      
       if (err) {
           console.log(err);
           res.send({message: "Något gick fel med registreringen"});
       }
       if (result.data != 0){
        res.send(data);
        } 
        } 
        
    );
})

app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    
    db.query(
        "SELECT * FROM bothniadb.customer WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
           if (err) {
               res.send({err: err});
           }
           if (result.length > 0) {
               res.send(result);
           } else {
               res.send({message: "Felaktigt email/lösenord!"});
           }
        }
    )
});

app.listen(3003, ()=> {
    console.log("Server is running on port 3003")
});
