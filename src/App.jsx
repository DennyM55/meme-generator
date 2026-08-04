import { useState } from "react";
import Header from "./Header";
import MemeForm from "./MemeForm";
import MemeList from "./MemeList";

function App() {
    const [memes, setMemes] = useState([]);

    function handleGenerate(memeIdea, category) {
        const results = [1, 2, 3].map(
            (number) => `${memeIdea} - ${category} meme ${number}`
        );

        setMemes(results);
    }

    return (
        <>
            <Header />

            <main>
                <MemeForm
                    title="AI Meme Generator"
                    buttonText="Generate AI Meme"
                    onGenerate={handleGenerate}
                />

                <MemeList memes={memes} />
            </main>
        </>
    );
}

export default App;