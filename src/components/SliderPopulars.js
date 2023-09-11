import React, { useEffect, useState } from 'react';

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
                        movies && movies.results.map((movie, index) => (
                            <div class="inline-block pl-3">
                                <div key={index}
                                    class="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-mdhover:shadow-xl transition-shadow duration-300 ease-in-out"
                                >
                                    <img
                                        class="w-48 h-64" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt="Colors"
                                    />
                                </div>
                                <h6 class="mt-4 text-gray-300 font-bold cursor-pointer px-3 text-lg">{movie.title}</h6>
                                <div class="px-3">
                                    <div class="flex space-x-1 items-center">
                                        <p className='text-gray-600 text-xl md:text-xl'>{movie.release_date}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SliderPopulars;
