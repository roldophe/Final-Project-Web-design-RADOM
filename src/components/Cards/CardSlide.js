import React from 'react';
import { BaseUrl_Img } from '../../utilities/API/BaseImage';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Tooltip } from '@material-tailwind/react';

const CardSlide = (props) => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating && rating);
        const hasHalfStar = rating - fullStars >= 0.5;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key={fullStars} className="text-yellow-400" />);
        }

        return stars;
    };
    return (
        <>
            <div
                class="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-mdhover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
                <img
                    class="w-48 h-64" src={`${BaseUrl_Img}${props.poster_path}`}
                    alt="Colors"
                />
            </div>
            <div className='px-3 -mt-5'>
                <Tooltip content={`Rate It ${props && props.vote_average.toFixed(1)}`}>
                    <div className="flex items-center">
                        <span className="text-xs font-semibold text-gray-600 mr-1">Rating:</span>
                        <div className="flex items-center">
                            {renderStars(props && props.vote_average)}
                        </div>
                    </div>
                </Tooltip>
            </div>
            <h6 class="mt-4 text-gray-300 font-bold cursor-pointer px-3 text-lg">{props.title}</h6>
            <div class="px-3">
                <div class="flex space-x-1 items-center">
                    <p className='text-gray-400 text-xl md:text-xl'>{props.release_date}</p>
                </div>
            </div>
        </>
    );
}

export default CardSlide;
