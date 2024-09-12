import React from 'react';
import { gsap } from 'gsap';
import { TypeAnimation } from 'react-type-animation';
import '../assets/css/banner.css';

const Banner = () => {
    const handleArrowClick = () => {
        gsap.to('.banner', {
            y: '-100vh',
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
                console.log('Animation complete!');
            },
        });
    };

    return (
        <div className="banner">
            <div className="banner-content">
                <TypeAnimation
                    sequence={[
                        'Transform Your Cover Letters',
                        1000,
                        'Transform Your Proposals',
                        1000,
                        'Transform Your Documents',
                        1000,
                        'Transform Your MOMs',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '4rem', fontWeight: 800, display: 'inline-block' }}
                    repeat={Infinity}
                />
                <p>
                    Effortlessly align your cover letter with the job description provided on the right. Simply update your cover letter to match the job requirements and make your application stand out.
                </p>
                <button className="arrow-button" onClick={handleArrowClick}>
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16.293l-4.293-4.293 1.414-1.414L12 13.465l2.879-2.879 1.414 1.414L12 16.293z" fill="#fff" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Banner;
