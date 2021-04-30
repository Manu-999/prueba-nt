const express = require('express');
const app = express();
const cors = require('cors')()
const PORT = process.env.PORT || 3000;
require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors);


app.listen(PORT, console.log(`Server running on ${PORT}`));