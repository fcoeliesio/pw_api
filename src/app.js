const express = require('express');
const mongoose = require('mongoose');
const process = require('dotenv').config();
// const "requrer rotas"
const teste = process.env.dd;
console.log(dd);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://bdUser:testedb@eliesio.hwrdh5h.mongodb.net',{
  retryWrites: true,
  w: 'majority',
  appName:'eliesio'
});

// app.use('/api', foodRouter);

app.listen(PORT, ()=>{
  console.log(`Servidor iniciado na porta ${PORT} na ${env.teste}`);
});