require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRouter');

const app = express();

const PORT = process.env.PORT;
const PASSWORD = process.env.PASSWORD;
const AAP_NAME = process.env.AAP_NAME;
const USER_NAME = process.env.USER_NAME;
const CLUSTER_NAME = process.env.CLUSTER_NAME;

app.use(express.json());

mongoose.connect(`mongodb+srv://${USER_NAME}:${PASSWORD}@${CLUSTER_NAME}.0umakns.mongodb.net`,{
  retryWrites: true, 
  w: 'majority', 
  appName: AAP_NAME
});

app.use('/api', foodRouter);


app.listen(PORT, ()=>{
  console.log(`Servidor iniciado na porta ${PORT}`);
});