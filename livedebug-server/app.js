require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const index = require('./routes/index');
const port = 3000

mongoose.connect(`mongodb://localhost:27017/phase-2-${process.env.NODE_ENV}`, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected')
});


app.use(express.urlencoded({ extended: false }));

app.use('/', index);

// app.listen(port, () => {
//   console.log(`listen on port ${port}`)
// })

module.exports = app
