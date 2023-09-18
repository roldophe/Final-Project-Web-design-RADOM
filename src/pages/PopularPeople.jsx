import React, { useEffect, useState } from 'react';
import CardPeople from '../components/Cards/CardPeople';
import { Link } from 'react-router-dom';
import { Base_Url } from '../utilities/API/BaseURl';
import { api_key } from '../utilities/API/Key';
import { useDispatch, useSelector } from 'react-redux';
import { fectch_all_people } from '../redux/actions/PeopleActions';

const PopularPeople = () => {
    const dispactch = useDispatch();
    const { people } = useSelector(state => state.peopleReducer);
    useEffect(() => {
        dispactch(fectch_all_people());
    }, [])
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
                        people.results.map((person, index) => (
                            <div class="inline-block justify-center items-center" key={index}>
                                <Link to={`/detail_people/${person.id}`}>
                                    <CardPeople
                                        profile_path={person.profile_path}
                                        title={person.title || person.name}
                                    />
                                </Link>

                            </div>

                        ))}
                </div>
            </div>

            {/* <div className="fter:h-px my-24 flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
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
            </div> */}
        </main>
    );
}

export default PopularPeople;
