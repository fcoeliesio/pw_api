require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const "requrer rotas"

const app = express();

const PORT = process.env.PORT;
const PASSWORD = process.env.PASSWORD;
const AAP_NAME = process.env.AAP_NAME;
const DB_URL = `mongodb+srv://padim:${PASSWORD}@padimfood.0umakns.mongodb.net`;

app.use(express.json());

mongoose.connect(DB_URL,{retryWrites: true, w: 'majority', appName: AAP_NAME});

// app.use('/api', foodRouter);

app.listen(PORT, ()=>{
  console.log(`Servidor iniciado na porta ${PORT}`);
});