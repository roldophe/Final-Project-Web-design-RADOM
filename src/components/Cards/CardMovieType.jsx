import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CardMovie from './CardMovie';
import { fectchAllMovies } from '../../redux/actions/MovieActions';
import PageLoading from '../../pages/PageLoading';

const CardMovieType = ({ movieType ,Title}) => {
    const dispatch = useDispatch();
    const { movies, currentPage, totalPages } = useSelector(state => state.movReducer);
    const [isLoading, setIsLoading] = useState(true);
    const [combinedMovies, setCombinedMovies] = useState([]);

    useEffect(() => {
        // Fetch the movie data
        dispatch(fectchAllMovies(currentPage, movieType));
        setIsLoading(false);
    }, [dispatch, currentPage, movieType]);

    useEffect(() => {
        if (currentPage === 1) {
            setCombinedMovies(movies);
        } else {
            setCombinedMovies(prevMovies => [...prevMovies, ...movies]);
        }
    }, [movies, currentPage]);

    const handlePageChange = (page) => {
        dispatch(fectchAllMovies(page, movieType));
        setIsLoading(true);
    };

    return (
        <>
            {isLoading ? <PageLoading /> :
                <div className="container mx-auto mt-5">
                    <h2 className="flex items-center justify-center text-2xl font-bold text-white">
                        {Title}
                    </h2>
                    <div className="flex items-center justify-center mt-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 sm:gap-5 gap-4 px-4 sm:px-0">
                            {combinedMovies && combinedMovies.map((movie) => (
                                <Link to={`/read/${movie.id}`} key={movie.id}>
                                    <CardMovie
                                        poster_path={movie.poster_path}
                                        title={movie.title || movie.name}
                                        release_date={movie.release_date || movie.first_air_date}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="fter:h-px my-24 flex items-center before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300 after:content-['']">
                        <div className="flex justify-center">
                            {currentPage > 1 && (
                                <button
                                    type="button"
                                    className="flex items-center rounded-full border border-gray-300 bg-gray-300 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 mr-2"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                >
                                    Previous
                                </button>
                            )}
                            {currentPage < totalPages && (
                                <button
                                    type="button"
                                    className="flex items-center rounded-full border border-gray-300 bg-gray-300 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            }
        </>

    );
};

export default CardMovieType;