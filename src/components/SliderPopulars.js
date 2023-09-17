import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CardSlide from './Cards/CardSlide';
import { Base_Url } from '../utilities/API/BaseURl';
import { api_key } from '../utilities/API/Key';

const SliderPopulars = () => {
    const [movies, setMovie] = useState(null);

    useEffect(() => {
        // Fetch the movie data
        const fetchMovie = async () => {
            try {
                const response = await fetch(`${Base_Url}/movie/popular?api_key=${api_key}&language=en-US&page=1`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchMovie();
    }, []);
    return (
        <div class="flex flex-col m-auto p-auto mt-3 hover:-mt-10">
            <div
                class="flex overflow-x-scroll pb-10 hide-scroll-bar px-3"
            >
                <div
                    class="flex flex-nowrap hover:mt-12"
                >
                    {
                        movies && movies.results.map((movie) => (
                            <div class="inline-block pl-3 hover:scale-105 duration-75 hover:-translate-y-10 hover:mt-10  hover:inset-0">
                                <a href={`/read/${movie.id}`} a>
                                    
                                    <CardSlide 
                                        poster_path={movie.poster_path}
                                        title={movie.title}
                                        release_date={movie.release_date}
                                        vote_average={movie.vote_average}
                                    />
                                </a>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SliderPopulars;
