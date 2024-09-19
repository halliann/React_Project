import { useState } from 'react';

function HomePage() {
    const [movieTitle, setMovieTitle] = useState('');
    const [watchlist, setWatchlist] = useState([]);
    const [sampleList, setSampleList] = useState(['The Holiday', 'Twilight', 'Thor: Ragnorok'])

    function handleDelete(index) {
        const newWatchlist = watchlist.filter((_, i) => i != index);
        setWatchlist(newWatchlist);

        const updateSampleList = sampleList.filter((_, i) => i != index);
        setSampleList(updateSampleList);
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
            <ul>
                {/* sample movie list */}
                {sampleList.map((movie, index) => (
                    <li key={index}>{movie}<button onClick={() => handleDelete(index)} className="remove-btn">X</button></li>
                ))}

                {/* added movies */}
                {watchlist.map((movie, index) => (
                    <li key={index}>{movie}<button onClick={() => handleDelete(index)} className="remove-btn">X</button></li>
                ))}
            </ul>
        </div>
    )
};

export default HomePage;