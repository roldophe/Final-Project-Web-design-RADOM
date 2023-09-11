import React from 'react';
import { StickyNavbar } from '../components/StickyNavbar';
import { FooterWithSocialLinks } from '../components/FooterWithSocialLinks';
import Jumbotron from '../components/Jumbotron';
import Read from './read';
import { Cards } from '../components/Card';
import Trending from '../components/Trending';
import Leaderboard from '../components/Leaderboard';
import Video from '../components/Video';
import ModalVideos from '../components/ModalVideos';
import Model from '../components/Model';
import CardII from '../components/CardII';
import SliderPopulars from '../components/SliderPopulars';
import SlideTrending from '../components/SlideTrending';
import LatestTrailer from '../components/LatestTrailer';

const Home = () => {
    return (
        <>
            <main className='container mx-auto '>
                <Jumbotron />
                {/* <Trending/> */}
                {/* <Video/> */}
                {/* <Read /> */}
                {/* <Cards/> */}
                {/* <Leaderboard/> */}
                {/*  <ModalVideos/> */}
                {/* <Model/> */}
                {/* <CardII/> */}

                {/* Trending Section Start */}
                <section>
                    {/* Heading */}
                    <div className="flex items-center justify-between px-5 py-3 mt-5 rounded-none">
                        <h2 className="text-2xl font-bold text-white">
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
                    <div className="flex items-center text-white justify-between px-5 py-3 mt-5 rounded-none">
                        <h2 className="text-2xl font-bold">
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
