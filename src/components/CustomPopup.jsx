import React from 'react';
import '../assets/css/custom-popup.css';

const CustomPopup = ({ show, handleClose, title, bodyContent, footerButtons }) => {
    return (
        <>
            {show && (
                <>
                    <div className="modal-backdrop" onClick={handleClose} />
                    <div className="modal d-block modal-lg" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{title}</h5>
                                </div>
                                <div className="modal-body">{bodyContent}</div>
                                <div className="modal-footer">
                                    {footerButtons.map((button, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className={`btn ${button.className}`}
                                            onClick={button.onClick || handleClose}
                                        >
                                            {button.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default CustomPopup;
