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
    password: "MyNewPass",
    database: "bothniadb", 
});

app.post('/laddaupp', (req, res)=>{
    const img = req.body.img;
    db.query("INSERT INTO images (img, category) VALUES (?, ?)",
    [img, "upload"],
    (err, result)=> {
        console.log(err);
    });
})

app.put("/imagesID", (req, res) => {
    const category = req.body.category;
    db.query("SELECT price, fileSize, format, description, category, resolution, aspectRatio, locationTaken, dateTaken, photographer, to_base64(img) as img FROM images WHERE category LIKE ?", 
    ["%" + category + "%"],
     (err, result) => {
        if (err) {
            console.log(err);
        } else {
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
        console.log(err);
        res.send(result.data);
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
