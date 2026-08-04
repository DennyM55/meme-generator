require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/memes", async (req, res) => {
    const { memeIdea, category } = req.body;

    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-4.1-nano",
                messages: [
                    {
                        role: "system",
                        content: "You are a funny meme generator. Return only 3 meme captions as a JSON array."
                    },
                    {
                        role: "user",
                        content: `Idea: ${memeIdea}, Category: ${category}`
                    }
                ]
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const text = response.data.choices[0].message.content;

        const cleanedText = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        res.json(JSON.parse(cleanedText));

    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json(["Something went wrong"]);
    }
});

app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});