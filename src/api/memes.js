import axios from "axios";

const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function generateMemes(memeIdea, category) {
    const response = await axios.post(
        `${API_URL}/api/memes`,
        {
            memeIdea,
            category
        }
    );

    return response.data;
}