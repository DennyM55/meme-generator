function MemeList({ memes }) {

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