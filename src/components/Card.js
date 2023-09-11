import React, { useEffect, useState } from 'react';

const Card = ({ movies }) => {
  return (
    <div className="container mx-auto flex py-3 items-center justify-center">
      {movies.results.map((movie, index) => (
        <div key={index} className='relative p-1 flex-inline flex items-center justify-center'>
          <img className='relative w-40' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          {/* Add any other desired movie information */}
          {/* <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
          <p>Rating: {movie.vote_average}</p> */}
        </div>
      ))}
    </div>
  );
};
export const Cards = () => {
  const [movies, setMovie] = useState(null);

  useEffect(() => {
    // Fetch the movie data
    const fetchMovie = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1');
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div className="app">
      {movies ? <Card movies={movies} /> : <p>Loading...</p>}
    </div>
  );
};
