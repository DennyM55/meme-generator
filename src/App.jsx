import {useState} from "react";
import Header from "./Header";
import MemeForm from "./MemeForm";
import MemeList from "./MemeList";
import {generateMemes} from "./api/memes";

function App() {
    const [memes, setMemes] = useState([]);

    async function handleGenerate(memeIdea, category) {
        const results = await generateMemes(memeIdea, category);
        setMemes(results);
    }

    return (
        <>
            <Header/>

            <main>
                <MemeForm
                    title="AI Meme Generator"
                    buttonText="Generate AI Meme"
                    onGenerate={handleGenerate}
                />

                <MemeList memes={memes}/>
            </main>
        </>
    );
}

export default App;