import React, { useEffect, useRef, useState } from 'react'
import developer from '../assets/Lotties/animation_lmxso14m.json'
import Lottie from 'lottie-react'

export default function About() {
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
        <main className='container mx-auto'>
            <section>
                <div class="sm:flex items-center max-w-screen-xl md:mt-10">
                    <div class="sm:w-1/2">
                        <div class="text p-5 md:p-0">
                            <h2 class="my-4 font-bold text-3xl  sm:text-4xl text-white"><span>Let's talk about ISTAD</span>
                            </h2>
                            <p class="text-gray-300">
                                ISTAD is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. ISTAD's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of.
                                Put simply, we live and breathe community and that's precisely what makes us different.
                            </p>
                        </div>
                        <div className='md:mt-10 mt-5 gap-2 flex md:pr-0 pl-5'>
                            
                            <a href="/"
                                    class="text-gray-300 inline-block rounded border-2 px-6 pb-[6px] pt-2 md:text-md text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600  hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10
                                    bg-blue-700 hover:bg-blue-900
                                    "
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >
                                    Getting Started
                                </a>
                            <a href="/"
                                class="text-gray-300 inline-block rounded border-2 px-6 pb-[5px] pt-2 md:text-md text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                GO BACK
                            </a>
                        </div>
                    </div>
                    <div class="sm:w-1/2 md:py-10 md:pl-10 p-5 md:p-0">
                        <img src="https://img.freepik.com/free-vector/dashboard-element-collection_23-2148394289.jpg?w=1060&t=st=1695623727~exp=1695624327~hmac=9099be4d9002d4f351def0d2eb2f7f2efe0863773725a4c2284a1853fa674965" />
                    </div>
                </div>
            </section>
            <section className='px-5 justify-center mt-5'>
                <p className='text-center text-xl text-gray-100'>Trusted by designers & developers from over companies worldwide</p>
                <div className='mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-items-center justify-center gap-5'>
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Google_13d1bebc3a.svg?updated_at=2023-02-01T09:30:58.652Z" alt="google" />
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Disney_9326063989.svg?updated_at=2023-02-01T09:35:39.701Z" alt="disney" />
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Duolingo_f8ada51f7b.svg?updated_at=2023-02-01T09:36:51.939Z" alt="" />
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Uber_d1b19ee87f.svg?updated_at=2023-02-01T09:35:39.735Z" alt="" />
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/instacard_new_b1fa17db81.svg" alt="" />
                    <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Microsoft_78d3346119.svg?updated_at=2023-02-01T09:35:39.737Z" alt="" />
                </div>
            </section>

            <section class="col-xxl-8 py-5">
                <div class="sm:flex items-center max-w-screen-xl mt-10">
                    <div class="sm:w-1/2">
                        < Lottie
                            onComplete={handleAnimationComplete}
                            lottieRef={prodRef}
                            loop={false}
                            animationData={developer}
                        />
                    </div>
                    <div class="sm:w-1/2 md:py-10 md:pl-10 p-5 md:p-0">
                        <h2 class="my-4 font-bold text-3xl  sm:text-4xl text-gray-100">Lightweight, scalable animations for your ads and social media</h2>
                        <p class="text-gray-300">LottieFiles takes away the complexity from motion design. It lets you create, edit, test, collaborate and ship a Lottie in the easiest way possible.</p>

                    </div>
                </div>
            </section>

            <section className=' px-5 py-5'>
                <h2 className='my-4 font-bold text-2xl text-center sm:text-3xl text-white'><span>Motion design made easy</span></h2>
                <div className='w-75 mx-auto m-5'>
                    <img src="https://framerusercontent.com/images/CdX873RJfHUZ4CiIH3kyRyHPDc.png" alt="" />
                </div>
            </section>

        </main>
    )
}
