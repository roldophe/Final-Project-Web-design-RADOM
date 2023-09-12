import Lottie from 'lottie-react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import animationData from "../../src/assets/Lotties/oops404.json"
const Notfound = () => {
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
        <div class="container mx-auto justify-center">
            < Lottie
                onComplete={handleAnimationComplete}
                lottieRef={prodRef}
                loop={false}
                animationData={animationData}
                
            />
            <div className='flex justify-center mb-20'>
                <button
                    class="inline-flex items-center justify-center font-medium tracking-tight rounded-lg border transition hover:scale-105 hover:-rotate-1 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset h-11 px-4 text-lg text-white shadow focus:ring-white border-transparent bg-blue-500 hover:bg-blue-900 focus:bg-blue-600 focus:ring-offset-blue-600"
                    onClick={() => navigate("/")}
                >
                    <span>Back to Home</span>
                </button>
            </div>
        </div>

    );
}

export default Notfound;
