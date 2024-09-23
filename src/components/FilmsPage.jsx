import { useState, useEffect } from 'react';

function FilmsPage() {
    const [movieList, setMovieList] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
       fetch('https://studioghibliapi-d6fc8.web.app/films')
        .then((response) => response.json())
        .then((data) => {setMovieList(data); setFilteredMovies(data)});
        console.log(movieList);
    }, []);

    const searchTitle = (event) => {
        const searchText = event.target.value.toLowerCase();
        const filteredMovie = movieList.filter((f) =>
        f.title.toLowerCase().startsWith(searchText));
        setFilteredMovies(filteredMovie);
    };

    const searchDirector = (event) => {
        const searchText = event.target.value.toLowerCase();
        const filteredDirector = movieList.filter((g) => 
        g.director.toLowerCase().startsWith(searchText));
        setFilteredMovies(filteredDirector);
    };

    const searchRating = (event) => {
        const selectedRating = event.target.value;
        if (selectedRating === "") {
            setFilteredMovies(movieList); // Show all if no filter
        } else if (selectedRating === "59") {
            // Less than 60% filter
            const filteredByRating = movieList.filter(movie => parseInt(movie.rt_score) < 60);
            setFilteredMovies(filteredByRating);
        } else {
            // Filter by selected rating and up
            const filteredByRating = movieList.filter(movie => parseInt(movie.rt_score) >= parseInt(selectedRating));
            setFilteredMovies(filteredByRating);
        }
    };

    return (
        <div>
            <h1>Studio Ghibli Films</h1>
            {/* search bar for title, director, RT rating */}
            <nav>
                <input 
                    id='title'
                    type='text'
                    placeholder='Title'
                    onChange={searchTitle}
                />
                <input 
                    id='director'
                    type='text'
                    placeholder='Director'
                    onChange={searchDirector}
                />
                <select id='rating' placeholder='rating' onChange={searchRating}>
                    <option value="">🍅</option>
                    <option value="90">90% & Up</option>
                    <option value="80">80% & Up</option>
                    <option value="70">70% & Up</option>
                    <option value="60">60% & Up</option>
                    <option value="59">less than 60%</option>
                </select>
            </nav>

            {/* list of movies */}
            <ul className='sg-list'>
                {filteredMovies.map((movie) => (
                    <li key={movie.id} id="sg-movie">
                        <img src={movie.image} id="sg-image"></img>
                        <span className="movie-details">{movie.title} - </span>
                        <span className="movie-details">Directed by: {movie.director},</span>
                        <span className="movie-details">{movie.rt_score}% 🍅</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default FilmsPage;