import React from 'react';
import { BaseUrl_Img } from '../../utilities/API/BaseImage';

const CardPeople = (person) => {
    return (
        <>
            <div
                class="overflow-hidden sm:rounded-lg rounded-lg"
            >
                <img
                    class="sm:w-auto w-full h-auto sm:h-full"
                    src={`${BaseUrl_Img}${person.profile_path}`}
                    alt="Colors"
                />
            </div>
            <h6 class="mt-2 text-gray-300 font-bold cursor-pointer px-3 text-lg">
                {person.name && person.name.length > 16 ? person.name.substring(0, 16) : person.name}
            </h6>
            <div class="px-3 hidden sm:block">
                <div class="flex space-x-1 items-center">
                    <p className="text-gray-600 text-xl md:text-xl">
                        {person.overview && person.overview.length > 14
                            ? person.overview.substring(0, 16) + "..."
                            : person.overview || "Unknown"}
                    </p>
                </div>
            </div>

        </>
    );
}

export default CardPeople;
