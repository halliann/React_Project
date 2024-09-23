import { useState } from 'react';

function HomePage() {
    const [movieTitle, setMovieTitle] = useState('');
    const [watchlist, setWatchlist] = useState([]);

    function handleDelete(index) {
        const newWatchlist = watchlist.filter((_, i) => i != index);
        setWatchlist(newWatchlist);
    };

    return (
        <div>
            <h1>Movie Watchlist</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                setWatchlist([...watchlist, movieTitle]);
                setMovieTitle('');
            }}>
                <label htmlFor="movie-title">Movie to watch: </label>
                <input
                    type="text"
                    id="movie-title" 
                    name="movie-title"  
                    value={movieTitle}
                    onChange={(event) => setMovieTitle(event.target.value)}
                    required
                />
                <button id="submit-btn">Add Movie</button>
            </form>
            <ul className="homepage-list">
                {watchlist.map((movie, index) => (
                    <li className="watchlist-list" key={index}>{movie}<button onClick={() => handleDelete(index)} className="remove-btn">X</button></li>
                ))}
            </ul>
        </div>
    )
};

export default HomePage;