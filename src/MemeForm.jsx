import { useState } from "react";

function MemeForm() {

    const [memeIdea, setMemeIdea] = useState("Hello Denny");
    const [category, setCategory] = useState("");

    return (
        <>
            <h2>Create your meme</h2>

            <input
                type="text"
                placeholder="Enter your meme idea..."
                value={memeIdea}
                onChange={(e) => setMemeIdea(e.target.value)}
            />

            <p>You typed: {memeIdea}</p>

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Choose a category</option>
                <option value="coding">Coding</option>
                <option value="work">Work</option>
                <option value="movies">Movies</option>
                <option value="relationships">Relationships</option>
            </select>

            <button
                type="button"
                onClick={() => {
                    console.log("Idea:", memeIdea);
                    console.log("Category:", category);
                }}
            >
                Generate Meme
            </button>

            <p>
                Enter an idea, choose a category, and generate meme suggestions.
            </p>
        </>
    );
}

export default MemeForm;
