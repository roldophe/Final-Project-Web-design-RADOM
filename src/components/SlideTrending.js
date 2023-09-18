import React, { useEffect} from 'react';
import CardSlide from './Cards/CardSlide';
import { useDispatch, useSelector } from 'react-redux';
import { fectch_all_trending } from '../redux/actions/TrendingAction';

const SlideTrending = () => {
    const dispatch = useDispatch();
    const { movies } = useSelector(state => state.trendingReducer);
    useEffect(() => {
        dispatch(fectch_all_trending())
    }, [])
    console.log("Movie action: ", movies)

    console.log('Movies', movies && movies.results);
    return (
        <div class="flex flex-col m-auto bg-no-repeat bg-[center_top_8rem] 
        bg-[url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)]"
        >
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar mb-5 px-3">
                <div
                    class="flex flex-nowrap mt-3"
                >
                    {
                        movies && movies.results && movies.results.map((movie) => (
                            <div class="inline-block pl-3 duration-500 hover:scale-105 hover:shadow-xl">
                                <a href={`/read/${movie.id}`} a>

                                    <CardSlide
                                        poster_path={movie.poster_path}
                                        title={movie.title}
                                        release_date={movie.release_date}
                                        vote_average={movie.vote_average}
                                    />
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SlideTrending;
