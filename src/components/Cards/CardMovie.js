import React from 'react';

const CardMovie = (props) => {
  return (
    <>
      <div
        class="overflow-hidden sm:rounded-lg rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <img
          class="sm:w-auto w-full h-auto sm:h-full "
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          alt="Colors"
        />
      </div>
      <h6 class="mt-4 text-gray-300 font-bold cursor-pointer px-3 text-lg">
        {props.title}
      </h6>
      <div class="px-3">
        <div class="flex space-x-1 items-center">
          <p className="text-gray-600 text-xl md:text-xl">
            {props.release_date}
          </p>
        </div>
      </div>
    </>
  );
}

export default CardMovie;
