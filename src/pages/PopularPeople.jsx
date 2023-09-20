import React, { useEffect, useState } from 'react';
import CardPeople from '../components/Cards/CardPeople';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fectch_people } from '../redux/actions/PeopleActions';
import PageLoading from './PageLoading';

const PopularPeople = () => {
    const dispatch = useDispatch();
    const { people, currentPage, totalPages } = useSelector(state => state.peopleReducer);
    const [isLoading, setIsLoading] = useState(true);
    const [combinedPeople, setCombinedPeople] = useState([]);

    useEffect(() => {
        dispatch(fectch_people(currentPage));
        setIsLoading(false);
    }, [dispatch, currentPage]);

    useEffect(() => {
        if (currentPage === 1) {
            setCombinedPeople(people);
        } else {
            setCombinedPeople(prevPeople => [...prevPeople, ...people]);
        }
    }, [people, currentPage]);

    const handlePageChange = (page) => {
        dispatch(fectch_people(page));
        setIsLoading(true);
    };

    console.log("page " + currentPage)
    console.log("fetch people...", combinedPeople);
    console.log("is loading...", isLoading);

    return (
        <>
        {/* <PageLoading /> */}
            {isLoading ? <PageLoading /> :
                <main className="container mx-auto mt-5">
                    <h2 className="flex items-center justify-center text-2xl font-bold text-white">
                        Popular People
                    </h2>
                    <div class="flex items-center justify-center mt-3">
                        <div
                            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xxl:grid-cols-8 sm:gap-5 gap-4 px-4 sm:px-0"
                        >
                            {combinedPeople &&
                                combinedPeople.map((person, index) => (
                                    <div class="inline-block justify-center items-center hover:shadow-xl duration-500 hover:scale-105 pb-2 shadow-md hover:rounded-lg " key={index}>
                                        <Link to={`/detail_people/${person.id}`}>
                                            <CardPeople
                                                profile_path={person.profile_path}
                                                name={person.name}
                                                overview={person.known_for && person.known_for[0].title || person.known_for[0].name}
                                            />
                                        </Link>
                                    </div>
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
            }
        </>
    );
}

export default PopularPeople;