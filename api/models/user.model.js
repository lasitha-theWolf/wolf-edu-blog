import mongoose from "mongoose";

//Schema for rule for database

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true    //unique eken karanne same name thiyanna baa
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },
    }, {timestamps:true}   //timestamps use for user kenek add karamai update karamai database ekata ynwa time eka
);

const User = mongoose.model('User', userSchema);

export default User;