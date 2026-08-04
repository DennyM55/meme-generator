import Header from "./Header";
import MemeForm from "./MemeForm";

function App() {
    return (
        <>
            <Header />

            <main>
                <MemeForm
                    title="AI Meme Generator"
                    buttonText="Generate AI Meme"
                />
            </main>
        </>
    );
}

export default App;
