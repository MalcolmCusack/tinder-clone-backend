import express from "express";
import mongoose from 'mongoose';

// app config
const app = express();
const port = process.env.PORT || 8001
const connection_url = "mongodb+srv://admin:ekLGQneW2vCdtXD@cluster0.otevd.mongodb.net/tinder-cloneDB?retryWrites=true&w=majority"

// middlewares

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World'));


// Listener
app.listen(port, () => console.log(`listening on localhost : ${port}`));

