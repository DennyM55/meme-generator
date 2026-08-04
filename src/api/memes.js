import axios from "axios";

export async function generateMemes(memeIdea, category) {
    const response = await axios.post(
        "http://localhost:3000/api/memes",
        {
            memeIdea,
            category
        }
    );

    return response.data;
}