import React, { useEffect, useState } from 'react';
import CardSlide from './Cards/CardSlide';
import { useDispatch, useSelector } from 'react-redux';
import { fectchAllMovies } from '../redux/actions/MovieActions';

const SliderPopulars = () => {
    const dispatch = useDispatch();
    const { movies, currentPage } = useSelector(state => state.movReducer);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Fetch the movie data
        dispatch(fectchAllMovies(currentPage, 'movie/popular'));
        setIsLoading(false);
    }, [dispatch, currentPage]);

    return (
        <div className="flex flex-col m-auto bg-no-repeat bg-[center_top_8rem] bg-[url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)]">
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar px-3">
                <div className="flex flex-nowrap mt-3">
                    {movies.map((movie) => (
                        <div key={movie.id} className="inline-block pl-3 duration-500 hover:scale-105 hover:shadow-xl">
                            <a href={`/read/${movie.id}`}>
                                {isLoading ? (
                                    <div className="w-48 h-72 bg-gray-200 animate-pulse rounded-lg"></div> // Placeholder for loading
                                ) : (
                                    <CardSlide
                                        poster_path={movie.poster_path}
                                        title={movie.title}
                                        release_date={movie.release_date}
                                        vote_average={movie.vote_average}
                                    />
                                )}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SliderPopulars;