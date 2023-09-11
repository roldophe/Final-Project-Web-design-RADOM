import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const ModalVideos = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className='container mx-10'>
            <React.Fragment>
                <ModalVideo
                    channel="youtube"
                    youtube={{ mute: 0, autoplay: 0 }}
                    isOpen={isOpen}
                    videoId="hXzcyx9V0xw"
                    onClose={() => setOpen(false)}
                />
                <button className="btn-primary" onClick={() => setOpen(true)}>
                    VIEW DEMO
                </button>
            </React.Fragment>
        </div>
    );
}

export default ModalVideos;
