function HomePage() {
    return (
        <div>
            <h1>Movie Watchlist</h1>
            <form>
                <label htmlFor="movie-title">Movie to watch: </label>
                <input
                    type="text"
                    id="movie-title" 
                    name="movie-title"  
                    required
                />
                <button id="submit-btn">Add Movie</button>
            </form>
            <ul>
                <li>The Holiday</li>
                <li>Pride and Prejudice</li>
                <li>Thor: Ragnorok</li>
            </ul>
        </div>
    )
};

export default HomePage