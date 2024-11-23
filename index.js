require('dotenv').config({ path: '.env' })
const PORT = process.env.PORT || 5000;
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send("Welcome 34"))

app.listen(PORT, () => { 
console.log(`Servidor escuchando en el puerto 5000`))
  }
