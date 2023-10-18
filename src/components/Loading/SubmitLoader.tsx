import React from "react";

const SubmitLoader = () => {
    return (
        <div className="w-full h-[100vh] absolute bg-[rgba(0,0,0,.5)] mt-[65px]" style={{ zIndex: 10000 }}>
            <h1
                className="animated-heading absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                data-text="DETAILS SUBMITTING"
            >
                DETAILS SUBMITTING...
            </h1>
        </div>
    );
};

export default SubmitLoader;
