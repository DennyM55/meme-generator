import Header from "./Header";
import MemeForm from "./MemeForm";
import MemeList from "./MemeList";

function App() {
    return (
        <>
            <Header/>


            <main>
                <MemeForm
                    title="AI Meme Generator"
                    buttonText="Generate AI Meme"
                />
                <MemeList/>
            </main>
        </>
    );
}

export default App;
