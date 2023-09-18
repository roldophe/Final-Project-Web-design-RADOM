import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardMovie from '../components/Cards/CardMovie';
import { Base_Url } from '../utilities/API/BaseURl';
import { api_key } from '../utilities/API/Key';

const TopRated = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        // Fetch the movie data
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `${Base_Url}/movie/top_rated?api_key=${api_key}&language=en-US&page=${currentPage}`
                );
                const data = await response.json();
                setMovies((prevMovies) => [...prevMovies, ...data.results]);
                setTotalPages(data.total_pages);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };
        if (currentPage === 1) {
            setMovies([]);
        }
        fetchMovies();
    }, [currentPage]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            if (currentPage < totalPages) {
                setCurrentPage((prevPage) => prevPage + 1);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleViewMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    return (
        <main className="container mx-auto mt-5">
            <h2 className="flex items-center justify-center text-2xl font-bold text-white">
                Top Rated
            </h2>
            <div class="flex items-center justify-center mt-3">
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 sm:gap-5 gap-4 px-4 sm:px-0"
                >
                    {movies &&
                        movies.map((movie, index) => (
                            <div class="inline-block justify-center items-center duration-500 hover:scale-105 hover:shadow-xl" key={index}>
                                <Link to={`/read/${movie.id}`}>
                                <CardMovie
                                        poster_path={movie.poster_path}
                                        title={movie.title}
                                        release_date={movie.release_date}
                                    />
                                </Link>

                            </div>
                        ))}
                </div>
            </div>

            <div className="fter:h-px my-24 flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
                {currentPage < totalPages ? (
                    <button
                        type="button"
                        className="flex items-center rounded-full border border-gray-300 bg-gray-300 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100"
                        onClick={handleViewMore}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="mr-1 h-4 w-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                        View More
                    </button>
                ) : null}
            </div>
        </main>
    );
}

export default TopRated;
