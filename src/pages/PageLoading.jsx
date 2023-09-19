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
        <div className='container mx-auto md:-mt-36'>
            < Lottie
                onComplete={handleAnimationComplete}
                lottieRef={prodRef}
                loop={false}
                animationData={animationData}
                
            />
        </div>
    );
}

export default PageLoading;
