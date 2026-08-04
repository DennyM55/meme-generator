import Header from "./Header";
import MemeForm from "./MemeForm";
import MemeList from "./MemeList";
import { useState } from "react";

function App() {
    const [memes, setMemes] = useState([]);

    return (
        <>
            <Header/>


            <main>
                <MemeForm
                    title="AI Meme Generator"
                    buttonText="Generate AI Meme"
                    onGenerate={setMemes}
                />
                <MemeList memes={memes} />
            </main>
        </>
    );
}

export default App;
