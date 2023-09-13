import React, { useEffect, useState } from 'react';
import CardPeople from '../components/Cards/CardPeople';

const PopularPeople = () => {
    const [people, setpeople] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        // Fetch the movie data
        const fetchpeople = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/person/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=${currentPage}`
                );
                const data = await response.json();
                setpeople((prevpeople) => [...prevpeople, ...data.results]);
                setTotalPages(data.total_pages);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };
        if (currentPage === 1) {
            setpeople([]);
        }
        fetchpeople();
    }, [currentPage]);
    console.log("people", people);
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
    //const overviews = people && people.results.known_for.map(o => o.overview);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleViewMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    /* const allOverviews = people && people.results[0].known_for.map(item => item.overview); */
    //const allOverviews = people && people.results && people.results[0] && people.results[0].known_for.map(item => item.overview);
    return (
        <main className="container mx-auto mt-5">
            <h2 className="flex items-center justify-center text-2xl font-bold text-white">
                Popular People
            </h2>
            <div class="flex items-center justify-center mt-3">
                <div
                    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xxl:grid-cols-8 sm:gap-5 gap-4 px-4 sm:px-0"
                >
                    {people &&
                        people.map((person, index) => (
                            <div class="inline-block justify-center items-center" key={index}>
                                {/*
                                <div
                                    class="overflow-hidden sm:rounded-lg rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <img
                                        class="sm:w-auto w-full h-auto sm:h-full"
                                        src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`}
                                        alt="Colors"
                                    />
                                </div>
                                <h6 class="mt-4 text-gray-300 font-bold cursor-pointer px-3 text-lg">
                                    {movie.title || movie.name}
                                </h6>
                                <div class="px-3">
                                    <div class="flex space-x-1 items-center">
                                        <p className="text-gray-600 text-xl md:text-xl">
                                             {allOverviews[index]} 
                                        </p>
                                    </div>
                                </div> */}
                                <CardPeople
                                    profile_path={person.profile_path}
                                    title={person.title || person.name}
                                />
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

export default PopularPeople;
