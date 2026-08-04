import {useState} from "react";

function MemeForm({title, buttonText, onGenerate, loading}) {

    const [memeIdea, setMemeIdea] = useState("Enter your meme idea...");
    const [category, setCategory] = useState("");

    return (
        <>
            <h2>{title}</h2>


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
                disabled={loading}
                onClick={() => onGenerate(memeIdea, category)}
            >
                {buttonText}
            </button>

            <p>
                Enter an idea, choose a category, and generate meme suggestions.
            </p>
        </>
    );
}

export default MemeForm;
