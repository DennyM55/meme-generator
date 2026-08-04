export async function generateMemes(memeIdea, category) {
    return [1, 2, 3].map(
        (number) => `${memeIdea} - ${category} meme ${number}`
    );
}