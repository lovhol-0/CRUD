const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Password",
    database: "bothniadb", 
});

app.get("/images", (req, res) => {
    db.query("SELECT id, category, to_base64(img) as img FROM images_test", (err, result) => {
        if (err) {
            console.log(err);
        } else {

            console.log(result);
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
        res.send({err:err});
        } 
            if (result) {
                res.send(result)
            } else {
                res.send({message: "Felaktigt email/lösenord!"});

            }
        }
        
    );
})

app.post('login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [email, password],
        (err, result) => {
            console.log(err);
        }
    )
});



app.listen(3003, ()=> {
    console.log("Server is running on port 3003")
});
