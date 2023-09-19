import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';
import { useParams } from 'react-router';

const Trailer = () => {
    const [TrailerMovie, setTrailerMovie] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    let { id } = useParams(null);
    useEffect(() => {
        const fetchTrailerMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`);
                const data = await response.json();
                setTrailerMovie(data);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchTrailerMovies();
    }, []);

    console.log("Trailer Movie:", TrailerMovie);

    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };
    return (
        <>
            <div>
                {TrailerMovie?.results?.length > 0 && (
                    <ModalVideo
                        channel="youtube"
                        autoplay
                        isOpen={modalIsOpen}
                        videoId={TrailerMovie.results[0].key}
                        onClose={handleCloseModal}
                        classNames="w-fullscreen"
                    />
                )}
            </div>
            <button
                type="button"
                onClick={handleOpenModal}
                class="border border-gray-100 text-gray-100 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
            >
                TRAILER
            </button>

        </>
    );
}

export default Trailer;
