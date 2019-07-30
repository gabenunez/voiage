const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// URI === Server Address
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Express Stuff/Routes
const listingRouter = require('./routes/listing');
app.use('/api/listings', listingRouter);

const serverTimeRouter = require('./routes/serverTime');
app.use('/api/servertime', serverTimeRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});