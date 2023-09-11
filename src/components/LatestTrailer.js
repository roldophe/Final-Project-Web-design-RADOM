import React from 'react';

const LatestTrailer = () => {
    return (
        <>
            <div class="min-h-full mt-10 grid place-items-center" style={{
                /* backgroundColor: "#0d1423", */
                background: "linear-gradient(#2b4a62, #0d1423)"
            }}>
                
                <div class=" rounded-md shadow-lg">
                    <div class="md:flex px-4 leading-none max-w-full">
                        <div class="flex-none ">
                            <img
                                src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
                                alt="pic"
                                class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 "
                            />
                        </div>

                        <div class="flex-col text-gray-300 text-center">

                            <p class="pt-4 text-2xl font-bold">Joker (2020)</p>
                            <hr class="hr-text" data-content="" />
                            <div class="text-md flex justify-between px-4 my-2">
                                <span class="font-bold">2h 2min | Crime, Drama, Thriller</span>
                                <span class="font-bold"></span>
                            </div>
                            <p class="hidden md:block px-4 my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>

                            <p class="flex text-md px-4 my-2">
                                Rating: 9.0/10
                                <span class="font-bold px-2">|</span>
                                Mood: Dark
                            </p>

                            <div class="text-xs">
                                <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>

                                <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>

                                <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
                            </div>
                            {/*             <p>ICON BTNS</p> ​*/}
                        </div>
                    </div>
                    <div class="flex justify-between items-center px-4 mb-4 w-full">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                                class="w-5 h-5 ml-2 fill-red-600"
                            >
                                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 576 512"
                                class="w-5 h-5 ml-2 fill-blue-600"
                            >
                                <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" /></svg>
                            {/* <i class="material-icons mr-2 text-red-600">favorite_border</i>
                            <i class="material-icons text-blue-600">remove_red_eye</i> */}
                        </div>
                        {/* <div class="flex">
                            <i class="material-icons ml-2 text-yellow-600">sentiment_very_satisfied</i>
                            <i class="material-icons ml-2 text-yellow-600">sentiment_neutral</i>
                            <i class="material-icons ml-2 text-yellow-600">sentiment_very_dissatisfied</i>
                            <i class="material-icons ml-2 text-yellow-600">star_outline</i>
                            <i class="material-icons ml-2 text-yellow-600">star_half</i>
                            <i class="material-icons ml-2 text-yellow-600">star</i>

                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default LatestTrailer;
