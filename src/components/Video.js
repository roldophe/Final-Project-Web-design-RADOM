import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
const Video = () => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    const opts: YouTubeProps['opts'] = {
        height: '500',
        width: '658',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return <
        YouTube videoId="hXzcyx9V0xw" opts={opts} onReady={onPlayerReady}
    />;
}

export default Video;
