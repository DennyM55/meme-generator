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
        const imageResponse = await axios.get(
            "https://api.imgflip.com/get_memes"
        );

        const allTemplates = imageResponse.data.data.memes;

        const templates = [...allTemplates]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

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

        const results = [];

        for (let i = 0; i < captions.length; i++) {
            const formData = new URLSearchParams({
                template_id: String(templates[i].id),
                username: process.env.IMGFLIP_USERNAME.trim(),
                password: process.env.IMGFLIP_PASSWORD.trim(),
                text0: captions[i],
                text1: ""
            });

            const memeResponse = await axios.post(
                "https://api.imgflip.com/caption_image",
                formData.toString(),
                {
                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded"
                    }
                }
            );

            if (!memeResponse.data.success) {
                throw new Error(
                    `Imgflip error: ${memeResponse.data.error_message}`
                );
            }

            results.push({
                caption: captions[i],
                image: memeResponse.data.data.url
            });
        }

        res.json(results);
    } catch (error) {
        console.error(
            error.response?.data || error.message
        );

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});