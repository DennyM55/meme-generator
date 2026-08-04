const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/memes", (req, res) => {
    const { memeIdea, category } = req.body;

    res.json([
        `${memeIdea} - ${category} backend meme 1`,
        `${memeIdea} - ${category} backend meme 2`,
        `${memeIdea} - ${category} backend meme 3`
    ]);
});

app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});