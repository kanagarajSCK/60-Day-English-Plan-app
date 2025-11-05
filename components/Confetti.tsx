import React from 'react';

const CONFETTI_COUNT = 150;

const Confetti: React.FC = () => {
    const confetti = Array.from({ length: CONFETTI_COUNT }).map((_, i) => {
        const style = {
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`,
            transform: `rotate(${Math.random() * 360}deg)`,
        };
        return <div key={i} className="confetti-piece" style={style}></div>;
    });

    return <div className="confetti-container" aria-hidden="true">{confetti}</div>;
};

export default Confetti;