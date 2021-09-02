const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("express");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// connect db
mongoose.connect("mongodb://localhost/tugasAkhir");
const db = mongoose.connection;

const port = 8000;

const apiRouter = require("./api-routes");

app.get('/', (req, res) => {
    res.send("Selamat datang di admin data mahasiswa")
});

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log("Server is running at $(port)")
})