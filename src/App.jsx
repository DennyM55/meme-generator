import { useState } from "react";
import Header from "./Header";
import MemeForm from "./MemeForm";
import MemeList from "./MemeList";
import { generateMemes } from "./api/memes";

function App() {
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleGenerate(memeIdea, category) {
        try {
            setLoading(true);
            setError("");

            const results = await generateMemes(memeIdea, category);
            setMemes(results);
        } catch {
            setError("Could not generate memes.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Header />

            <main>
                <MemeForm
                    title="AI Meme Generator"
                    buttonText={loading ? "Generating..." : "Generate AI Meme"}
                    onGenerate={handleGenerate}
                />

                {error && <p>{error}</p>}

                <MemeList memes={memes} />
            </main>
        </>
    );
}

export default App;