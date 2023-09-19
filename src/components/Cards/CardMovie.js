import React from 'react';
import { BaseUrl_Img } from '../../utilities/API/BaseImage';

const CardMovie = (props) => {
  return (
    <div class="inline-block rounded-lg justify-center items-center duration-500 hover:scale-105 p-4 md:p-1 shadow-md hover:shadow-xl">
      <div
        class="overflow-hidden sm:rounded-lg rounded-lg shadow-md hover:shadow-xl transition-shadow duration-700"
      >
        <img
          class="sm:w-auto w-full h-auto sm:h-full "
          src={`${BaseUrl_Img}${props.poster_path}`}
          alt="Colors"
        />
      </div>
      <h6 class="mt-4 text-gray-300 font-bold cursor-pointer px-3 text-lg">
        {props.title && props.title.length > 20 ? props.title.substring(0, 20) + "..." : props.title}
      </h6>
      <div class="px-3 pb-2">
        <div class="flex space-x-1 items-center">
          <p className="text-gray-600 text-xl md:text-xl">
            {props.release_date}
          </p>
        </div>
      </div>
    </div>

  );
}

export default CardMovie;
