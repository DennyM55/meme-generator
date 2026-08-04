function MemeList() {

    const memes = [
        "When the code works on the first try 😎",
        "Me fixing one bug and creating three more 😂",
        "Deploying on Friday? Brave decision 🚀"
    ];

    return (
        <>
            <h3>Generated Memes</h3>

            {memes.map((meme, index) => (
                <p key={index}>{meme}</p>
            ))}
        </>
    );
}

export default MemeList;