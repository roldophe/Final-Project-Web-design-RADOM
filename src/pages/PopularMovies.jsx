import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import CardMovie from '../components/Cards/CardMovie';
import { useDispatch, useSelector } from 'react-redux';
import { fectchAllMovies } from '../redux/actions/MovieActions';
import { Link } from 'react-router-dom';
const PopularMovies = () => {

    const dispatch = useDispatch();
    const { movies, currentPage, totalPages } = useSelector(state => state.movReducer);
    const [isLoading, setIsLoading] = useState(true);
    const [combinedMoivies, setCombinedMovies] = useState([]);
    useEffect(() => {
        // Fetch the movie data
        dispatch(fectchAllMovies(currentPage, 'movie/popular'));
        setIsLoading(false);
    }, [dispatch, currentPage]);



    useEffect(() => {
        if (currentPage === 1) {
            setCombinedMovies(movies);
        } else {
            setCombinedMovies(prevMovies => [...prevMovies, ...movies]);
        }
    }, [movies, currentPage]);

    const handlePageChange = (page) => {
        dispatch(fectchAllMovies(page));
        setIsLoading(true);
    };
    console.log("page " + currentPage)
    console.log("fetch movies...", combinedMoivies);
    console.log("is loading...", isLoading);
    return (
        <main className="container mx-auto mt-5">
            <h2 className="flex items-center justify-center text-2xl font-bold text-white">
                Popular Movies
            </h2>
            <div class="flex items-center justify-center mt-3">
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 sm:gap-5 gap-4 px-4 sm:px-0"
                >
                    {combinedMoivies &&
                        combinedMoivies.map((movie) => (
                            <Link to={`/read/${movie.id}`}>
                                <CardMovie
                                    poster_path={movie.poster_path}
                                    title={movie.title}
                                    release_date={movie.release_date}
                                />
                            </Link>
                        ))}
                </div>
            </div>

            <div className="fter:h-px my-24 flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
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
        </main>
    );
}

export default PopularMovies;
