const express = require('express');

const cors = require('cors');

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const router = require('./server/config/router.js')(app)

// app.use(router)

//exponemos el servidor en el la ip:puerto requerido
app.listen(8000, function () {
    console.log('servidor ejecutandose en http://localhost:8000');
});