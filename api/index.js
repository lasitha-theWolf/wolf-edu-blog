import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDb is connected');
    }).catch(err => {
        console.log(err);
    })

//mongodb+srv://lasitha:@wolf-blog.dgbu0pk.mongodb.net/  oken psse kamahti namak dapn

const app = express();

app.listen(3000, () => {
    console.log('server is running on port 3000!');
});

//req for request and res for response
app.use('/api/user', userRoute)