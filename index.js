const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send("Welcome 34"))

app.listen(5000, () => { 
console.log(`Servidor escuchando en el puerto 5000`))
  }
