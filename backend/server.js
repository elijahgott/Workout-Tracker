require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log(err));

//define sample route
app.get('/', (req, res) => {
    res.send('API is running...')
});

fetch('http://localhost:5000/')
    .then(response => response.text())
    .then(data => console.log(data));

//start server
app.listen(PORT, () => console.log('Server running on port ' + PORT));