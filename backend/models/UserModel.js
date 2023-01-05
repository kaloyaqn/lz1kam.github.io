import mongoose from "mongoose";
 
const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    gender:{
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
    }
});
 
export default mongoose.model('Users', User);