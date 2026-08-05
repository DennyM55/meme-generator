function MemeList({ memes }) {
    if (memes.length === 0) {
        return (
            <section className="empty-state" aria-label="No memes generated yet">
                <div className="empty-icon" aria-hidden="true">+</div>
                <h3>No memes yet</h3>
                <p>Your generated memes will appear here in a clean, share-ready grid.</p>
            </section>
        );
    }

    return (
        <section className="results-section" aria-labelledby="results-title">
            <div className="section-heading">
                <p className="eyebrow">Results</p>
                <h3 id="results-title">Generated Memes</h3>
            </div>

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
        </section>
    );
}

export default MemeList;
