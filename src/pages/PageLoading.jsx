import React, { useEffect, useRef, useState } from 'react';
import animationData from "../assets/Lotties/animation_loading.json"
import Lottie from 'lottie-react';
const PageLoading = () => {
    const prodRef = useRef(null);
    const [reverseCount, setReverseCount] = useState(0);
    const maxReverseCount = 1; // Set the maximum number of reverse repetitions

    const handleAnimationComplete = () => {
        if (reverseCount < maxReverseCount) {
            prodRef.current?.setDirection(-1);
            prodRef.current?.play();
            setReverseCount(reverseCount + 1);
        } else {
            prodRef.current?.setDirection(1); // Set the direction to forward
            prodRef.current?.play();
            setReverseCount(0); // Reset the reverse count
        }
    };

    useEffect(() => {
        prodRef.current?.play();
    }, []);
    return (
        // <div className='container mx-auto md:-mt-36'>
        //     < Lottie
        //         onComplete={handleAnimationComplete}
        //         lottieRef={prodRef}
        //         loop={false}
        //         animationData={animationData}

        //     />
        // </div>
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto animate-pulse">
                <h1 class="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                    <div class="w-full ">
                        <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div class="w-full ">
                        <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div class="w-full ">
                        <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div class="w-full ">
                        <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div class="w-full ">
                        <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div class="w-full ">
                        <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div class="w-full ">
                        <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div class="w-full ">
                        <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>
                </div>
            </div>
        </section>
        // <div className="flex items-center justify-center mt-10">
        //     <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-purple-500"></div>
        //     <span className="ml-2 text-gray-600">Loading...</span>
        // </div>
    );
}

export default PageLoading;
