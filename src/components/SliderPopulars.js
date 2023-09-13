import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CardSlide from './Cards/CardSlide';

const SliderPopulars = () => {
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
        <div class="flex flex-col m-auto p-auto mt-3 bg-[url()]">
            <div
                class="flex overflow-x-scroll pb-10 hide-scroll-bar  px-3"
            >
                <div
                    class="flex flex-nowrap"
                >
                    {
                        movies && movies.results.map((movie) => (
                            <div class="inline-block pl-3">
                                <NavLink to={`/read/${movie.id}`}>
                                    
                                    <CardSlide 
                                        poster_path={movie.poster_path}
                                        title={movie.title}
                                        release_date={movie.release_date}
                                    />
                                </NavLink>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SliderPopulars;
