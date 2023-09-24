import React, { useEffect, useRef, useState } from 'react'
import developer from '../assets/Lotties/animation_lmxso14m.json'
import Lottie from 'lottie-react'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router'

export default function About() {
    const navigate = useNavigate()
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
                <div class="sm:flex items-center max-w-screen-xl mt-10">
                    <div class="sm:w-1/2">
                        <div class="text">
                            <h2 class="my-4 font-bold text-3xl  sm:text-4xl text-white">{/* <TextAnimation /> */} <span>Let's talk about ISTAD</span>
                            </h2>
                            <p class="text-gray-300">
                                ISTAD is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. ISTAD's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of.
                                Put simply, we live and breathe community and that's precisely what makes us different.
                            </p>
                        </div>
                        <div className='mt-10 gap-2 flex'>
                            
                            <a href="/"
                                    class="text-gray-300 inline-block rounded-lg border-2 px-6 pb-[6px] pt-2 text-md font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10
                                    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
                                    "
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >
                                    Getting Started
                                </a>
                            <a href="/"
                                class="text-gray-300 inline-block rounded-lg border-2 px-6 pb-[5px] pt-2 text-md font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                GO BACK
                            </a>
                        </div>
                    </div>
                    <div class="sm:w-1/2 py-10 pl-10">
                        <img src="https://img.freepik.com/free-photo/man-watching-streaming-service-his-tv_23-2149047410.jpg?w=1060&t=st=1695580847~exp=1695581447~hmac=753a339e7c753a4e8fd22d9e2bdf8427acd717129990afc2dfc166fb3f07b421" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
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

            <section class="col-xxl-8 px-4 py-5">
                <div class="sm:flex items-center max-w-screen-xl mt-10">
                    <div class="sm:w-1/2">
                        < Lottie
                            onComplete={handleAnimationComplete}
                            lottieRef={prodRef}
                            loop={false}
                            animationData={developer}
                        />
                    </div>
                    <div class="sm:w-1/2 p-10">
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
