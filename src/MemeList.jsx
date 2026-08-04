function MemeList({ memes }) {
    return (
        <>
            <h3>Generated Memes</h3>

            {memes.map((meme, index) => (
                <div key={index}>
                    <img
                        src={meme.image}
                        alt={meme.caption}
                        width="300"
                    />

                    <p>{meme.caption}</p>
                </div>
            ))}
        </>
    );
}

export default MemeList;