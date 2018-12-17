import React from 'react';
import '../../assets/styles/User.css';

const User = ({
    user: {
        gender,
        name: {
            first,
            last,
            email,
        },
        picture: {
            medium,
        }
    },
}) => (
    <div className="user">
        <h1>{`${first} ${last}`}</h1>
        <h3>{email}</h3>
        <img src={medium} />
    </div>
);

export default User;