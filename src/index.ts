import express, { Request, Response } from "express";
import DogController from "./controller/DogController";
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
const app = express();
const port = 8080;

mongoose.connect("mongodb://localhost:27017/mobileAppDog");

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Application is running");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.use("/api", DogController)