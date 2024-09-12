import React from 'react';
import '../assets/css/loader.css';

const Loader = ({ isLoading }) => {
    return (
        <>
            {
                isLoading ? (
                    <div className="loader-overlay">
                        <div className="loader"></div>
                    </div>
                ) : null
            }
        </>
    );
};

export default Loader;
