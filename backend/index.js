import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Demo from "./Models/demo.js"; // Ensure correct path and extension

const app = express();

const corsOptions = {
    origin: ['http://localhost:5173', 'http://13.201.89.179:5173', 'http://13.201.89.179'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json()); 

const url = process.env.MONGO_URL;

async function connectToDatabase() {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Failed to connect to MongoDB Atlas:', err);
    }
}

connectToDatabase();

app.get("/", (req, res) => {
    res.json({ msg: "Hello from backend" });
});

app.post("/write", async (req, res) => {
    const { greeting } = req.body;
    try {
        const DemoDoc = await Demo.create({ greeting });
        res.json({ message: "Successfully sent", data: DemoDoc });
    } catch (err) {
        res.status(500).json({ message: "Error occurred", error: err });
    }
});

app.listen(3000, '0.0.0.0', () => {
    console.log("Listening on port 3000");
});
