import mongoose from "mongoose";
 
const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    mqsto: {
        type: String,
        required: false
    },
    firma: {
        type: String,
        required: false
    },
    broi: {
        type: Number,
        required: false
    },
    cena: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    sobstvenik: {
        type: String,
        required: false
    }
});
 
export default mongoose.model('Users', User);