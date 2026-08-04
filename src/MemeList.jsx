function MemeList({ memes }) {
    if (memes.length === 0) {
        return null;
    }

    return (
        <>
            <h3>Generated Memes</h3>

            <div className="meme-grid">
                {memes.map((meme, index) => (
                    <div className="meme-card" key={index}>
                        <img
                            src={meme.image}
                            alt={meme.caption}
                        />
                        <p>{meme.caption}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MemeList;