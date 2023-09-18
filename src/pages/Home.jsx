import React from 'react';
import SliderPopulars from '../components/SliderPopulars';
import SlideTrending from '../components/SlideTrending';
import LatestTrailer from '../components/LatestTrailer';
import Jumbotron from '../components/Jumbotron';

const Home = () => {
    return (
        <>
            <main className='container mx-auto '>
                <Jumbotron />

                {/* Trending Section Start */}
                <section>
                    {/* Heading */}
                    <div className="flex items-center justify-between px-5 py-3 mt-5 rounded-none ">
                        <h2 className="text-2xl font-bold text-white ">
                            Trending
                        </h2>
                    </div>
                    <SlideTrending />
                </section>
                {/* Trending Section End */}

                {/* Latest Trailer Start */}
                <section>
                    <div className="flex items-center justify-between px-5 -mt-10 rounded-none">
                        <h2 className="text-2xl font-bold text-white">
                            Latest Trialers
                        </h2>
                    </div>
                    <LatestTrailer />
                </section>

                {/* Latest Trailer End */}

                {/* Popular Section Start */}
                <section>
                    {/* Heading */}
                    <div className="flex items-center justify-between px-5 py-3 mt-5 rounded-none">
                        <h2 className="text-2xl font-bold text-white">
                            Popular Movies
                        </h2>
                    </div>
                    <SliderPopulars />
                </section>
                {/* Popular Section End */}
            </main>

        </>
    );
}

export default Home;
