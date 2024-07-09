import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const PORT=3001;

app.get("/", (req, res)=> {
    res.send("Testing");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});