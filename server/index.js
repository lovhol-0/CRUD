const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "MyNewPass",
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

app.listen(3003, ()=> {
    console.log("Server is running on port 3003")
});
