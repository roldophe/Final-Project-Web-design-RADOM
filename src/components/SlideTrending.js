import { Tooltip } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

const SlideTrending = () => {
    const [movies, setMovie] = useState(null);

    useEffect(() => {
        // Fetch the movie data
        const fetchMovie = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=55e57522394c7587c74602a3fe614134&language=en-US/page=1');
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchMovie();
    }, []);
    return (
        <div class="flex flex-col m-auto p-auto mt-3 bg-no-repeat bg-[center_top_8rem] bg-[url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)]">
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar mb-5 px-3 scrollbar-track-gray-200 scrollbar-thumb-blue-500">
                <div
                    class="flex flex-nowrap"
                >
                    {
                        movies && movies.results.map((movie, index) => (
                            <div class="inline-block pl-3">
                                <div key={index}
                                    class="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                /* style={{ backgroundColor: "#0d1423" }} */
                                >
                                    <img
                                        class="w-48 h-64" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt="Colors"
                                    />
                                </div>
                                <div className='px-3'>
                                    <Tooltip content={`Rate It`}>
                                        <span
                                            className="cursor-pointer text-sm rounded-full border border-gray-1 bg-gray-900 p-3 text-gray-100 transition-colors hover:border-gray-100/5 hover:bg-gray-700 hover:!opacity-100 group-hover:opacity-50">
                                            7.5
                                        </span>
                                    </Tooltip>
                                </div>
                                <h6 class="mt-5 text-gray-100 font-bold cursor-pointer px-3 text-lg">{movie.original_name || movie.original_title}</h6>
                                <div class="px-3">
                                    <div class="flex space-x-1 items-center">
                                        <p className='text-gray-300 text-xl md:text-xl'>{movie.first_air_date || movie.release_date}</p>
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

export default SlideTrending;
