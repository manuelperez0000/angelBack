require('dotenv').config({ path: '.env' })
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;
const morgan = require('morgan');

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send("Welcome 66"))


app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))