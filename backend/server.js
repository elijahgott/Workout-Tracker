// run server:
// node server.js
// stop server:
// close terminal or npx kill-port 5000

const dotenv = require('dotenv'); //environment variables
const express = require('express'); //for api
const mongoose = require('mongoose'); //communicate with mongodb database
const cors = require('cors'); 
const cookieParser = require('cookie-parser');

const authRoutes = require('../backend/routes/authRoutes');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: ['http://127.0.0.1:5500', 'http://localhost:5000'],
            credentials: true}));
app.use('/api', authRoutes);

//connect to mongoDB database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log('MongoDB Connection Error: ', err));

//start server
app.listen(PORT, () => console.log('Server running on port ', PORT));