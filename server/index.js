require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/memes", async (req, res) => {
    const {memeIdea, category} = req.body;
    const imageResponse = await axios.get(
        "https://api.imgflip.com/get_memes"
    );

    const templates = imageResponse.data.data.memes.slice(0, 3);
    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-4.1-nano",
                messages: [
                    {
                        role: "system",
                        content: `
You are a meme generator.

Rules:
- Return exactly 3 captions.
- Return only valid JSON.
- Return a JSON array of 3 strings.
- Do not use markdown.
- Do not add explanations.

Example:
["caption 1", "caption 2", "caption 3"]
`
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

        const captions = JSON.parse(cleanedText);

        const results = captions.map((caption, index) => ({
            caption,
            image: templates[index].url
        }));

        res.json(results);


    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json(["Something went wrong"]);
    }
});

app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});