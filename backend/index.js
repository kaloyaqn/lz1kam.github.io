import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
mongoose.connect('mongodb+srv://kalo:kalo@test.6arqr56.mongodb.net/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("Databazata e svurzana..."));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, ()=> console.log("Servera bachka i raboti..."))