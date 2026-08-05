import {useState} from "react";

function MemeForm({title, buttonText, onGenerate, loading}) {

    const [memeIdea, setMemeIdea] = useState("");
    const [category, setCategory] = useState("");

    return (
        <section className="generator-panel" aria-labelledby="generator-title">
            <div className="panel-copy">
                <h2 id="generator-title">{title}</h2>
                <p>
                    Describe the joke, pick a lane, and get three generated memes ready to compare.
                </p>
            </div>

            <div className="form-grid">
                <label className="field">
                    <span>Meme idea</span>
                    <input
                        type="text"
                        placeholder="e.g. debugging at 2 AM"
                        value={memeIdea}
                        onChange={(e) => setMemeIdea(e.target.value)}
                    />
                </label>


                <label className="field">
                    <span>Category</span>
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
                </label>
            </div>

            <button
                className="primary-button"
                type="button"
                disabled={loading}
                onClick={() => onGenerate(memeIdea, category)}
            >
                {buttonText}
            </button>
        </section>
    );
}

export default MemeForm;
