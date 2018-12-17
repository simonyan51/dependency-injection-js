import React from 'react';
import '../../assets/styles/loader.css';

const Loader = ({
    asyncState = {},
    children,
}) => {
    const {
        isLoading,
        data,
        err,
    } = asyncState;
    if (isLoading) {
        return (
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    } else if (!err && data) {
        return children(data);
    } else {
        return (
            <div>
                Something went wrong
            </div>
        );
    }
};

export default Loader;