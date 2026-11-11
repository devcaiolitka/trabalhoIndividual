const express = require('express');
const cors = require('cors');
const app = express()
const port = 3000

const pool = require('./db');
app.use(cors());
app.use(express.json());
const pessoaRoutes = require('./routes/pessoaRoutes');
app.use('/pessoas', pessoaRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

