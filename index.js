const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config();

app.listen(process.env.PORT_PC, () => 
    console.log(`Connect in the port_PC ${process.env.PORT_PC}`)
);
