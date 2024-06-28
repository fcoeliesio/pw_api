require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRouter');

const app = express();

app.use(express.json());
app.use('/api', foodRouter);

const PORT = process.env.PORT;
const PASSWORD = process.env.PASSWORD;
const AAP_NAME = process.env.AAP_NAME;
const USER_NAME = process.env.USER_NAME;
const CLUSTER_NAME = process.env.CLUSTER_NAME;

mongoose.connect(`mongodb+srv://${USER_NAME}:${PASSWORD}@${CLUSTER_NAME}.okwhivl.mongodb.net`,{
  retryWrites: true, 
  w: 'majority', 
  appName: AAP_NAME
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error('Erro de conexão com o MongoDB', err);
});;

app.listen(PORT, ()=>{
  console.log(`Servidor iniciado na porta ${PORT}`);
});