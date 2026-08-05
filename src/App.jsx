import { useState } from "react";
import Header from "./Header";
import MemeForm from "./MemeForm";
import MemeList from "./MemeList";
import { generateMemes } from "./api/memes";
import "./App.css";

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
        <div className="app-shell">
            <Header />

            <main className="app-main">
                <MemeForm
                    title="AI Meme Generator"
                    buttonText={loading ? "Generating..." : "Generate AI Meme"}
                    onGenerate={handleGenerate}
                    loading={loading}
                />

                {loading && (
                    <div className="loading-box" role="status" aria-live="polite">
                        <div className="spinner" aria-hidden="true"></div>
                        <p>AI is generating memes...</p>
                    </div>
                )}

                {error && (
                    <p className="error-message" role="alert">
                        {error}
                    </p>
                )}

                <MemeList memes={memes} />
            </main>
        </div>
    );
}

export default App;
