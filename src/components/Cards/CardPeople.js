import React from 'react';
import { BaseUrl_Img } from '../../utilities/API/BaseImage';

const CardPeople = (person) => {
    return (
        <>
            <div
                class="overflow-hidden sm:rounded-lg rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
                <img
                    class="sm:w-auto w-full h-auto sm:h-full"
                    src={`${BaseUrl_Img}${person.profile_path}`}
                    alt="Colors"
                />
            </div>
            <h6 class="mt-4 text-gray-300 font-bold cursor-pointer px-3 text-lg">
                {person.title || person.name}
            </h6>
            <div class="px-3">
                <div class="flex space-x-1 items-center">
                    <p className="text-gray-600 text-xl md:text-xl">
                        {/* {allOverviews[index]} */}
                    </p>
                </div>
            </div>
        </>
    );
}

export default CardPeople;
