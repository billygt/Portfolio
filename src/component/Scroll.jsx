import React, { useState, useEffect } from 'react';

export default function Scroll() {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const updateScrollPercentage = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const newScrollPercentage = (scrollPosition/(pageHeight-windowHeight)) * 100;
            setScrollPercentage(newScrollPercentage);
        };

        window.addEventListener('scroll', updateScrollPercentage);

        // return () => {
        //     window.removeEventListener('scroll', updateScrollPercentage)
        // };
    }, [scrollPercentage]);

    return(
        <div className="scroll-container">
            <div style={{width: `${scrollPercentage}%`}} className="progress-bar"></div>
        </div>
    )
}