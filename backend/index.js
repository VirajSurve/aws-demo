import express from "express";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: ['http://localhost:5173'], // Removed trailing slash
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json()); // Ensure JSON parsing for future requests

app.get("/", (req, res) => {
    res.json({ msg: "Hello from backend" }); // Ensure msg key exists
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
