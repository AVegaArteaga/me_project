import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express(); //Creates an Express application. The express() function is a top-level function exported by the express module.
dotenv.config(); //Loads .env file contents into https

app.use(bodyParser.json({limit: "30mb", extended: true})); //it is responsible for parsing the incoming request bodies in a middleware before you handle it.app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); // content type describes form data that is sent in a single block in the HTTP message body
app.use(cors()); //It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated.

app.use('/posts', postRoutes);
app.get('/', (req,res) =>{

    res.send('Hello to Video Games!');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
