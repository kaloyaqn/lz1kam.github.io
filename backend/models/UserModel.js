import mongoose from "mongoose";
 
const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    mqsto: {
        type: String,
        required: true
    },
    firma: {
        type: String,
        required: false
    },
    broi: {
        type: Number,
        required: true
    },
    cena: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        required: true
    }
});
 
export default mongoose.model('Users', User);