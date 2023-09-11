import { Avatar } from '@material-tailwind/react';
import React from 'react';

const Leaderboard = () => {
    return (
        <div className='container mx-auto mb-20'>
            <div class="w-full rounded h-2.5 dark:bg-gray-700 mr-2">
                <Avatar src="https://www.themoviedb.org/t/p/w150_and_h150_face/DICWuOjJdPIrYo0pxaQ4KSdYaz.jpg"
                    alt="avatar"
                />
                <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-2.5 rounded dark:bg-blue-500" style={{ width: `98%` }}>20,826</div>

            </div>
        </div>
    );
}

export default Leaderboard;
