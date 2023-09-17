import { Tooltip } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { BaseUrl_Img } from '../utilities/API/BaseImage';
import { api_key } from '../utilities/API/Key';
import { Base_Url } from '../utilities/API/BaseURl';

const SlideTrending = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        // Fetch the movie data
        const fetchMovies = async () => {
            try {
                const response = await fetch(`${Base_Url}/trending/all/day?api_key=${api_key}&language=en-US&page=1`);
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchMovies();
    }, []);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating && rating);
        const hasHalfStar = rating - fullStars >= 0.5;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key={fullStars} className="text-yellow-400" />);
        }

        return stars;
    };

    console.log('Movies', movies && movies.results);
    // Placeholder value for rating
    const rating = 0.0;
    return (
        <div class="flex flex-col m-auto p-auto mt-5 bg-no-repeat bg-[center_top_8rem] bg-[url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)]">
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar mb-5 px-3 scrollbar-track-gray-200 scrollbar-thumb-blue-500">
                <div
                    class="flex flex-nowrap"
                >
                    {
                        movies && movies.results.map((movie, index) => (
                            <div class="inline-block pl-3 hover:mt-5 hover:scale-105 duration-100 hover:translate-4 hover:z-auto">
                                <a href={`/read/${movie.id}`}>
                                    <div key={index}
                                        class="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                    >
                                        <img
                                            class="w-48 h-64" src={`${BaseUrl_Img}${movie && movie.poster_path}`}
                                            alt="Colors"
                                        />
                                    </div>
                                    <div className='px-3 -mt-5'>
                                        <Tooltip content={`Rate It ${movie && movie.vote_average.toFixed(1)}`}>
                                            <div className="flex items-center">
                                                <span className="text-xs font-semibold text-gray-600 mr-1">Rating:</span>
                                                <div className="flex items-center">
                                                    {renderStars(movie && movie.vote_average)}
                                                </div>
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <h6 class="mt-5 text-gray-100 font-bold cursor-pointer px-3 text-lg">{movie && movie.original_name || movie.original_title}</h6>
                                    <div class="px-3">
                                        <div class="flex space-x-1 items-center">
                                            <p className='text-gray-300 text-xl md:text-xl'>{movie && movie.first_air_date || movie.release_date}</p>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SlideTrending;
