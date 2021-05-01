const express = require('express');
const app = express();
const cors = require('cors')()
const PORT = process.env.PORT || 3001;
require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors);

//Routes
const getPoliticians = require('./routes/getPoliticians');
const createPolitician = require('./routes/createPolitician');

// Routes Middlewares
app.use('/', getPoliticians);
app.use('/', createPolitician);

app.listen(PORT, console.log(`Server running on ${PORT}`));