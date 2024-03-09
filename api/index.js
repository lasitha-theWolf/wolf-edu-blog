import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDb is connected');
    }).catch(err => {
        console.log(err);
    })

//mongodb+srv://lasitha:dlpodlasitha9618*@wolf-blog.dgbu0pk.mongodb.net/  oken psse kamahti namak dapn

const app = express();

app.listen(3000, () => {
    console.log('server is running on port 3000!');
});

